import { Component } from 'react';
import Grid from '@mui/material/Grid';
import ImageList from '@mui/material/ImageList';
import VideoItem from '../VideoItem/VideoItem';

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
        style={{
          paddingLeft: '30px',
        }}
      >
        <h2
          style={{
            margin: '0',
            color: 'red',
            textAlign: 'end',
          }}
        >
          <img className="logo" src="/images/logo.png" alt="Logo" />
        </h2>

        <h3 style={{ margin: '0px' }}>Suggested videos:</h3>
        <ImageList
          sx={{
            width: '100%',
            height: '77vh',
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
