import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { dracula } from '@uiw/codemirror-theme-dracula';

const Output = (props) => {
  const { output } = props;

  return (
  <div className='Output'>
    <CodeMirror
    height="175px"
    value='//Hello'
    theme={dracula}
    extensions={[javascript({ jsx: true })]}
      />
  </div>
  );
};
export default Output;
