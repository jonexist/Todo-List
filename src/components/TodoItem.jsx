/* eslint-disable react/prop-types */
import { Icon } from '@iconify/react';
import {
  useTheme,
  Typography,
  ListItem,
  Checkbox,
  IconButton,
  Box,
} from '@mui/material';

const TodoItem = ({ id, title, completed, toggleTodo, deleteTodo }) => {
  const handleToggle = ({ target: { checked } }) => toggleTodo(id, checked);

  const theme = useTheme();

  return (
    <ListItem
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        bgcolor: 'primary.light',
        borderRadius: '0.8rem',
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Checkbox
          checked={completed}
          onChange={handleToggle}
          sx={{
            color: theme.palette.secondary.main,
          }}
        />
        <Typography
          variant='subtitle1'
          sx={{
            textDecoration: completed ? 'line-through' : 'none',
            color: completed ? 'text.disabled' : 'secondary.main',
            fontWeight: '500',
            fontSize: '1.1rem',
          }}
        >
          {title}
        </Typography>
      </Box>
      <Box>
        <IconButton
          variant='contained'
          color='error'
          onClick={() => deleteTodo(id)}
        >
          <Icon icon='fluent:delete-12-regular' />
        </IconButton>
      </Box>
    </ListItem>
  );
};

export default TodoItem;
