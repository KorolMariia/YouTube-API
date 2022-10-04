import { Component } from 'react';
export default class MainVideo extends Component {
  render() {
    return (
      <>
        <div style={{ paddingTop: '20px', height: '80vh' }}>
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${this.props.item.id.videoId}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <h2 className="title">{this.props.item.snippet.title}</h2>
        <h4 className="subtitle">{this.props.item.snippet.description}</h4>
      </>
    );
  }
}
