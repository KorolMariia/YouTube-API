import { Component } from 'react';import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';

export default class SearchLine extends Component {
  constructor() {
    super();
    this.state = {
      searchInput: '',
    };
  }

  onChangeHandler = (event) => {
    this.setState({
      searchInput: event.target.value,
    });
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSearchSubmit(this.state.searchInput);
    this.setState({
      searchInput: '',
    });
  };

  render() {
    return (
      <form style={{ width: '100%' }} onSubmit={this.onFormSubmit}>
        <TextField
          id="outlined-basic"
          label="Search your videos..."
          variant="outlined"
          sx={{ width: '100%' }}
          value={this.state.searchInput}
          onChange={this.onChangeHandler}
        />
        <button
          style={{
            position: 'absolute',
            right: '510px',
            border: 'grey',
            height: '56px',
            borderRadius: '0 5px 5px 0',
            width: '5%',
            background: 'none',
            color: 'red',
          }}
        >
          {' '}
          <SearchIcon />
        </button>
      </form>
    );
  }
}
