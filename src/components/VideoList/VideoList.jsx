import { Component } from 'react';import Grid from '@mui/material/Grid';
import ImageList from '@mui/material/ImageList';
import VideoItem from '../VideoItem/VideoItem';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

export default class VideoList extends Component {
  render() {
    if (!this.props.items.length) {
      return <h4> No results </h4>;
    }
    return (
      <Grid
        item
        md={4}
        xs={12}
        sx={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <h3 style={{ margin: '0 0 10px' }}>
          Suggested videos <ArrowDownwardIcon sx={{ color: 'red' }} />
        </h3>
        <ImageList
          sx={{
            margin: '0',
            width: '100%',
            height: '80vh',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {this.props.items.map((item) => (
            <VideoItem
              key={item.id.videoId}
              item={item}
              selectedVideo={this.props.selectedVideo}
            />
          ))}
        </ImageList>
      </Grid>
    );
  }
}
