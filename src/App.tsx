import './App.css'

import { Todos } from './components/TodoApp';



function App() {
  return (
    <>

      <h1>React Component</h1>
      <Todos name='Denis'/>
      <br/>
      <h1>Web Components</h1>
      <wc-test-component user-name='Denis'></wc-test-component>
      <wc-todos name='Denis'></wc-todos>
    </>
  )
}

export default App
