import './App.css'
import { Todos } from './components/TodoApp';



function App() {
  return (
    <>
      <wc-test-component user-name='Denis'></wc-test-component>
      <Todos name='Denis' />
    </>
  )
}

export default App
