import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { dracula } from '@uiw/codemirror-theme-dracula';
import {EditorView, basicSetup} from "codemirror";
import {EditorState} from "@codemirror/state";

const Output = (props) => {
  const { output, resetPath } = props;

  return (
  <div className='Output'>
    <CodeMirror
    value={output}
    theme={dracula}
    extensions={
      [javascript({ jsx: true }), EditorView.lineWrapping, EditorState.readOnly.of(true)]}
    options={{
      linewrapping: true
          }}
      />
    <button onClick={resetPath}>Reset Path</button>
  </div>
  );
};
export default Output;
