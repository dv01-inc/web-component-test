
import { Card, FlexContainer } from '@dv01-inc/waterfall-ui';
import { TodoItem } from './todo-item.tsx';
import { Todo } from './index.tsx';

export interface TodosCardProps {
  isCompleted: boolean
  todos: Todo[]
  updateTodo: (todo: Todo) => void
}

export const TodosCard = ({ isCompleted, todos, updateTodo }: TodosCardProps) => {

  return (
    <Card
      title={{titleText:`${isCompleted ? "Completed Todos": "Todo List"}`}}
      width='w-full'
    >
      <FlexContainer flexDirection='flex-col' justifyContent='justify-center' alignItems='items-center' flexGap='gap-1'>
      {todos.length === 0
        ? <p>No todos yet</p>
        : todos.map((todo) =>
            <TodoItem key={todo.id} todo={todo} isCompleted={isCompleted} updateTodo={updateTodo}/>
          )}
      </FlexContainer>
    </Card>
  )
}
