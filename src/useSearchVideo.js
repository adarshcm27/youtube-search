import {useState, useEffect} from 'react';
import axios from 'axios';

export default function useSearchVideos(search,nextPage){
    const [data, setData] = useState([]);   
    const [loading, setLoading] = useState(true);  
    const [error, setError] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');
    const [page, setPage] = useState('');
    
    useEffect(()=>{
        setData([]);
    },[search]);

    useEffect(() => {
        
        const fetchData = async () => {
        //const url = 'https://www.googleapis.com/youtube/v3/search';  
        const url = 'http://localhost:3005/search';  
        const result = await axios.get(url,{
            params : {
            part:'snippet',
            maxResults:5,
            key: process.env.REACT_APP_YOUTUBE_API_KEY,
            q: search,
            pageToken:nextPage
            },
        });
      
         setData(data => [...data, ...result.data.items])       
         setPage(result.data.nextPageToken);      
         setLoading(false);  

    };
    
    fetchData().catch( e =>{
        setError(true);
        setErrorMsg(e);
    });

  }, [search,nextPage]);

    return {data, loading, error, errorMsg, page};
}

