import React, { useState, useEffect, useContext } from "react";
import { PlayerContext } from "../../context/PlayerContext";
import Controls from "./Controls";
import Player from "./Player";
import Seekbar from "./Seekbar";
import Track from "./Track";
import VolumeBar from "./VolumeBar";

const MusicPlayer = () => {
  const {
    state: { activeSong, currentSongs, currentIndex, isActive, isPlaying },
    playPause,
    nextSong,
    prevSong,
  } = useContext(PlayerContext);

  const [duration, setDuration] = useState(0);
  const [seekTime, setSeekTime] = useState(0);
  const [appTime, setAppTime] = useState(0);
  const [volume, setVolume] = useState(0.3);
  const [repeat, setRepeat] = useState(false);

  const handlePlayPause = () => {
    if (!isActive) return;

    if (isPlaying) {
      playPause(false);
    } else {
      playPause(true);
    }
  };

  const handleNextSong = () => {
    playPause(false);

    nextSong(Math.floor(Math.random() * currentSongs.length));
  };

  const handlePrevSong = () => {
    if (currentIndex === 0) {
      prevSong(currentSongs.length - 1);
    } else {
      prevSong(currentIndex - 1);
    }
  };

  useEffect(() => {
    if (currentSongs.length) playPause(true);
  }, [currentIndex]);

  return (
    <div className="relative sm:px-12 px-4 w-full flex items-center justify-between lg:gap-5">
      <Track
        isPlaying={isPlaying}
        isActive={isActive}
        activeSong={activeSong}
      />
      <div className="flex flex-col items-center justify-center">
        <Controls
          isPlaying={isPlaying}
          isActive={isActive}
          repeat={repeat}
          setRepeat={setRepeat}
          currentSongs={currentSongs}
          handlePlayPause={handlePlayPause}
          handlePrevSong={handlePrevSong}
          handleNextSong={handleNextSong}
        />
        <Seekbar
          value={appTime}
          min="0"
          max={duration}
          onInput={(event) => setSeekTime(event.target.value)}
          setSeekTime={setSeekTime}
          appTime={appTime}
        />
        <Player
          activeSong={activeSong}
          volume={volume}
          isPlaying={isPlaying}
          seekTime={seekTime}
          repeat={repeat}
          currentIndex={currentIndex}
          onEnded={handleNextSong}
          onTimeUpdate={(event) => setAppTime(event.target.currentTime)}
          onLoadedData={(event) => setDuration(event.target.duration)}
        />
      </div>
      <VolumeBar
        value={volume}
        min="0"
        max="1"
        onChange={(event) => setVolume(event.target.value)}
        setVolume={setVolume}
      />
    </div>
  );
};

export default MusicPlayer;
