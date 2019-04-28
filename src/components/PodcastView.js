import React, { Component } from 'react';
import AudioPlayer from './AudioPlayer';
import ErrorMessage from './ErrorMessage';
import EpisodeImage from '../components/episodeComponents/EpisodeImage';
import EpisodeTitle from '../components/episodeComponents/EpisodeTitle';
import EpisodeDescription from '../components/episodeComponents/EpisodeDescription';
import EpisodeArtist from '../components/episodeComponents/EpisodeArtist';
import EpisodeDateDuration from './episodeComponents/EpisodeDateDuration';
import moment from 'moment';
import podcastDataHandler from '../util/podcastDataHandler';
import editIcon from '../images/edit.svg';
import saveIcon from '../images/save.svg';

class PodcastView extends Component {
  constructor() {
    super();
    this.state = {
      errorMessage: null,
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
  };

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
            publishedAt: moment(publishedAt),
            title,
          }
        })
      })
  };

  toggleEditMode = () => {
    this.setState({
      isEditMode: !this.state.isEditMode,
    });
  };

  onChange = (event, name) => {
      this.setState({
        podcastEpisode: {
          ...this.state.podcastEpisode,
          [name]: event.target.value,
        }
      })
  };

  onDateChange = (date) => {
    this.setState({
      podcastEpisode: {
        ...this.state.podcastEpisode,
        publishedAt: moment(date),
      }
    })
  };

  onImageChange = (image) => {
    console.log(image)
  };

  updateEpisodeData = () => {
    const { podcastEpisode } = this.state;
    const { episodeId } = podcastEpisode;

    podcastDataHandler.updateEpisode(episodeId, podcastEpisode)
      .then((res) => {
        const errorMessage = res.errorMessage ? res.errorMessage : null;

        this.setState({
          errorMessage: errorMessage,
          podcastEpisode: res,
        });

        this.toggleEditMode();
      })
      .catch((err) => {
        this.setState({
          errorMessage: err,
        })
      })
  };

  closeError = () => {
    this.setState({
      errorMessage: null,
    });
  };

  render() {
    const { errorMessage, isEditMode, podcastEpisode } = this.state;
    const { artistName, description, duration, episodeUrl, imageUrl, publishedAt, title } = podcastEpisode;

    const editModeIcon = isEditMode ?
    (
      <img
        alt="Save podcast episode info button"
        className="mode_icon"
        onClick={this.updateEpisodeData}
        src={saveIcon}
      />
    ) : (
      <img
        alt="Edit podcast episode info button"
        className="mode_icon"
        onClick={this.toggleEditMode}
        src={editIcon}
      />
    )

    return (
      <div className="podcast_view">
        {editModeIcon}
        <div className="podcast_view_title">Breaker Lite</div>
        {errorMessage &&
          <ErrorMessage
            closeError={this.closeError}
            errorMessage={errorMessage}
          />
        }
        <div className="podcast_episode_info">
          <div className="episode_image_block">
            <EpisodeImage
              imageUrl={imageUrl}
              isEditMode={isEditMode}
              onImageChange={this.onImageChange}
            />
          </div>
          <div className="title_block">
            <EpisodeTitle
              isEditMode={isEditMode}
              onChange={event => this.onChange(event, 'title')}
              title={title}
            />
            <EpisodeDateDuration 
              duration={duration}
              onDateChange={this.onDateChange}
              isEditMode={isEditMode}
              publishedAt={publishedAt}
            />
            <EpisodeArtist
              onChange={event => this.onChange(event, 'artistName')}
              isEditMode={isEditMode}
              artistName={artistName}
            />
          </div>
        </div>
        <AudioPlayer podcastUrl={episodeUrl} />
        <EpisodeDescription 
          onChange={event => this.onChange(event, 'description')}
          isEditMode={isEditMode}
          description={description}
        />
      </div>
    );
  }
};

export default PodcastView;
