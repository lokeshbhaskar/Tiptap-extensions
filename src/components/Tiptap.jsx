import { Color } from "@tiptap/extension-color";
import ListItem from "@tiptap/extension-list-item";
import TextStyle from "@tiptap/extension-text-style";
import { EditorProvider, useCurrentEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import React from "react";
import Image from "@tiptap/extension-image";
import Underline from "@tiptap/extension-underline";
import {
  FaBold,
  FaItalic,
  FaStrikethrough,
  FaCode,
  FaListOl,
  FaHeading,
  FaListUl,
  FaUndo,
  FaRedo,
  FaUnderline,
  FaQuoteLeft,
} from "react-icons/fa";

const Menubar = ({ onEditorContentSave }) => {
  const { editor } = useCurrentEditor();

  if (!editor) {
    return null;
  }

  // const addImage = () => {
  //   const url = window.prompt('URL')

  //   if (url) {
  //     editor.chain().focus().setImage({ src: url }).run()
  //   }
  // }
  const handleEditorContent = () => {
    const html = editor.getHTML();
    onEditorContentSave(html);
  };

  return (
    <div className="control-group w-full flex justify-center py-2 ">
      <div className="button-group flex flex-col  gap-2  max-h-8 ">
        <div className="flex flex-wrap gap-3 p-2 text-white bg-gray-600">
          <button
            onClick={() => editor.chain().focus().toggleBold().run()}
            disabled={!editor.can().chain().focus().toggleBold().run()}
            className={editor.isActive("bold") ? "is-active" : ""}
          >
            <FaBold />
          </button>
          <button
            onClick={() => editor.chain().focus().toggleItalic().run()}
            disabled={!editor.can().chain().focus().toggleItalic().run()}
            className={editor.isActive("italic") ? "is-active" : ""}
          >
            <FaItalic />
          </button>
          <button
            onClick={() => editor.chain().focus().toggleStrike().run()}
            disabled={!editor.can().chain().focus().toggleStrike().run()}
            className={editor.isActive("strike") ? "is-active" : ""}
          >
            <FaStrikethrough />
          </button>

          <button
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            className={editor.isActive("bulletList") ? "is-active" : ""}
          >
            <FaListUl />
          </button>
          <button
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
            className={editor.isActive("orderedList") ? "is-active" : ""}
          >
            <FaListOl />
          </button>

          <button
            onClick={() => editor.chain().focus().toggleBlockquote().run()}
            className={editor.isActive("blockquote") ? "is-active" : ""}
          >
            <FaQuoteLeft />
          </button>
          <button
            onClick={() => editor.chain().focus().toggleUnderline().run()}
            className={editor.isActive("underline") ? "is-active" : ""}
          >
            <FaUnderline />
          </button>
          <button
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 1 }).run()
            }
            className={
              editor.isActive("heading", { level: 1 }) ? "is-active" : ""
            }
          >
            <FaHeading />
          </button>
          <button
            onClick={() => editor.chain().focus().undo().run()}
            disabled={!editor.can().chain().focus().undo().run()}
          >
            <FaUndo />
          </button>
          <button
            onClick={() => editor.chain().focus().redo().run()}
            disabled={!editor.can().chain().focus().redo().run()}
          >
            <FaRedo />
          </button>
        </div>
        <div className=" flex flex-wrap gap-3 p-2 mb-0 text-white bg-gray-600">
          <button
            onClick={() => editor.chain().focus().setColor("#958DF1").run()}
            className={
              editor.isActive("textStyle", { color: "#958DF1" })
                ? "is-active"
                : ""
            }
          >
            Purple
          </button>
          <button
            onClick={() => editor.chain().focus().setColor("#F98181").run()}
            className={
              editor.isActive("textStyle", { color: "#F98181" })
                ? "is-active"
                : ""
            }
            data-testid="setRed"
          >
            Red
          </button>
          <button
            onClick={() => editor.chain().focus().setColor("#FBBC88").run()}
            className={
              editor.isActive("textStyle", { color: "#FBBC88" })
                ? "is-active"
                : ""
            }
            data-testid="setOrange"
          >
            Orange
          </button>
          <button
            onClick={() => editor.chain().focus().setColor("#FAF594").run()}
            className={
              editor.isActive("textStyle", { color: "#FAF594" })
                ? "is-active"
                : ""
            }
            data-testid="setYellow"
          >
            Yellow
          </button>
          <button
            onClick={() => editor.chain().focus().setColor("#70CFF8").run()}
            className={
              editor.isActive("textStyle", { color: "#70CFF8" })
                ? "is-active"
                : ""
            }
            data-testid="setBlue"
          >
            Blue
          </button>
          <button
            onClick={() => editor.chain().focus().unsetColor().run()}
            data-testid="unsetColor"
          >
            Unset color
          </button>
         
          {/* <button onClick={addImage}>Add image from URL</button> */}
        </div>
        <div className=" flex justify-center ">
        <button className="border-2 bg-blue-300 " onClick={handleEditorContent}>save</button>
        </div>
      </div>
    </div>
  );
};

const extensions = [
  Color.configure({ types: [TextStyle.name, ListItem.name] }),
  TextStyle.configure({ types: [ListItem.name] }),
  StarterKit.configure({
    bulletList: {
      keepMarks: true,
      keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
    },
    orderedList: {
      keepMarks: true,
      keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
    },
  }),
  Underline,
  Image,
];

const content = ` `;
//  <p>This is a basic example of implementing images. Drag to re-order.</p>
//       <img src="https://placehold.co/600x400" />

export default ({ onEditorContentSave }) => {
  return (
    <EditorProvider
      extensions={extensions}
      content={content}
      slotBefore={<Menubar onEditorContentSave={onEditorContentSave} />}
    />
  );
};
