/* eslint-disable react/prop-types */
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import { Box, Container, Typography } from '@mui/material';
import TaskPng from '../assets/to-do-list.png';

const TodoComponent = ({ addTask, todos, toggleTodo, deleteTodo }) => {
  return (
    <>
      <Container
        component={'main'}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100dvh',
          p: '1rem',
        }}
      >
        <Box
          sx={{
            width: { xs: '100%', md: '500px' },
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              mb: '1.5rem',
            }}
          >
            <Typography
              variant='h4'
              color={'secondary'}
              sx={{ fontWeight: '900' }}
            >
              MUI React
            </Typography>
            <img
              src={TaskPng}
              alt='Todo icon'
              style={{ width: '50px', height: 'auto' }}
            />
          </Box>
          <TodoForm addTodo={addTask} />
          <TodoList
            todos={todos}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        </Box>
      </Container>
    </>
  );
};

export default TodoComponent;
