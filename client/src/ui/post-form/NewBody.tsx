import {Toolbar} from './Toolbar'
import MDEditor from '@uiw/react-md-editor';
import {useFormStore} from './useFormStore';
import "@uiw/react-md-editor/dist/markdown-editor.css";
import "@uiw/react-markdown-preview/dist/markdown.css";


export const NewBody = () => {
  const { mainBody, setMainBody } = useFormStore((state) => state);
  return (
    <div className="flex flex-col flex-1 pt-8">
      <Toolbar />
      <MDEditor
       className="border-0 flex-1"
        value={mainBody}
        preview='edit'
        hideToolbar={true}
        onChange={setMainBody}
        visiableDragbar={false}
        placeholder="Write your post content here..."
      />
    </div>
  );
}