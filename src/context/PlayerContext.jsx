import React, { createContext, useState } from "react";

const initialState = {
  currentSongs: [],
  currentIndex: 0,
  isActive: false,
  isPlaying: false,
  activeSong: {},
  genreListId: "",
};

export const PlayerContext = createContext();

export const PlayerProvider = ({ children }) => {
  const [state, setState] = useState(initialState);
  const [appStatus, setAppStatus] = useState("ideal");

  const setActiveSong = (song, i, data) => {
    let currentSongs;

    if (data.tracks.hits) {
      currentSongs = data.tracks.hits.map((item) => {
        return item.track;
      });
    }

    setState((prevState) => ({
      ...prevState,
      activeSong: song,
      currentIndex: i,
      isActive: true,
      currentSongs: data.tracks.hits ? currentSongs : data.tracks,
    }));
  };

  const nextSong = (i) => {
    setState((prevState) => {
      let newIndex = prevState.currentIndex + 1;
      if (newIndex > prevState.currentSongs.length - 1) {
        newIndex = 0;
      }
      return {
        ...prevState,
        activeSong: prevState.currentSongs[newIndex],
        currentIndex: newIndex,
        isActive: true,
      };
    });
  };

  const prevSong = (i) => {
    setState((prevState) => {
      let newIndex = prevState.currentIndex - 1;
      if (newIndex < 0) {
        newIndex = prevState.currentSongs.length - 1;
      }
      return {
        ...prevState,
        activeSong: prevState.currentSongs[newIndex],
        currentIndex: newIndex,
        isActive: true,
      };
    });
  };

  const playPause = (isPlaying) => {
    setState((prevState) => ({
      ...prevState,
      isPlaying,
    }));
  };

  const selectGenreListId = (genreListId) => {
    setState((prevState) => ({
      ...prevState,
      genreListId,
    }));
  };

  console.log("Player Context Rendered!");
  console.log("Current Songs", state.currentSongs);
  console.log("Current Index", state.currentIndex);
  console.log("Active Song", state.activeSong);
  return (
    <PlayerContext.Provider
      value={{
        state,
        setActiveSong,
        nextSong,
        prevSong,
        playPause,
        selectGenreListId,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
};

export default PlayerProvider;
