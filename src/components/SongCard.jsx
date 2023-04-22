import PlayPause from "./PlayPause";

const SongCard = ({
  song,
  isPlaying,
  activeSong,
  data,
  setActiveSong,
  playPause,
  i,
}) => {
  const handlePauseClick = () => {
    playPause(false);
  };

  const handlePlayClick = () => {
    setActiveSong(song, i, data);
    playPause(true);
  };

  console.log("Song Rendered", song);
  return (
    <div className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer">
      <div className="relative w-full h-56 group">
        <div
          className={`absolute inset-0 bg-black bg-opacity-50 justify-center items-center group-hover:flex ${
            activeSong?.key === song.key
              ? "flex bg-black bg-opacity-70"
              : "hidden"
          }`}
        >
          <PlayPause
            song={song}
            isPlaying={isPlaying}
            activeSong={activeSong}
            handlePause={handlePauseClick}
            handlePlay={handlePlayClick}
          />
        </div>
        <img alt="song_img" src={song?.images?.coverart} />
      </div>

      <div className="mt-4 flex flex-col">
        <p className="font-semibold text-lg text-white truncate">
          {song.title}
        </p>
        <p className="text-sm text-gray-300 truncate mt-1">{song.subtitle}</p>
      </div>
    </div>
  );
};

export default SongCard;
