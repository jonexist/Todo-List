/* eslint-disable react/prop-types */
import { Box, List, Typography } from '@mui/material';
import TodoItem from './TodoItem';
import EmptySVG from '../assets/Empty.svg';

const EmptyState = () => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}
  >
    <img
      src={EmptySVG}
      alt='Empty state illustration'
      style={{ width: '300px', height: 'auto' }}
    />
    <Typography
      variant='subtitle1'
      color={'secondary'}
      sx={{ textAlign: 'center' }}
    >
      No task to show
    </Typography>
  </Box>
);

const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
  return (
    <List
      sx={
        todos.length
          ? {
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              bgcolor: 'secondary.light',
              borderRadius: '1.5rem',
              padding: '1rem',
            }
          : {}
      }
    >
      {todos.length === 0 ? (
        <EmptyState />
      ) : (
        todos.map(({ id, ...todo }) => (
          <TodoItem
            key={id}
            id={id}
            {...todo}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        ))
      )}
    </List>
  );
};

export default TodoList;
