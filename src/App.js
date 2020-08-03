import React,{useState} from 'react';
import './App.css';
import MyHeader from './components/my-header'
import ItemThumbnail from './components/item-thumbnail';
import MyVideo from './components/my-video';
import useSearchVideo from './useSearchVideo';


function App() {


  const [query, setQuery] = useState('');
  const [nextPage, setNextPage] = useState('');
  const [selectedVideo, setSelectedVideo] = useState("");
  const [search, setSearch] = useState('');
  
  const {
    data,
    loading,
    error,
    errorMsg,
    page
  } = useSearchVideo(search,nextPage);

  function handleVideoSelect(item){ 
    setSelectedVideo(item);
  }
  
  const  handleSetPage = (val) => {
      setNextPage(val);
  }
  
  return (
    <div className="App">
      <MyHeader></MyHeader>   
      
      <div className="Search-container">
          
          <form  onSubmit={event => {
            setSearch(query);
            event.preventDefault();
          }}>
            <input
              className="new-search"
              type="text"
              value={query}
              onChange={event => setQuery(event.target.value)}
            /> 
            <button className="new-search-button" type="submit">Search</button> 
          </form>

          {
            error ? <div className="error-message">{errorMsg.message}</div>
            :""
          }
      </div>
      <div>
        
      </div>

      <div className="My-video-list">
              
          {   
            data ?  
            <ItemThumbnail items={data} handleVideoSelect={handleVideoSelect} loading={loading} handleSetPage={handleSetPage} page={page}></ItemThumbnail>                 
             : "" 
          }

        
            
      </div>

      <div className="My-video">
        {
          selectedVideo  === "" ? "" :     
          <MyVideo item={selectedVideo}></MyVideo>
        }
      </div>

    </div>
  );

}

export default App;
