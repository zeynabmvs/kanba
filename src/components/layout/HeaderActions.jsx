import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Button, IconButton, useMediaQuery, Box } from '@mui/material';
import { useDispatch } from 'react-redux';
import { openModal } from 'features/modalSlice';
import OptionsMenu from 'components/ui/OptionsMenu';
import { useTheme } from '@mui/material/styles';

const HeaderActions = ({ board }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));
  const dispatch = useDispatch();

  const onAddListHandler = () => {
    dispatch(openModal({ type: 'addList' }));
  };

  const onDeleteBoardHandler = () => {
    dispatch(
      openModal({
        type: 'confirmDelete',
        detail: {
          type: 'board',
          obj: board,
          message: `Are you sure you want to delete board ${board?.title} and all its data?`,
        },
      }),
    );
  };

  const onEditBoardHandler = () => {
    dispatch(openModal({ type: 'editBoard' }));
  };

  return (
    <Box>
      {isSmallScreen ? (
        <IconButton onClick={onAddListHandler} color="secondary" aria-label="add list">
          <AddCircleIcon />
        </IconButton>
      ) : (
        <Button
          variant="contained"
          color="secondary"
          onClick={onAddListHandler}
          disabled={board?.lists.length > 5}
          sx={{
            backgroundColor: '#fff',
            '&:hover': {
              backgroundColor: 'secondary.main',
            },
          }}
        >
          + new List
        </Button>
      )}

      <OptionsMenu
        text="board"
        onEdit={onEditBoardHandler}
        onDelete={onDeleteBoardHandler}
        sx={{
          ml: { xs: '4px', md: '16px' },
          '& :hover': { color: theme.palette.primary.contrastText },
        }}
      />
    </Box>
  );
};

export default HeaderActions;

