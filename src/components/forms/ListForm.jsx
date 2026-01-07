import { Box, Button, InputLabel, Stack, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const validationSchema = Yup.object().shape({
  title: Yup.string().required('Title is required').max(50, 'Title must not exceed 50 characters'),
});

const ListForm = ({ onSubmit, onClose, defaultValues = {} }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: defaultValues, resolver: yupResolver(validationSchema) });

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { mb: 1, width: '100%' },
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div style={{ marginBottom: '24px' }}>
        <InputLabel id="title-label">title</InputLabel>
        <TextField
          {...register('title')}
          error={errors?.title}
          id="outlined-helperText"
          variant="outlined"
          type="text"
          helperText={errors?.title && errors?.title?.message}
        />
      </div>
      <Stack direction="row" sx={{ gap: '16px' }}>
        <Button variant="contained" type="submit" sx={{ flexGrow: 1 }}>
          Save
        </Button>
        <Button variant="outlined" onClick={onClose} color="error" sx={{ flexGrow: 1 }}>
          Cancel
        </Button>
      </Stack>
    </Box>
  );
};

export default ListForm;
