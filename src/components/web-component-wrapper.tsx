import React from 'react';

export const WebComponentWrapper = ()=>{
  const [name, setName] = React.useState('Denis')
  return (
    <div>
      <br/>
      <input placeholder="What's your name?" value={name} onChange={(e)=>setName(e.target.value)}/>
      <br />
      <wc-test-component name={name}></wc-test-component>
      <wc-todos name={name}></wc-todos>
    </div>
  )
}
