import { Box, Button, InputLabel, MenuItem, Select, Stack, TextField } from '@mui/material';
import { Controller, useFieldArray, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import IconButton from '@mui/material/IconButton';
import { Close } from '@mui/icons-material';
import { closeModal } from 'features/modalSlice.js';
import { selectCurrentBoard } from 'features/boards/boardsSlice.js';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const validationSchema = Yup.object().shape({
  title: Yup.string()
    .required('Title is required')
    .max(100, 'Title must not exceed 100 characters'),
  description: Yup.string().max(300, 'Description must not exceed 300 characters'),
  list: Yup.string().required('Please select a list'),
  priority: Yup.string().required('Please select a priority'),
  subtasks: Yup.array().of(
    Yup.object().shape({
      title: Yup.string().required('Subtask title is required'),
    }),
  ),
});

const TaskForm = ({ onSubmit, onCancel, defaultValues = { priority: 'none', list: '0' } }) => {
  const dispatch = useDispatch();
  const currentBoard = useSelector(selectCurrentBoard);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isDirty },
  } = useForm({
    defaultValues: defaultValues,
    resolver: yupResolver(validationSchema),
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'subtasks',
  });

  const handleAddNewSubTask = () => {
    if (fields.length > 6) return;
    append({ title: '', status: 'notCompleted' });
  };

  const onSubmitHandle = (data, e) => {
    if (isDirty) {
      onSubmit(data);
    } else {
      e.target.reset();
      dispatch(closeModal());
    }
  };

  return (
    <>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { width: '100%' },
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit(onSubmitHandle)}
      >
        <Box
          sx={{
            marginBottom: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: { xs: '16px', md: '32px' },
          }}
        >
          <div>
            <InputLabel id="title-label">title</InputLabel>
            <TextField
              {...register('title')}
              error={errors?.title}
              id="outlined-helperText"
              labelId="title-label"
              variant="outlined"
              type="text"
              helperText={errors?.title && errors?.title?.message}
            />
          </div>

          <div>
            <InputLabel id="description-label">description</InputLabel>
            <TextField
              {...register('description')}
              multiline
              minRows={3}
              maxRows={7}
              error={errors?.description}
              id="outlined-helperText"
              labelId="description-label"
              helperText={errors?.description && errors?.description?.message}
            />
          </div>

          <div>
            <InputLabel id="list-label">List</InputLabel>
            <Controller
              name="list"
              control={control}
              render={({ field }) => (
                <Select {...field} labelId="list-label" displayEmpty fullWidth>
                  {currentBoard.lists?.map((item, index) => (
                    <MenuItem value={index} sx={{ fontSize: '0.875rem' }} key={index}>
                      {item.title}
                    </MenuItem>
                  ))}
                </Select>
              )}
            />
          </div>

          <div>
            <InputLabel id="priority-label">Priority</InputLabel>
            <Controller
              name="priority"
              control={control}
              render={({ field }) => (
                <Select {...field} labelId="priority-label" displayEmpty fullWidth>
                  <MenuItem value="none" sx={{ fontSize: '0.875rem' }} key="none">
                    --
                  </MenuItem>
                  <MenuItem value="low" sx={{ fontSize: '0.875rem' }} key="low">
                    Low
                  </MenuItem>
                  <MenuItem value="medium" sx={{ fontSize: '0.875rem' }} key="medium">
                    Medium
                  </MenuItem>
                  <MenuItem value="high" sx={{ fontSize: '0.875rem' }} key="high">
                    High
                  </MenuItem>
                </Select>
              )}
            />
          </div>

          <div>
            <InputLabel id="subtasks-label">Subtasks</InputLabel>
            <div
              style={{ display: 'flex', gap: '16px', flexDirection: 'column' }}
              aria-label={'subtasks-label'}
            >
              {fields.map((item, index) => {
                return (
                  <div style={{ display: 'flex', alignItems: 'center' }} key={index}>
                    <TextField
                      {...register(`subtasks.${index}.title`)}
                      error={errors?.subtasks?.[index]?.title}
                      id="outlined-helperText"
                      variant="outlined"
                      type="text"
                      label={`Subtask ${index + 1}`}
                      helperText={
                        errors?.subtasks?.[index]?.title && errors?.subtasks?.[index]?.title.message
                      }
                    />
                    <IconButton onClick={() => remove(index)} aria-label="close">
                      <Close />
                    </IconButton>
                  </div>
                );
              })}

              {fields.length < 7 && (
                <Button
                  color="secondary"
                  variant="contained"
                  onClick={handleAddNewSubTask}
                  sx={{ width: '100%' }}
                >
                  + Add New Subtask
                </Button>
              )}
            </div>
          </div>
        </Box>

        <Stack direction="row" sx={{ gap: '16px' }}>
          <Button variant="contained" type="submit" sx={{ flexGrow: 1 }}>
            Save
          </Button>
          <Button variant="outlined" onClick={onCancel} color="error" sx={{ flexGrow: 1 }}>
            Cancel
          </Button>
        </Stack>
      </Box>
    </>
  );
};

export default TaskForm;
