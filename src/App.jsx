import React, { useEffect } from 'react'
import Navbar from './components/Navbar'

import Homepage from './pages/Homepage'
import { Routes } from 'react-router'
import { Route } from 'react-router'
import Moviepage from './pages/Moviepage'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import { Toaster } from 'react-hot-toast'
import { useAuthStore } from './store/authStore'
import AIRecommendations from './pages/AIRecommendations'

const App = () => {
  const {fetchUser, fetchingUser} = useAuthStore();
   useEffect(() => {
    fetchUser()
  }, [fetchUser])
  
    if(fetchingUser){
    return <p className="text-[#e50914]">Loading...</p>
  }
  return (
    <div className='text-3xl text-green-500'>
      <Toaster/>
      <Navbar/>
     

      <Routes>
        <Route path={"/"} element={ <Homepage/>}/>
         <Route path={"/movie/:id"} element={ <Moviepage/>}/>
          <Route path={"/signin"} element={<SignIn />} />
            <Route path={"/signup"} element={<SignUp />} />
             <Route path={"/ai-recommendations"} element={<AIRecommendations />} />
      </Routes>
    </div>
  )
}

export default App