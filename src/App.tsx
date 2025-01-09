import './App.css'
import { Todos } from './components/TodoApp';
import UserGreeting from './components/user-greeting.tsx';
import React from 'react';
import { FlexContainer } from '@dv01-inc/waterfall-ui';
// the custom elements (Note: these are not the built web components, just react components wrapped in r2wc)
import './defineCustomElements.ts'
// when the 'dist' folder is created after running 'npm run build' and copy/pasted/used in another repo you'll need to
// import the custom-elements.[es|umd].js file and custom-element-types.d.ts (but you they won't be styled)


function App() {
  const [name, setName] = React.useState('Denis')
  return (
    <>
      <FlexContainer flexDirection='flex-col' alignItems='items-center' width='w-1/4' className='mx-auto mb-3'>
        <p>What's your name?</p>
        <input placeholder="What's your name?" value={name} onChange={(e) => setName(e.target.value)}/>
      </FlexContainer>

      <h1 className='italic mb-3'>React Components</h1>
      <div className='mb-3'>
        <UserGreeting name={name}/>
        <Todos name={name}/>
      </div>
      <h1 className='italic mb-3'>Web Components</h1>
      <div className='mb-3'>
        <wc-test-component name={name}></wc-test-component>
        <wc-todos name={name}></wc-todos>
      </div>
    </>
  )
}

export default App
