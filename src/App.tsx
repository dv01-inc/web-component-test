import './App.css'

import { Todos } from './components/TodoApp';
import { WebComponentWrapper } from './components/web-component-wrapper.tsx';
import UserGreeting from './components/user-greeting.tsx';



function App() {
  return (
    <>
      <h1>React Component</h1>
      <UserGreeting name='Denis'/>
      <Todos name='Denis'/>
      <br/>
      <h1>Web Components</h1>
      <WebComponentWrapper />
    </>
  )
}

export default App
