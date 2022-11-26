import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { dracula } from '@uiw/codemirror-theme-dracula';
import {EditorView, basicSetup} from "codemirror";
import {EditorState} from "@codemirror/state";

const Output = (props) => {
  const { output } = props;

  return (
  <div className='Output'>
    <CodeMirror
    value='//Hello'
    theme={dracula}
    extensions={
      [javascript({ jsx: true }), EditorView.lineWrapping, EditorState.readOnly.of(true)]}
    options={{
      linewrapping: true
          }}
      />
  </div>
  );
};
export default Output;
