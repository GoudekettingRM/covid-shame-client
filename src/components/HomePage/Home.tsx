import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { select } from '../../store/selectors';
import { getAllImages } from '../../store/image/actions';
import ImageCard from './ImageCard';
import useStyles from './HomeStyles';

const Home: React.FC = () => {
  const allImages = useSelector(select.allImages);
  const dispatch = useDispatch();
  const classes = useStyles();

  const [setting, setSetting] = useState('new');
  useEffect(() => {
    if (!allImages.length) {
      dispatch(getAllImages(setting));
    }
  }, [allImages.length, dispatch, setting]);

  console.log('allImages', allImages);

  return (
    <>
      <h1>Home</h1>
      <button
        onClick={(e) => {
          e.preventDefault();
          setSetting('new');
        }}>
        New
      </button>
      <button
        onClick={(e) => {
          e.preventDefault();
          setSetting('popular');
        }}>
        Popular
      </button>
      <section className={classes.imagesSection}>
        {allImages.map((image) => {
          return <ImageCard image={image} key={image.id} />;
        })}
      </section>
    </>
  );
};

export default Home;
