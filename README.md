## r2wc test repo
A repo to get a feel for creating and using web components with React & r2wc

After cloning the repo and installing packages, start up the app (`npm run dev`) to see:
![Screenshot 2025-01-09 at 1.49.14 PM.png](public/Screenshot%202025-01-09%20at%201.49.14%E2%80%AFPM.png)

The app has an input field tied to some state, and that state is passed to a `UserGreeting` & `Todos` react component, 
along with the same `UserGreeting` & `Todos` as web components (using r2wc).

Building the app (`npm run build`) will create a `dist` folder which includes `custom-elements.es.js`, `custom-elements.umd.js`, 
and `custom-element-types.d.ts` (to avoid TS errors by adding the custom elements to JSX.IntrinsicElements) files.
The `dist` folder can be copy/pasted into another vite app (in the future added via cdn or npm package) to use the web components, 
as long as the necessary files are imported. 
e.g.:
```jsx
import React from 'react';
import '../../dist/custom-elements.es.js'
import '../../dist/custom-element-types.d.ts'
export const WebComponentWrapper = ()=>{
  const [name, setName] = React.useState('Denis')
  return (
    <div>
      <input placeholder="What's your name?" value={name} onChange={(e)=>setName(e.target.value)}/>
      <wc-test-component name={name}></wc-test-component>
      <wc-todos name={name}></wc-todos>
    </div>
  )
}
```

Note: Be sure to check out comments in `App.tsx`, `vite.config.ts`, and `defineCustomElements.ts` for more info.


### Issues
- styles - whether css modules or waterfall components, styles are not being applied to the web components. Changing the `r2wc` `shadow` option to `false` does not help. [This comment](https://github.com/bitovi/react-to-web-component/issues/147#issuecomment-1818009509) in the r2wc repo seems to address the issue but I'm not sure how we could implement the suggestion.
- vite.config.ts - there is more than likely **a lot** of room for improvement in the vite config file. I'm new to configuring this file, so I'm sure there are better ways to do things.
- r2wc props - r2wc should convert camelCase props to kebab case, but when I tried using a camelCase props (e.g. `userName`), the web component was not reactive to changes in state.  Changing the prop to just `name` resolved the issue.


### Links
- [r2wc api docs](https://github.com/bitovi/react-to-web-component/blob/main/docs/api.md)
- [using web components in react](https://css-tricks.com/3-approaches-to-integrate-react-with-custom-elements/)
