import React, { Component } from 'react'
// import foodsArray from '../../../foods-info'
// import Container from 'react-bootstrap/Container'
import { Jumbotron } from 'react-bootstrap';
import YouTube from 'react-youtube';


class PhotoVideo extends Component {

    render() {
        const opts = {
          height: '390',
          width: '640',
          playerVars: { // https://developers.google.com/youtube/player_parameters
            autoplay: 1
          }
        };
    
        return (
          <YouTube
            videoId="ggide-PsES4"
            opts={opts}
            onReady={this._onReady}
          />
        );
      }

      _onReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
      }
}

export default PhotoVideo