import { FaPauseCircle, FaPlayCircle } from "react-icons/fa";

const PlayPause = ({
  isPlaying,
  activeSong,
  song,
  handlePause,
  handlePlay,
}) => {
  console.log("Play Pause");
  console.log("Song OBJ", song);
  console.log("Active Song", activeSong);
  if (isPlaying && activeSong?.key === song.key) {
    return (
      <FaPauseCircle
        size={35}
        className="text-gray-300"
        onClick={handlePause}
      />
    );
  } else {
    return (
      <FaPlayCircle size={35} className="text-gray-300" onClick={handlePlay} />
    );
  }
};

export default PlayPause;
