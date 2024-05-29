import React, { useEffect, useRef } from 'react';

const AutoPlayAudio = ({ src }) => {
  const audioRef = useRef(null);
  const handlePlay = () => {
      audioRef.current?.play()
  };
  const handlePause = () => {
      audioRef.current?.pause()
  };
  

  return (
    <div style={{display:'none'}}>
        <button onClick={handlePlay}  id={'audio-play'}>Play Audio</button>
        <button onClick={handlePause} id={'audio-pause'}>Pause Audio</button>
        <audio id="myAudio"  controls autoPlay={'autoplay'} ref={audioRef}>
            <source src={src} type="audio/mpeg"/>
        </audio>
    </div>
  );
};

export default AutoPlayAudio;