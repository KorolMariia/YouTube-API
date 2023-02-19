import { Component } from 'react';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

export default class VideoItem extends Component {
  render() {
    const { item, selectedVideo } = this.props;
    return (
      <>
        <ImageListItem key={item.id.videoId}>
          <img
            src={item.snippet.thumbnails.medium.url}
            alt={item.snippet.title}
            loading="lazy"
            style={{ height: '250px', cursor: 'pointer' }}
            onClick={() => selectedVideo(item)}
          />
          <ImageListItemBar
            title={item.snippet.title}
            subtitle={item.snippet.channelTitle}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.7)' }}
                aria-label={`info about ${item.snippet.title}`}
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
