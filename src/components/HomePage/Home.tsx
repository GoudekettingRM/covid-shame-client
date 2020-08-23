import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { select } from '../../store/selectors';
import { getAllImages } from '../../store/image/actions';
import ImageCard from './ImageCard';

const Home: React.FC = () => {
  const allImages = useSelector(select.allImages);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!allImages.length) {
      dispatch(getAllImages());
    }
  }, [allImages.length, dispatch]);

  console.log('allImages', allImages);

  return (
    <>
      <h1>Home</h1>
      {allImages.map((image) => {
        return <ImageCard image={image} key={image.id} />;
      })}
    </>
  );
};

export default Home;
