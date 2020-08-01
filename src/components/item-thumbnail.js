import React,{useRef, useCallback} from 'react'

function ItemThumbnail({items, handleVideoSelect, loading, handleSetPage, page}){
    
    const observer = useRef();

    const lastVideo = useCallback(node =>{
      if(observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver(entries =>{
        if(entries[0].isIntersecting){
            handleSetPage(page);
        }  
      })
      if(node) observer.current.observe(node); 
    });
    
    return(
        <div>

        {
            items.map((item,index) =>(
                items.length === index+1 ?
                    <div ref={lastVideo} key={item.id.videoId} onClick={ () => handleVideoSelect(item)}>
                        <img className="My-thumbnail" src={item.snippet.thumbnails.medium.url} alt={item.snippet.description}/>
                        <div>
                            <div id="videoTitle" className='My-Title'>{item.snippet.title}</div>
                        </div>
                    </div> 
                
                :
                    <div key={item.id.videoId} onClick={ () => handleVideoSelect(item)}>
                        <img className="My-thumbnail" src={item.snippet.thumbnails.medium.url} alt={item.snippet.description}/>
                        <div>
                            <div id="videoTitle" className='My-Title'>{item.snippet.title}</div>
                        </div>
                    </div> 
                
                   
            ))
        }
        
        </div>

    )
}

export default ItemThumbnail;