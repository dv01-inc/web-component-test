import { r2wc } from 'r2wc';
import UserGreeting from './components/user-greeting.tsx';
import { Todos } from './components/TodoApp';

// FIXME: trying to use a camelCase prop (e.g. userName - converted to user-name by r2wc) made the web component not reactive to prop changes
// customElements.define('dv01-user-greeting', r2wc(UserGreeting, {  shadow: "open", props: {userName: "string"} }));

// All defined web components will be added to the built dv01-custom-elements.[es|umd].js
// Note: adding the `shadow: "open" | "closed` property to the options object will cut off the styles (i.e Waterfall)  rom the parent document being available to the custom elements
customElements.define('dv01-user-greeting', r2wc(UserGreeting, { props: {name: "string"} }));
customElements.define('dv01-todos', r2wc(Todos, {  props: {name: "string"} }));
