import React from 'react';

const VideoListItem = ({ video, onVideoSelect }) => {
    // const video = props.video;
    console.log(video);

    const imageUrl = video.snippet.thumbnails.default.url
    return(
        <li onClick={() => onVideoSelect(video)}>
            <div>
                <div>
                    <img src={imageUrl} />
                </div>
                <div>
                    {video.snippet.title}
                </div>
            </div>
        </li>
    );
};

export default VideoListItem;