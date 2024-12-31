import React, { useState } from 'react'
import Tiptap from './components/Tiptap'
import './App.css';
import ShowPost from './components/ShowPost';

const App = () => {

  const [htmlContent, setHtmlContent] = useState('');

  const handleEditorContentSave = (html)=>{
    console.log(html)
    setHtmlContent(html);
  }

  return (
    <div>
      <Tiptap onEditorContentSave={handleEditorContentSave} />
      <hr />
      <ShowPost content= {htmlContent} />
    </div>
  )
}

export default App