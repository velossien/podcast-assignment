import React, { Component } from 'react';
import AudioPlayer from './AudioPlayer';
import moment from 'moment';
import podcastDataHandler from '../js/podcastDataHandler';
import editIcon from '../images/edit.svg';
import saveIcon from '../images/save.svg';

class PodcastView extends Component {
  constructor() {
    super();
    this.state = {
      errorOccurred: null,
      isEditMode: false,
      podcastEpisode: {
        artistName: null,
        description: null,
        duration: null,
        episodeId: null,
        episodeUrl: null,
        imageUrl: null,
        publishedAt: null,
        title: null,
      }
    }
  }

  componentDidMount() {
    podcastDataHandler.retrieveEpisode()
    .then((res) => {
      const { 
        description, 
        duration, 
        enclosure_url: enclosureUrl, 
        id, 
        published_at: publishedAt, 
        title, 
        image_url: imageUrl, 
        show: {
          artist_name: artistName
        }, 
      } = res.episode;

      this.setState({
        podcastEpisode: {
          artistName,
          description,
          duration: Math.round(duration / 60),
          episodeId: id,
          episodeUrl: enclosureUrl,
          imageUrl,
          publishedAt: this.formatDate(publishedAt),
          title,
        }
      })
    })
  };

  formatDate = (date) => {
    return moment(date).format("ddd, MMM Do, YYYY @ h:mma");
  };

  modeChange = () => {
    this.setState({
      isEditMode: !this.state.isEditMode,
    });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      podcastEpisode:{
        ...this.state.podcastEpisode,
        [name]: value,
      }
    });
  };

  updateEpisodeData = () => {
    const { podcastEpisode } = this.state;
    const { episodeId } = podcastEpisode;

    podcastDataHandler.updateEpisode(episodeId, podcastEpisode)
    .then((res) => {
      let errorMessage = null;
      if(res.errorMessage) {
        errorMessage = res.errorMessage;
      }

      this.setState({
        errorOccurred: errorMessage,
        podcastEpisode: res,
      });

      this.modeChange();
    })
    .catch((err) => {
      this.setState({
        errorOccurred: err,
      })
    })
  };
  
  closeError = () => {
    this.setState({
      errorOccurred: null,
    });
  };

  render() {
    const { errorOccurred, isEditMode, podcastEpisode } = this.state;
    const { artistName, description, duration, episodeUrl, imageUrl, publishedAt, title } = podcastEpisode;

    if(isEditMode) {
      return (
        <div id="podcast_view">
          <div id="podcast_title">Breaker Lite</div>
          {errorOccurred && 
            <div id="error_message"><span>{errorOccurred}</span><span id="error-message-close-button" onClick={this.closeError}>X</span></div>
          }
          <div id="podcast_episode_info">
            <div id="episode_image_block">
              <div id="episode_image">
                <img 
                  alt="Podcast episode" 
                  src={imageUrl}
                />
              </div>
              <input 
                id="episode_image_input"
                name="imageUrl" 
                onChange={this.handleChange}
                type="text" 
                value={imageUrl} 
              />
            </div>
            <div id="edit_mode_title_block">
              <input 
                id="episode_title"
                name="title" 
                onChange={this.handleChange}
                type="text" 
                value={title}
              />
              <div id="episode_date_duration">
                <input 
                  id="episode_date_created"
                  name="publishedAt" 
                  onChange={this.handleChange}
                  type="text" 
                  value={publishedAt}
                />
                <span id="episode-time-dot">
                  &#183;
                </span>
                <input 
                  id="episode_duration"
                  name="duration" 
                  onChange={this.handleChange}
                  type="text" 
                  value={duration}
                />
                min
              </div>
              By
              <input 
                id="podcast_author"
                name="artistName" 
                onChange={this.handleChange}
                type="text" 
                value={artistName}
              />
            </div>
          </div>
          <img 
            alt="Save podcast episode info button"
            id="mode_icon" 
            onClick={this.updateEpisodeData}
            src={saveIcon}  
          />
          <AudioPlayer podcastUrl={episodeUrl}/>
          <textarea
            id="episode_description"
            name="description"
            onChange={this.handleChange}
            value={description}
          />
        </div>
      );
    } else {
      return (
        <div id="podcast_view">
          <div id="podcast_title">Breaker Lite</div>
          {errorOccurred && 
            <div id="error_message"><span>{errorOccurred}</span><span id="error-message-close-button" onClick={this.closeError}>X</span></div>
          }
          <div id="podcast_episode_info">
            <div id="episode_image_block">
              <div id="episode_image">
                <img 
                  alt="Podcast episode" 
                  src={imageUrl}
                />
              </div>
            </div>
            <div id="saved_title_block">
              <div id="episode_title">
                {title}
              </div>
              <div id="episode_date_duration">
                <span id="episode_date_created">
                  {publishedAt} 
                </span>
                <span id="episode-time-dot">
                  &#183;
                </span>
                <span id="episode_duration">
                  {duration} min
                </span>
              </div>
              <div id="podcast_author">
                By {artistName}
              </div>
            </div>
          </div>
          <img 
            alt="Save podcast episode info button"
            id="mode_icon" 
            onClick={this.modeChange}
            src={editIcon}  
          />
          <AudioPlayer podcastUrl={episodeUrl}/>
          <div id="episode_description">
            {description}
          </div>
        </div>
      );
    }
  }
}

export default PodcastView;
