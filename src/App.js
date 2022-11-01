import { useEffect, useState } from "react";
import Homepage from "./Homepage";
import VideoPlayer from "./VideoPlayer";
import Sidebar from "./Sidebar";
import logo from './Logo.jpg'
import './App.css'
function App() {
  const [data, setData] = useState([]);
  const [link, setLink] = useState('');
  useEffect(() => {
    fetch("https://api-uat.greatmanagerinstitute.com/api/v2/getTrailerList")
      .then((res) => res.json())
      .then((vid_data) => setData(vid_data.data));
  }, []);
  return (
    <div style={{overflowX:'hidden'}}>
      <img src={logo} onClick={()=>setLink('')} className='logo' alt='logo'/>
        <div className="video">
         {link&&<div className="videoplayer">
        <VideoPlayer link={link}/>
        </div>}
          {!link?(<div className="homepage">
          {data.map((item)=>
            <Homepage item={item} setLink={setLink}/>
          )}
          </div>):
          (<div className="sidebar">
          {data.map((item)=>
            <Sidebar item={item} setLink={setLink}/>
          )}
          </div>)
        }
        </div>
    </div>
  );
}

export default App;
