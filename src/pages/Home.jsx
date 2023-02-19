import React,{useEffect,useState} from 'react';
import MemeCard from '../components/Card';
import {getAllMemes} from "../api/memes"

const HomePage = () => {
    const [data, setData] = useState(null);

    useEffect(() => { 
        getAllMemes().then((memes) => { setData(memes.data.memes) });
    }, []);

    console.log(data);

    return (
        <div className='row'>
            {
                data ? data.map((meme) => <MemeCard img={meme.url} title={meme.name} />):<h1>Data wasnt fetched</h1>
            }
        </div>
    )
}

export default HomePage;