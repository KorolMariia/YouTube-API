import { Component } from 'react';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';

export default class Hedaer extends Component {
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
      <header
        style={{
          display: 'flex',
          gap: '10px',
          padding: '8px',
          borderBottom: '1px solid black',
        }}
      >
        <form
          style={{ width: '100%', position: 'relative' }}
          onSubmit={this.onFormSubmit}
        >
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
              right: '10px',
              border: 'grey',
              top: '15px',
              background: 'none',
              color: 'red',
              cursor: 'pointer',
            }}
          >
            <SearchIcon />
          </button>
        </form>
        <img
          src="/images/logo.png"
          alt="Logo"
          style={{
            height: '60px',
            width: '120px',
            borderLeft: '2px solid black',
            padding: '5px',
          }}
        />
      </header>
    );
  }
}
