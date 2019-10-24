import React, { useRef }  from 'react'
import PropTypes          from 'prop-types'
import ReactPlayer        from "react-player";

const BackgroundVideo = ({ className, playing, url }) => {
  const videoPlayerRef = useRef(null);

  if (!playing) {
    className += " -preload";
  }

  const handlePlay = () => {
    if (videoPlayerRef != null && videoPlayerRef.current != null) {
      videoPlayerRef.current.seekTo(0);
    }
  }

  return (
    <ReactPlayer
      className   = { className }
      controls    = { false }
      height      = "1080px"
      muted       = { true }
      onPlay      = { handlePlay }
      playing     = { playing }
      playsinline = { true }
      ref         = { videoPlayerRef }
      width       = "1300px"
      url         = { url } />
  );
}


BackgroundVideo.propTypes = {
  className: PropTypes.string,
  playing:   PropTypes.bool,
  url:       PropTypes.string,
}

export default BackgroundVideo;
