import React from "react";
import ReactAudioPlayer from "react-audio-player";
export default function PlayIcon(audio) {
  if (audio.audio) {
    return <ReactAudioPlayer src={audio.audio} controls className="audio" />;
  } else return null;
}
