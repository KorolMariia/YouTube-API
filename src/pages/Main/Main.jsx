import { Component } from 'react';
import SearchLine from '../../components/SearchLine/SearchLine';
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
    return (
      <Box sx={{ flexGrow: 1, padding: '10px' }}>
        <Grid container spacing={2}>
          <Grid item md={8} xs={12}>
            <SearchLine onSearchSubmit={this.onSearchSubmit} />
            {Object.keys(this.state.selectedVideo).length !== 0 ? (
              <MainVideo item={this.state.selectedVideo} />
            ) : this.state.items.length > 0 ? (
              <MainVideo item={this.state.item} />
            ) : (
              ''
            )}
          </Grid>
          <VideoList
            items={this.state.items}
            selectedVideo={this.selectedVideo}
          />
        </Grid>
      </Box>
    );
  }
}
