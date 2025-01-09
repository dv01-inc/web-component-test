import { r2wc } from 'r2wc';
import UserGreeting from './components/user-greeting.tsx';
import { Todos } from './components/TodoApp';

customElements.define('wc-test-component', r2wc(UserGreeting, {  shadow: "closed", props: {userName: "string"} }));
customElements.define('wc-todos', r2wc(Todos, {  shadow: "open", props: {name: "string"} }));
