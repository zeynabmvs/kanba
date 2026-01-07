import { Stack, Typography } from '@mui/material';
import ListActions from 'components/menus/ListActions';
import { useTheme } from '@mui/material/styles';

const ListHeader = ({ list, dragHandleProps, onHoverBg }) => {
  const theme = useTheme();

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      sx={{
        pt: '16px',
        px: '12px',
        mb: '8px',
        alignItems: 'center',
        '&:hover': {
          bgcolor: onHoverBg,
        },
        borderTopRightRadius: '8px',
        borderTopLeftRadius: '8px',
      }}
    >
      <Typography
        component="h3"
        variant={'h6'}
        sx={{
          '&:hover': { color: 'primary' },
          width: '100%',
          fontWeight: '600',
        }}
        {...dragHandleProps}
      >
        {list.title}
      </Typography>
      <ListActions list={list}></ListActions>
    </Stack>
  );
};

export default ListHeader;

