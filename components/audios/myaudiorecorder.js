import * as React from 'react';
import { AudioRecorder, useAudioRecorder } from 'react-audio-voice-recorder';

export default function MyAudioRecorder() {
  const recorderControls = useAudioRecorder(
    {
      noiseSuppression: true,
      echoCancellation: true,
    },
    (err) => console.table(err) // onNotAllowedOrFound
  );
  const addAudioElement = (blob) => {
    const url = URL.createObjectURL(blob);
    const audio = document.createElement('audio');
    audio.src = url;
    audio.controls = true;
    document.getElementById('audiolist').appendChild(audio);
  };

  return (
    <div>
      <AudioRecorder
        onRecordingComplete={(blob) => addAudioElement(blob)}
        recorderControls={recorderControls}
        // downloadOnSavePress={true}
        // downloadFileExtension="mp3"
      />
      <br />
      <button onClick={recorderControls.stopRecording}>Stop recording</button>
      <br />
    </div>
  );
}
