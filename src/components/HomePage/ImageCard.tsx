import React, { useState, useEffect } from 'react';
import LazyLoad from 'react-lazyload';
import { IImage, ILike } from '../../store/image/types';
import { likeImage, undoImageLike } from '../../store/image/actions';
import { useSelector, useDispatch } from 'react-redux';
import { select } from '../../store/selectors';
import useStyles from './ImageCardStyles';

interface IImageCardProps {
  image: IImage;
}

const ImageCard: React.FC<IImageCardProps> = ({ image }) => {
  const [liked, setLiked] = useState(false);
  const [userLike, setUserLike] = useState<ILike>();
  const userId = useSelector(select.userId);

  const classes = useStyles();

  useEffect(() => {
    const userImageLike = image.likes.find((like) => like.userId === userId);
    if (userImageLike) {
      setUserLike(userImageLike);
      setLiked(true);
    }
  }, [userId, image.likes]);

  const dispatch = useDispatch();

  const undoLike = () => {
    if (userLike) {
      dispatch(undoImageLike(userLike.id, image.id));
      setLiked(false);
    }
  };

  const doLike = () => {
    dispatch(likeImage(image.id));
    setLiked(true);
  };

  return (
    <div className={classes.card}>
      <LazyLoad height={300} offset={100}>
        <div className="imageCard">
          <div className={classes.imageWrapper}>
            <div
              style={{
                backgroundImage: `url(${image.imageUrl}`,
                backgroundRepeat: 'no-repeat',
                minHeight: '250px',
                width: 'auto',
              }}></div>
            {/* <img
              className="imageCard__image"
              src={image.imageUrl}
              alt="Someone wearing their mouth mask wrong!"
              title="Don't wear mouth masks like this please..."
            /> */}
          </div>
          {image.location ? <h2>{image.location}</h2> : <p>Locatie onbekend</p>}
          <p>Likes: {image.likes.length} </p>
          <button
            style={{
              cursor: 'pointer',
              backgroundColor: liked ? 'blue' : 'initial',
            }}
            onClick={() => {
              liked ? undoLike() : doLike();
            }}>
            <span role="img" aria-label="Laughing out loud emoji">
              😂
            </span>
          </button>
        </div>
      </LazyLoad>
    </div>
  );
};

export default ImageCard;
