declare namespace JSX {
  interface IntrinsicElements {
    'wc-test-component': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & { 'user-name'?: string };
    'wc-todos': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & { 'name'?: string };
  }
}
