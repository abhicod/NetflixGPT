import { Routes, Route } from 'react-router-dom'
import Body from './components/Body'
import LoginPage from './components/LoginPage'
import BrowsePage from './components/BrowsePage'
import AppLayout from './components/AppLayout'
const App = () => {
  return (
      <Routes>
        <Route path="/" element={<AppLayout />} >
         <Route index element = {<Body />} />
         <Route path ="login" element = {<LoginPage />} />
         <Route path ="browse" element = {<BrowsePage />} />
         </Route>
      </Routes>
   

  )
}

export default App