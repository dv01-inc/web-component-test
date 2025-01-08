import { r2wc } from 'r2wc';
import UserGreeting from './components/user-greeting.tsx';

customElements.define('wc-test-component', r2wc(UserGreeting, {  shadow: "closed", props: {userName: "string"} }));
