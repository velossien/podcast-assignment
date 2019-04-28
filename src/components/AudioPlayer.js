import React, {Component} from 'react';
import PropTypes from 'prop-types';

class AudioPlayer extends Component {
    constructor() {
        super();
        this.audioRef = React.createRef();
        this.state = {
            playbackRate: 1,
            podCastLoop: false,
        };
    };

    selectPlayRate = (event) => {
        const newRate = event.target.value;
        this.audioRef.current.playbackRate = newRate
        this.setState({
            playbackRate: newRate
        });
    };

    togglePodcastLoop = () => {
        const { playLoop } = this.state;
        this.audioRef.current.loop = !playLoop;
        this.setState({
            playLoop: !playLoop
        });
    };

    seekPodcast = (direction) => {
        const currentTime = this.audioRef.current.currentTime;
        if(direction === 'forward') {
            this.audioRef.current.currentTime = currentTime + 10;
        } else {
            this.audioRef.current.currentTime = currentTime - 10;
        }
    };

    restartPodcast = () => {
        this.audioRef.current.currentTime = 0;
    };

    render() {
        const { podcastUrl } = this.props;
        const { playbackRate, playLoop } = this.state;

        return (
            <div className="audio_player_wrapper">
                <audio
                    controls
                    className="audio_player"
                    ref={this.audioRef}
                    src={podcastUrl}
                />
                <div className="audio_control_box">
                    <span>
                        <span className="audio-label">Play Rate:</span>
                        <select value={playbackRate} onChange={this.selectPlayRate}>
                            <option value="0.5">0.5</option>
                            <option value="1">1</option>
                            <option value="1.5">1.5</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </span>
                    <button onClick={this.togglePodcastLoop}>{playLoop ? 'Looping' : 'No Looping'}</button>
                    <span className="audio-seek-wrapper">
                        <button onClick={() => this.seekPodcast('backward')}>{'<10s<'}</button>
                        <button onClick={() => this.seekPodcast('forward')}>{'>10s>'}</button>
                    </span>
                    <button onClick={this.restartPodcast}>Restart Episode</button>
                </div>
            </div> 
        )
    }
};

AudioPlayer.propTypes = {
    podcastUrl: PropTypes.string.isRequired,
};

export default AudioPlayer;