import React from 'react';
// import 'codemirror/keymap/sublime';
//import { sublime } from '@uiw/codemirror-keymap-sublime';
import { dracula } from '@uiw/codemirror-theme-dracula';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
//import { javascript } from 'codemirror/mode/javascript/javascript'
//const jsx = require('codemirror/mode/javascript/javascript');


const Visualizer = (props) => {
  const { visualizer } = props;

  
  return (
  <div className='Visualizer'>
    <CodeMirror
    height="300px"
    value='//Hello'
    theme={dracula}
    //keymap={sublime}
    // mode={javascript}
    extensions={[javascript({ jsx: true })]}
    // options={{
    //       }}
    />
    </div>
  );
};
export default Visualizer;
