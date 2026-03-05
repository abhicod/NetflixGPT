
import GPTSearchBar from './GPTSearchBar'
import GPTMoviesSuggestion from './GPTMoviesSuggestion'
import { BODY_BG_IMG } from '../utils/constants'


const GPTSearchPage = () => {
  return (
    <div>
        <div className='fixed'>
            <img className='w-full h-full' src={BODY_BG_IMG} alt="body background" />
            
            <div className='w-full h-full absolute top-0 left-0 bg-black/70'>
            
            </div>
           
        </div>
        <div className='absolute text-white top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full'>
        <GPTSearchBar />
        </div>
        <div className='absolute text-white top-1/2 left-0 w-full'>
            <GPTMoviesSuggestion />
        </div>
    </div>
  )
}

export default GPTSearchPage