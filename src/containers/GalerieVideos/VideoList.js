import React from 'react';
import VideoListItem from './VideoListItem';


const VideoList = (props) => {
    const videoItems = props.videos.map(video => <VideoListItem
            onVideoSelect={props.onVideoSelect}
            key={video.etag}
            video={video}
        /> );
    return (
        <ul>
            {videoItems}
        </ul>
    );
};

export default VideoList;