import React from 'react';
import VideoPlayer from './components/VideoPlayer.jsx';
import videoUrl from './assets/videos/hsj_fondo_zona_privada_centenario.mp4';

import './App.css'

const App = () => {
  const playerRef = React.useRef(null);

  const videoJsOptions = {
    autoplay: true,
    controls: false,
    responsive: true,
    fluid: true,
    sources: [{
      // src: 'https://vjs.zencdn.net/v/oceans.mp4',
      src: videoUrl,
      type: 'video/mp4'
    }],
    userActions: {
      hotkeys: true // Keeps keyboard controls even if visual controls are hidden
    }
  };

  const handlePlayerReady = (player) => {
    playerRef.current = player;

    // You can handle player events here, for example:
    player.on('waiting', () => {
      videojs.log('player is waiting');
    });

    player.on('dispose', () => {
      videojs.log('player will dispose');
    });
  };

  return (
    <>
      <div className=' bg-slate-500 w-screen'>Rest of app here</div>
      <VideoPlayer options={videoJsOptions} onReady={handlePlayerReady} />
    </>
  );
}

export default App;
