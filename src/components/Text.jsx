import React,{useState,useEffect} from 'react';
import Draggable from 'react-draggable';

const Text = () => {
  const [editMode, setEditMode] = useState(false);
  const [val, setVal] = useState("Double Click To Edit");

    return (
      <Draggable>
        {
          editMode ? <input value={val} onDoubleClick={() => setEditMode(false)} onChange={(e) => setVal(e.target.value)} /> : <h1 onDoubleClick={(e) => setEditMode(true
          )}>{val}</h1>
        }
      </Draggable>
    );
}

export default Text;