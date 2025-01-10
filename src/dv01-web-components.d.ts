declare namespace JSX {
  interface IntrinsicElements {
    // trying to use a camelCase prop (e.g. userName - converted to user-name by r2wc) made the web component not reactive to prop changes
    // 'dv01-user-greeting': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & { 'user-name'?: string };

    'dv01-user-greeting': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & { 'name'?: string };
    'dv01-todos': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & { 'name'?: string };
  }
}
