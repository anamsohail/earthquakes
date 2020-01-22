const K_SIZE = 40;

const markerStyle = {
  position: 'absolute',
  border: '5px solid #f44336',
  opacity: '0.7',
  backgroundColor: 'white',
  cursor: 'pointer'
};

const markerStyleHover = {
  ...markerStyle,
  border: '5px solid #3f51b5'
};

export {markerStyle, markerStyleHover, K_SIZE};