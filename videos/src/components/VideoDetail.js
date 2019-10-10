import React from 'react';

const VideoDetail = ({ video }) => {
    
    if(!video) {
        return (
            <div>Loading...</div>
        );
    }

    const snippet = video.snippet;
    return(
        <div className='ui segment'>
            <h4 className='ui header'>{snippet.title}</h4>
            <p>{snippet.description}</p>
        </div>
        
    );
}

export default VideoDetail;