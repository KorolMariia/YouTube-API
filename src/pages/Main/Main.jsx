import { Component } from 'react';
import Header from '../../components/Header/Header';
import VideoList from '../../components/VideoList/VideoList';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { searchVideo } from '../../api/api';
import MainVideo from '../../components/MainVideo/MainVideo';

export default class Main extends Component {
  constructor() {
    super();
    this.onSearchSubmit();
    this.state = {
      items: [],
      item: {},
      selectedVideo: {},
    };
  }

  onSearchSubmit = async (query) => {
    const {
      data: { items },
    } = await searchVideo(query);
    this.setState({ items: items });
    this.setState({ item: items[0] });
  };

  selectedVideo = (item) => {
    this.setState({ selectedVideo: item });
  };

  render() {
    const { selectedVideo, item, items } = this.state;
    return (
      <Box sx={{ flexGrow: 1 }}>
        <Header onSearchSubmit={this.onSearchSubmit} />
        <Grid
          container
          spacing={2}
          style={{
            marginTop: '10px',
          }}
        >
          <Grid
            item
            md={8}
            xs={12}
            style={{
              borderRight: '1px solid black',
            }}
          >
            {Object.keys(selectedVideo).length !== 0 ? (
              <MainVideo item={selectedVideo} />
            ) : items.length > 0 ? (
              <MainVideo item={item} />
            ) : (
              ''
            )}
          </Grid>
          <VideoList items={items} selectedVideo={this.selectedVideo} />
        </Grid>
      </Box>
    );
  }
}
