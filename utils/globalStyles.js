const resetStyles = `
  * {
    box-sizing: border-box;
  }

  body {
    background: #ecf0f1;
    font-family: 'Roboto', sans-serif;
  }
`;

const utilStyles = `
.is-hidden {
  display: none !important;
}
`;

const globalStyles = `
  ${resetStyles}
  ${utilStyles}
`;

export default globalStyles;
