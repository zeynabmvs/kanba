import { Stack } from '@mui/material';

const ScrollableContainer = ({ children, direction = 'row' }) => {
  return (
    <Stack
      direction={direction}
      sx={{
        overflowX: 'auto',
        overflowY: 'auto',
        width: '100%',
        height: '100%',
        pb: 2,
        '&::-webkit-scrollbar': {
          height: '8px',
        },
        '&::-webkit-scrollbar-track': {
          backgroundColor: 'rgba(0,0,0,0.05)',
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: 'rgba(0,0,0,0.2)',
          borderRadius: '4px',
        },
      }}
    >
      {children}
    </Stack>
  );
};

export default ScrollableContainer;

