import React,{useState,createRef} from 'react';
import { useSearchParams } from 'react-router-dom';
import Text from '../components/Text';
import {exportComponentAsJPEG} from 'react-component-export-image'

const EditPage = () => {
    const [params] = useSearchParams();
    const [count, setCount] = useState(0);

    const AddText = () => {
        setCount(count + 1);
    }

    const memeRef = createRef();

    return (
      <div>
        <div
          style={{ width: '700px', border: '1px solid' }}
          ref={memeRef}
          className='meme mt-5 mb-6'
        >
          <img src={params.get('url')} width='300px' />
        </div>
        {Array(count)
          .fill(0)
          .map(() => {
            return <Text />;
          })}

        <button onClick={AddText}>Add Text</button>
        <button
          variant='success'
          onClick={(e) => {
            exportComponentAsJPEG(memeRef);
          }}
        >
          Save
        </button>
      </div>
    );
}

export default EditPage;