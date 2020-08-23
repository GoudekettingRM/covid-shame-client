import React, { FormEvent, ChangeEvent, useState } from 'react';
import Compress from 'compress.js';
import axios from '../../network/axiosConfig';
import { select } from '../../store/selectors';
import { useSelector } from 'react-redux';

const UploadImageForm: React.FC = () => {
  const [image, setImage] = useState<File | null>(null);
  const [fileName, setFileName] = useState('');
  const [location, setLocation] = useState('');
  const authorId = useSelector(select.userId);

  const compress = new Compress();

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (!image) {
      alert('You need to upload an image');
      return null;
    }

    const formData = new FormData();

    if (location) {
      formData.append('location', location);
    }
    formData.append('authorId', `${authorId}`);
    formData.append('image', image);
    formData.append('name', fileName);

    const { data } = await axios.post('/images', formData);
    console.log('data', data);
  };

  const onChange = async (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files || !event.target.files.length) return null;

    setFileName(event.target.files[0].name);

    const files = [...Array.from(event.target.files)];
    const compFile: any = await compress.compress(files, {
      size: 1,
      quality: 1,
      maxWidth: 400,
      maxHeight: 400,
      resize: true,
    });

    const file = Compress.convertBase64ToFile(
      compFile[0].data,
      compFile[0].ext,
    );

    setImage(file);
  };

  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <label htmlFor="fileUpload">
        Plaats een foto van een mondkapjes-overtreder!
      </label>
      <input type="file" name="fileUpload" onChange={(e) => onChange(e)} />

      <label htmlFor="location">Waar heb je deze persoon gezien?</label>
      <input
        type="text"
        name="location"
        onChange={(e) => setLocation(e.target.value)}
      />

      <button type="submit">Uploaden</button>
    </form>
  );
};

export default UploadImageForm;
