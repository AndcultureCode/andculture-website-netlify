import React, { useRef }  from 'react'
import PropTypes          from 'prop-types'
import ReactPlayer        from "react-player";

const BackgroundVideo = ({ className, playing, onPause, seekTo, url }) => {
  const videoPlayerRef = useRef(null);

  if (!playing) {
    className += " -preload";
  }

  const handlePlay = (seekTo) => {
    if (videoPlayerRef != null && videoPlayerRef.current != null) {
      console.log("videoUrl" + url);
      console.log("seek to: " + seekTo);
      console.log("seek to setting: " + (seekTo || 0));
      const reverseTime = seekTo == null ? 0 : videoPlayerRef.current.getDuration() - seekTo;
      console.log("seek reverse time: " + reverseTime);
      videoPlayerRef.current.seekTo(reverseTime);
    }
  }

  const handlePause = (state) => {
    if (onPause == null) {
      return;
    }
    console.log(state);
    let currentTime = 0;
    let totalTime = 0;
    if (videoPlayerRef != null && videoPlayerRef.current != null) {
      currentTime = videoPlayerRef.current.getCurrentTime();
      totalTime = videoPlayerRef.current.getDuration();
    }
    if (currentTime == totalTime) {
      currentTime = null;
    }
    onPause({
      playedSeconds: currentTime
    });
  }

  return (
    <ReactPlayer
      className         = { className }
      controls          = { false }
      height            = "1080px"
      muted             = { true }
      onPlay            = { () => handlePlay(seekTo) }
      playing           = { playing }
      playsinline       = { true }
      progressInterval  = { 100 }
      onPause           = { handlePause }
      ref               = { videoPlayerRef }
      width             = "1300px"
      url               = { url } />
  );
}


BackgroundVideo.propTypes = {
  className:  PropTypes.string,
  playing:    PropTypes.bool,
  onPause:    PropTypes.func,
  seekTo:     PropTypes.number,
  url:        PropTypes.string,
}

export default BackgroundVideo;
