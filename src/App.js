import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App () {
  const [keyword, setKeyword] = useState('');
  const [data, setData] = useState([]);
   const KeywordSearch = async (keyword) => {
    const response= await fetch(`https://youtube.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_API_KEY}&q=${keyword}&type=video&part=snippet`)
    const volume = await response.json();
    setData([{Country:volume.regionCode, Keyword:keyword, volume:volume.pageInfo.totalResults}])
    console.log(data);
  }
 
  return (
    <div>
    <div className='flex flex-row items-center pt-8 pl-12 md:gap-24 sm:gap-2 xs:gap-1'>   
    <img src='/yt.png' alt='Youtube' height={44} width={44}/>
     <h4 className='text-lg text-gray-400 font-semibold '>DashBoard</h4>
     <h4 className='text-lg font-semibold text-gray-400'>Site Explorer</h4>
     <h4 className='text-lg font-semibold '>Keyword Explorer</h4>
     <h4 className='text-lg font-semibold text-gray-400 '>Site Audit</h4>
     <h4 className='text-lg font-semibold text-gray-400'>Rank Tracker</h4>
     <h4 className='text-lg font-semibold text-gray-400 '>More</h4>
     <h4 className='text-lg font-semibold text-gray-400'></h4>
    </div>
    <div>
    <form className='pt-10 ml-12 space-x-6' onSubmit={(e)=>{e.preventDefault(); KeywordSearch(keyword);}}>
     <label className='text-lg font-sans font-bold '>
       Search Keyword:
       <input className='w-3/4 h-10 border-2 border-black ml-4 rounded-lg pl-4 font-medium' type="text" name="name" onChange={(e)=>{setKeyword(e.target.value)}}/>
     </label>
      <input className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' type="submit" value="Submit" />
      </form>
    </div>
     {data.length > 0 &&
     <div className='pt-10 mt-4 mx-12 space-x-6 p-4 bg-gray-100'>
      <h1 className='text-2xl font-bold underline space-y-8'>Result</h1>
      <h4 className='text-lg font-semibold text-gray-400 mt-4'>Country: {data[0].Country}</h4>
      <h4 className='text-lg font-semibold text-gray-400 mt-2'>Keyword: {data[0].Keyword}</h4>
      <h4 className='text-lg font-semibold text-gray-400 mt-2'>Volume: {data[0].volume}</h4>
    </div>
    } 
    </div>
  );
}

export default App;
