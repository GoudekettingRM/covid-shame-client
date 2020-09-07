import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  card: {
    width: 'calc(100% - 3rem)',
    margin: '1rem auto',
    padding: '0.5rem',
    borderRadius: '8px',
    overflow: 'hidden',
    backgroundColor: 'lightgrey',
    '-webkitBoxShadow': '0px 16px 25px -10px rgba(0,0,0,0.75)',
    '-mozBoxShadow': '0px 16px 25px -10px rgba(0,0,0,0.75)',
    boxShadow: '0px 16px 25px -10px rgba(0,0,0,0.75)',
    '& *': {
      width: '100%',
    },
  },
  imageWrapper: {
    width: 'calc(100% + 1rem)',
    overflow: 'hidden',
    margin: '-0.5rem',
    '& imageCard__image': {
      height: '300px',
      width: '100%',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    },
  },
});

export default useStyles;
