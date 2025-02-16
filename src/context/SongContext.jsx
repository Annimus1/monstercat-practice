import { createContext, useEffect, useState } from "react";
import data from "../assets/Playlist";

const songContext = createContext();

const SongContext = ({ children }) => {
  // get a random song
  const randomSong = () => Math.floor(Math.random() * data[0].songs.length);

  const [currentSong, setSong] = useState(new Audio(data[0].songs[randomSong()].source));

  /**
   * Set a new song in the context.
   *
   * @param {string} src - source of the new sogn .
   */
  const setNewSong = (src) => {
    currentSong.pause();
    const newSong = new Audio(src);

    setSong(prev => {
      newSong.play();
      return newSong;
    })

  }

  return (
    <songContext.Provider value={{ currentSong, setSong, setNewSong }}>
      {children}
    </songContext.Provider>
  );
};

export { SongContext, songContext };