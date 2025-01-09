import { Button, FlexContainer } from '@dv01-inc/waterfall-ui';

import { TodosCardProps } from './todo-card.tsx';
import { Todo } from 'src/components/TodoApp/index.tsx';

interface TodoItemProps extends Omit<TodosCardProps, "todos"> {
  todo: Todo
}

export const TodoItem = ({todo, updateTodo, isCompleted}: TodoItemProps) => {
  return (
    <FlexContainer key={todo.id} justifyContent='justify-start' flexGap='gap-5' alignItems='items-center' customClasses='p-3 w-full' >
      <Button
        variant={`${isCompleted ? 'success' : 'danger'}`}
        icon={`circle-${isCompleted ? 'plus' : 'check'}`}
        size='large'
        onPress={()=> updateTodo(todo)}
      />
      <p>{todo.text}</p>
    </FlexContainer>
  )
}
