import React from 'react';
// import 'codemirror/keymap/sublime';
//import { sublime } from '@uiw/codemirror-keymap-sublime';
import { dracula } from '@uiw/codemirror-theme-dracula';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import {EditorView, basicSetup} from "codemirror";
import {EditorState} from "@codemirror/state"
//import { javascript } from 'codemirror/mode/javascript/javascript'
//const jsx = require('codemirror/mode/javascript/javascript');


const Visualizer = (props) => {
  const { data } = props;


  const text = JSON.stringify(data, null, 2);

  
  return (
  <div className='Visualizer'>
    <CodeMirror
    value={text}
    theme={dracula}
    //keymap={sublime}
    // mode={javascript}
    extensions={
      [javascript({ jsx: true }), EditorView.lineWrapping, EditorState.readOnly.of(true)]}
    options={{
      linewrapping: true,
          }}
    />
    </div>
  );
};
export default Visualizer;
