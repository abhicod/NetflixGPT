
import GPTSearchBar from './GPTSearchBar'
import GPTMoviesSuggestion from './GPTMoviesSuggestion'
import { BODY_BG_IMG } from '../utils/constants'


const GPTSearchPage = () => {
  return (
    <div>
        <div className='relative'>
            <img className='w-full h-screen object-cover' src={BODY_BG_IMG} alt="body background" />
            <div className='w-full h-screen absolute top-0 left-0 bg-black/70'>
            
            </div>
           
        </div>
        <div className='absolute text-white top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full'>
        <GPTSearchBar />
        </div>
        <div className='absolute text-white top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
            <GPTMoviesSuggestion />
        </div>
    </div>
  )
}

export default GPTSearchPage