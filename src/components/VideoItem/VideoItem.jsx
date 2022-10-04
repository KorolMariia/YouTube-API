import { Component } from 'react';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

export default class VideoItem extends Component {
  render() {
    return (
      <>
        <ImageListItem key={this.props.item.id.videoId}>
          <img
            src={this.props.item.snippet.thumbnails.medium.url}
            alt={this.props.item.snippet.title}
            loading="lazy"
            style={{ height: '250px', cursor: 'pointer' }}
            onClick={() => this.props.selectedVideo(this.props.item)}
          />
          <ImageListItemBar
            title={this.props.item.snippet.title}
            subtitle={this.props.item.snippet.channelTitle}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.7)' }}
                aria-label={`info about ${this.props.item.snippet.title}`}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      </>
    );
  }
}
