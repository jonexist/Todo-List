/* eslint-disable react/prop-types */
import { useState } from 'react';
import { Box, TextField, InputAdornment, IconButton } from '@mui/material';
import { Icon } from '@iconify/react';

const TodoForm = ({ addTodo }) => {
  const [newItem, setNewItem] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newItem.trim() === '') {
      setError(true);
    } else {
      addTodo(newItem);
      setNewItem('');
      setError(false);
    }
  };

  const handleOnChange = ({ target: { value } }) => setNewItem(value);

  return (
    <Box component='form' onSubmit={handleSubmit} noValidate autoComplete='off'>
      <TextField
        sx={{
          width: '100%',
          my: '0.5rem',
          borderRadius: '1rem',
          bgcolor: 'white',
        }}
        error={error}
        helperText={error ? 'Task description cannot be empty' : ''}
        value={newItem}
        onChange={handleOnChange}
        label='Create a new task'
        variant='outlined'
        InputProps={{
          inputProps: { style: { fontSize: '1rem' } },
          endAdornment: (
            <InputAdornment position='end'>
              <IconButton type='submit' color='primary'>
                <Icon icon='carbon:task-add' />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
};

export default TodoForm;
