const VideoTitle = ({movie}) => {

    const {original_title , overview} = movie;

  return (
    <div className="flex flex-col gap-2 px-22 pt-[20%] h-screen w-full bg-linear-to-r from-black to-transparent absolute top-0 left-0 z-30 text-white">
        <h1 className="text-6xl font-bold ">{original_title}</h1>
        <p className="text-lg w-1/3">{overview}</p>
        <div className="flex gap-2">
            <button type="button" className="bg-white text-black px-8 py-2 rounded-md hover:bg-white/70 hover:text-black cursor-pointer">▶ Play</button>
            <button type="button" className="bg-gray-500/50 text-white px-6 py-2 rounded-md hover:bg-gray-500/70 hover:text-white cursor-pointer">ⓘ More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle