import React from 'react';

function MyVideo({item}){
    const selectedVideo = `https://www.youtube.com/embed/${item.id.videoId}`;
    
    return(
            <div>
                {               
                    !item ? <div>Loading...</div> :
            
                    <div>
                        <iframe className='My-frame' src={selectedVideo} allowFullScreen title='Video player'/>
                    </div>                        
                }
            </div>
    )
}
export default MyVideo;