import { Container, Typography } from '@mui/material';
import EmptyState from 'components/ui/EmptyState';

const BoardEmptyState = ({ hasBoard, boardTitle }) => {
  if (!hasBoard) {
    return (
      <Container sx={{ py: '64px' }}>
        <Typography component="p" variant="h6" textAlign="center">
          There is no board yet, create one from sidebar
        </Typography>
      </Container>
    );
  }

  return (
    <EmptyState
      image="/empty-state.svg"
      imageAlt=""
      title="This Board is empty, create a new List to get started"
    />
  );
};

export default BoardEmptyState;

