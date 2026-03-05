import GPTSearchBar from './GPTSearchBar'
import GPTMoviesSuggestion from './GPTMoviesSuggestion'
import { BODY_BG_IMG } from '../utils/constants'


const GPTSearchPage = () => {
  return (
    <div className="relative w-full min-h-screen">
        {/* Background Image */}
        <div className="fixed inset-0 w-full h-full">
            <img className='w-full h-full object-cover' src={BODY_BG_IMG} alt="body background" />
            <div className='absolute inset-0 w-full h-full bg-black/70'></div>
        </div>
        
        {/* Search Bar Container */}
        <div className='relative z-20 w-full pt-8 sm:pt-12 md:pt-16 lg:pt-20 px-4 sm:px-6 md:px-8'>
            <div className='w-full max-w-4xl mx-auto'>
                <GPTSearchBar />
            </div>
        </div>
        
        {/* Movies Suggestions Container */}
        <div className='relative z-10 w-full px-4 sm:px-6 md:px-8 pb-8'>
            <GPTMoviesSuggestion />
        </div>
    </div>
  )
}

export default GPTSearchPage