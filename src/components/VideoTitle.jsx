const VideoTitle = ({movie}) => {
    const {original_title , overview} = movie;

  return (
    <div className="flex flex-col gap-2 sm:gap-3 md:gap-4 px-4 sm:px-8 md:px-12 lg:px-16 pt-16 sm:pt-20 md:pt-24 lg:pt-32 h-screen w-full bg-linear-to-r from-black/80 via-black/50 to-transparent absolute top-0 left-0 text-white">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">{original_title}</h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl w-full sm:w-3/4 md:w-2/3 lg:w-1/2 line-clamp-3 sm:line-clamp-4">{overview}</p>
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4">
            <button type="button" className="bg-white text-black px-6 sm:px-8 md:px-10 py-2 sm:py-3 md:py-4 rounded-md hover:bg-white/70 hover:text-black cursor-pointer font-medium text-sm sm:text-base md:text-lg transition-all duration-200">▶ Play</button>
            <button type="button" className="bg-gray-500/50 text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-md hover:bg-gray-500/70 hover:text-white cursor-pointer font-medium text-sm sm:text-base md:text-lg transition-all duration-200">ⓘ More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle