import React from 'react';

function AudioPlayer({podcastUrl}) {
    return (
        <audio
            controls
            id="audio_player"
            src={podcastUrl}
        />
    )
} 

export default AudioPlayer;