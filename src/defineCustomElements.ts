import { r2wc } from 'r2wc';
import UserGreeting from './components/user-greeting.tsx';
import { Todos } from './components/TodoApp';

// FIXME: trying to use a camelCase prop (e.g. userName - converted to user-name by r2wc) made the web component not reactive to prop changes
// customElements.define('wc-test-component', r2wc(UserGreeting, {  shadow: "open", props: {userName: "string"} }));

// All defined web components will be added to the built custom-elements.[es|umd].js
customElements.define('wc-test-component', r2wc(UserGreeting, {  shadow: "open", props: {name: "string"} }));
customElements.define('wc-todos', r2wc(Todos, {  shadow: "open", props: {name: "string"} }));
