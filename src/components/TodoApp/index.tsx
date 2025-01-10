import { useMemo, useState } from 'react';
import { v7 as uuidv7 } from 'uuid';
import { Button, FlexContainer, TextField, Tooltip } from '@dv01-inc/waterfall-ui';
import { TodosCard } from './todo-card.tsx';
import styles from './todo.module.css'

export interface Todo {
  id: string
  text: string
  completed: boolean
}

type TodoTuple = [Todo[], Todo[]]

interface TodosProps{
  name: string
}
export const Todos = ({name}:TodosProps)=>{
  const [todos, setTodos] = useState<Todo[]>([])
  const [todoInput, setTodoInput] = useState<string>('')

  const handleAddTodo=()=>{
    if(todoInput.trim() === '') return
    setTodos([ {id: uuidv7(), text: todoInput, completed: false}, ...todos,])
    setTodoInput('')
  }

  const updateTodo = (item: Todo) => {
    const updated = {
      ...item,
      completed: !item.completed
    }
    setTodos(todos.map((t) => t.id === item.id ? updated : t))
  }

  const [uncompletedTodos, completedTodos] = useMemo(() => {
    return todos.reduce((acc, todo)=> {
      if (todo.completed) {
        acc[1].push(todo);
      } else {
        acc[0].push(todo);
      }
      return acc;
    }, [[], []] as TodoTuple);
  }, [todos]);

  return (
    <div className={styles.container}>
      <FlexContainer flexDirection='flex-col' justifyContent="justify-center" alignItems="items-center" width='w-full' flexGap='gap-5'>
        <h1>{name ? `${name}'s`: 'Nameless Ones'} Todos</h1>
        <FlexContainer width='w-full'>
          <TextField
            placeholder="Add a todo item"
            value={todoInput}
            onChange={setTodoInput}
            size='large'
          />
          <Tooltip content="Add Todo" placement="top">
            <Button
              onPress={handleAddTodo}
              variant="success"
              icon='circle-plus'
              size='large'
            />
          </Tooltip>
        </FlexContainer>
        <TodosCard isCompleted={false} todos={uncompletedTodos} updateTodo={updateTodo}/>
        <TodosCard isCompleted={true} todos={completedTodos} updateTodo={updateTodo}/>
      </FlexContainer>
    </div>
  )
}
