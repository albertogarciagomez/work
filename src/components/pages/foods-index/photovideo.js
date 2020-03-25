import React, { Component } from 'react'
// import foodsArray from '../../../foods-info'
// import Container from 'react-bootstrap/Container'
import { Jumbotron } from 'react-bootstrap';

class PhotoVideo extends Component {

    constructor() {
        super();
        this.state = { foods: ["UX/Ui Designer", "Web Developer", "Photographer & Filmmaker"] }
    }
    render() {
        return (
            <>
               <YouTube
                videoId={ggide-PsES4}                  // defaults -> null
                // id={string}                       // defaults -> null
                // className={string}                // defaults -> null
                // containerClassName={string}       // defaults -> ''
                // opts={obj}                        // defaults -> {}
                // onReady={func}                    // defaults -> noop
                // onPlay={func}                     // defaults -> noop
                // onPause={func}                    // defaults -> noop
                // onEnd={func}                      // defaults -> noop
                // onError={func}                    // defaults -> noop
                // onStateChange={func}              // defaults -> noop
                // onPlaybackRateChange={func}       // defaults -> noop
                // onPlaybackQualityChange={func}    // defaults -> noop
                />
            </>
        )
    }
}

export default PhotoVideo