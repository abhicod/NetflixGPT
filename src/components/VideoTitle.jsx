const VideoTitle = ({movie}) => {

    const {original_title , overview} = movie;

  return (
    <div className="flex flex-col gap-2 pt-36 pl-10 to-transparent h-screen absolute top-0 left-0 z-30">
        <h1 className="text-6xl font-bold">{original_title}</h1>
        <p className="text-lg w-1/4">{overview}</p>
        <div className="flex gap-2">
            <button type="button" className="bg-white/50 text-black px-4 py-2 rounded-lg">▶ Play</button>
            <button type="button" className="bg-black/50 text-white px-4 py-2 rounded-lg">ⓘ More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle