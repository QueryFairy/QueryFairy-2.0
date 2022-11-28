import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { dracula } from '@uiw/codemirror-theme-dracula';
import {EditorView, basicSetup} from "codemirror";
import {EditorState} from "@codemirror/state";

const copyToClipboard = (output) => {
  console.log(output)
  navigator.clipboard.writeText(JSON.stringify(output));
}

const Output = (props) => {
  const { output, resetPath, setErrorMessage } = props;
  
  return (
  <div className='Output'>
    <div className="CodeMirrorContainer">
      <CodeMirror
      onClick = {() => {
        copyToClipboard(output);
        setErrorMessage('Code copied to clipboard!');
        setTimeout(() => setErrorMessage(''), 3000);
      }
    }
      className="CodeMirror"
      value={output}
      theme={dracula}
      extensions={
        [javascript({ jsx: true }), EditorView.lineWrapping, EditorState.readOnly.of(true)]}
      options={{
        linewrapping: true
            }}
        />
      {/* <button onClick={resetPath}>Reset Path</button> */}
    </div>
  </div>
  );
};
export default Output;
