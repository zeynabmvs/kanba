import { Chip } from '@mui/material';

const PriorityChip = ({ priority, size = 'small', variant = 'outlined' }) => {
  return (
    <>
      {priority === 'low' && (
        <Chip variant={variant} label={priority} color="success" size={size} />
      )}
      {priority === 'medium' && (
        <Chip variant={variant} label={priority} color="warning" size={size} />
      )}
      {priority === 'high' && <Chip variant={variant} label={priority} color="error" size={size} />}
    </>
  );
};

export default PriorityChip;

