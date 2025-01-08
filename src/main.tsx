import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import UserGreeting from './components/user-greeting.tsx';
import { r2wc } from 'r2wc';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

customElements.define('wc-test-component', r2wc(UserGreeting, {  shadow: "closed", props: {userName: "string"} }));
