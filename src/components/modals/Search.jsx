import { useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  TextField,
  Box,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
  InputAdornment,
  Stack,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import DashboardIcon from '@mui/icons-material/Dashboard';
import TaskIcon from '@mui/icons-material/Task';
import { selectBoards } from 'features/boards/boardsSlice.js';
import { changeCurrentBoard } from 'features/boards/boardsSlice.js';
import { openModal, closeModal } from 'features/modalSlice';
import ModalTitle from 'components/modals/partials/modalTitle.jsx';

const Search = () => {
  const dispatch = useDispatch();
  const boards = useSelector(selectBoards);
  const [searchQuery, setSearchQuery] = useState('');

  // Helper function to highlight matching text
  const highlightText = (text, query) => {
    if (!query || !text) return text;

    const lowerText = text.toLowerCase();
    const lowerQuery = query.toLowerCase();
    const parts = [];
    let lastIndex = 0;
    let index = lowerText.indexOf(lowerQuery, lastIndex);

    if (index === -1) return text;

    while (index !== -1) {
      // Add text before the match
      if (index > lastIndex) {
        parts.push(text.substring(lastIndex, index));
      }
      // Add the matched text in bold
      parts.push(
        <Box key={index} component="span" sx={{ fontWeight: 'bold' }}>
          {text.substring(index, index + query.length)}
        </Box>,
      );
      lastIndex = index + query.length;
      index = lowerText.indexOf(lowerQuery, lastIndex);
    }

    // Add remaining text after the last match
    if (lastIndex < text.length) {
      parts.push(text.substring(lastIndex));
    }

    return <>{parts}</>;
  };

  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) {
      return { boards: [], tasks: [] };
    }

    const query = searchQuery.toLowerCase().trim();
    const matchingBoards = [];
    const matchingTasks = [];

    boards.forEach((board) => {
      // Search board titles
      if (board.title.toLowerCase().includes(query)) {
        matchingBoards.push(board);
      }

      // Search tasks in this board
      board.lists?.forEach((list) => {
        list.tasks?.forEach((task) => {
          const titleMatch = task.title?.toLowerCase().includes(query);
          const descriptionMatch = task.description?.toLowerCase().includes(query);

          if (titleMatch || descriptionMatch) {
            matchingTasks.push({
              ...task,
              boardId: board.id,
              boardTitle: board.title,
              listTitle: list.title,
            });
          }
        });
      });
    });

    return { boards: matchingBoards, tasks: matchingTasks };
  }, [searchQuery, boards]);

  const handleBoardClick = (board) => {
    dispatch(changeCurrentBoard(board.id));
    dispatch(closeModal());
  };

  const handleTaskClick = (task) => {
    dispatch(changeCurrentBoard(task.boardId));
    dispatch(openModal({ type: 'taskDetail', detail: task }));
  };

  return (
    <Box sx={{ minHeight: '400px', display: 'flex', flexDirection: 'column' }}>
      <ModalTitle text="Search" />
      <Box sx={{ mb: '24px' }}>
        <TextField
          fullWidth
          placeholder="Search boards, tasks..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          autoFocus
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </Box>

      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        {searchQuery.trim() && (
          <Box sx={{ flex: 1, maxHeight: '400px', overflowY: 'auto' }}>
            {searchResults.boards.length === 0 && searchResults.tasks.length === 0 ? (
              <Typography variant="body2" color="text.secondary" textAlign="center" sx={{ py: 4 }}>
                No results found
              </Typography>
            ) : (
              <Stack spacing={2}>
                {/* Boards Section */}
                {searchResults.boards.length > 0 && (
                  <Box>
                    <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>
                      Boards ({searchResults.boards.length})
                    </Typography>
                    <List sx={{ p: 0 }}>
                      {searchResults.boards.map((board) => (
                        <ListItem key={board.id} disablePadding>
                          <ListItemButton onClick={() => handleBoardClick(board)}>
                            <DashboardIcon sx={{ mr: 2, color: 'text.secondary' }} />
                            <ListItemText
                              primary={
                                <Typography component="span">
                                  {highlightText(board.title, searchQuery.trim())}
                                </Typography>
                              }
                            />
                          </ListItemButton>
                        </ListItem>
                      ))}
                    </List>
                  </Box>
                )}

                {/* Tasks Section */}
                {searchResults.tasks.length > 0 && (
                  <Box>
                    {searchResults.boards.length > 0 && <Divider sx={{ my: 2 }} />}
                    <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>
                      Tasks ({searchResults.tasks.length})
                    </Typography>
                    <List sx={{ p: 0 }}>
                      {searchResults.tasks.map((task) => (
                        <ListItem key={task.id} disablePadding>
                          <ListItemButton onClick={() => handleTaskClick(task)}>
                            <TaskIcon sx={{ mr: 2, color: 'text.secondary' }} />
                            <ListItemText
                              primary={
                                <Typography component="span">
                                  {highlightText(task.title, searchQuery.trim())}
                                </Typography>
                              }
                              secondary={
                                <Box>
                                  <Typography
                                    component="span"
                                    variant="caption"
                                    color="text.secondary"
                                    sx={{ display: 'block' }}
                                  >
                                    {task.description ? (
                                      <>
                                        {highlightText(
                                          task.description.substring(0, 60),
                                          searchQuery.trim(),
                                        )}
                                        {task.description.length > 60 ? '...' : ''}
                                      </>
                                    ) : (
                                      'No description'
                                    )}
                                  </Typography>
                                  <Typography
                                    component="span"
                                    variant="caption"
                                    color="text.secondary"
                                    sx={{ display: 'block', mt: 0.5 }}
                                  >
                                    {task.boardTitle} • {task.listTitle}
                                  </Typography>
                                </Box>
                              }
                            />
                          </ListItemButton>
                        </ListItem>
                      ))}
                    </List>
                  </Box>
                )}
              </Stack>
            )}
          </Box>
        )}

        {!searchQuery.trim() && (
          <Box sx={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Typography variant="body2" color="text.secondary" textAlign="center">
              Start typing to search boards and tasks
            </Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Search;
