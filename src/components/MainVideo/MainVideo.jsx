import { Component } from 'react';
export default class MainVideo extends Component {
  render() {
    const { item } = this.props;
    return (
      <>
        <div
          style={{
            height: '75vh',
            borderBottom: '1px solid black',
            paddingBottom: '10px',
          }}
        >
          <iframe
            width="100%"
            height="100%"
            frameBorder="0"
            src={`https://www.youtube.com/embed/${item.id.videoId}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div
          style={{
            paddingBottom: '15px',
            borderBottom: '1px solid black',
          }}
        >
          <h2
            style={{
              margin: '10px 0',
              fontSize: '18px',
            }}
          >
            {item.snippet.title}
          </h2>
          <h4
            style={{
              margin: '0',
              fontSize: '14px',
              fontStyle: 'italic',
            }}
          >
            {item.snippet.description}
          </h4>
        </div>
      </>
    );
  }
}
