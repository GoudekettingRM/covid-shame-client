import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  navBar: {
    display: 'flex',
    minHeight: '2.7rem',
  },
  openButton: {
    fontSize: '20px',
    cursor: 'pointer',
    backgroundColor: '#111',
    color: 'white',
    border: 'none',
    marginLeft: 'auto',
    marginRight: '0rem',
    '&:hover': {
      backgroundColor: '#444',
    },
  },
  sidebar: {
    height: '100%',
    width: '0',
    position: 'fixed',
    zIndex: '1',
    top: '0',
    right: '0',
    backgroundColor: '#111',
    overflowX: 'hidden',
    paddingTop: '60px',
    transition: '0.5s',
    '& a': {
      padding: '8px 8px 8px 32px',
      textDecoration: 'none',
      fontSize: '25px',
      color: '#818181',
      display: 'block',
      transition: '0.3s',
      '&:hover': {
        color: '#f1f1f1',
      },
    },
  },
  closeButton: {
    fontSize: '20px',
    cursor: 'pointer',
    backgroundColor: 'white',
    color: 'black',
    border: 'none',
    position: 'absolute',
    top: '0',
    right: '0',
    height: '2.7rem',
    '&:hover': {
      backgroundColor: '#999',
    },
  },
});

export default useStyles;
