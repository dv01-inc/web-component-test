declare namespace JSX {
  interface IntrinsicElements {
    // trying to use a camelCase prop (e.g. userName - converted to user-name by r2wc) made the web component not reactive to prop changes
    // 'wc-test-component': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & { 'user-name'?: string };

    'wc-test-component': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & { 'name'?: string };
    'wc-todos': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & { 'name'?: string };
  }
}