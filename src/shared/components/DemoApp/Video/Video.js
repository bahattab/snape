import React, { PropTypes } from 'react';
import * as videojs from 'video.js';

class Video extends React.Component {
  componentDidMount() {
    videojs(this.videoRef, this.props.options, () => {
      this.props.onInit();
    });
  }

  render() {
    return (
      <div>
        <div className="video-wrapper">
          <video
            className="video-js vjs-default-skin"
            controls
            preload="auto"
            src={this.props.src}
            ref={x => (this.videoRef = x)}
            autoPlay
          />
        </div>
      </div>
    );
  }
}

Video.propTypes = {
  src: PropTypes.string.isRequired,
  onInit: PropTypes.func,
  options: PropTypes.object,
};

Video.defaultProps = {
  onInit() {
  },
  options: {
    fluid: true,
  },
};

export default Video;