import React from 'react'
import Navbar from './components/Navbar'

import Homepage from './pages/Homepage'
import { Routes } from 'react-router'
import { Route } from 'react-router'
import Moviepage from './pages/Moviepage'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'

const App = () => {
  return (
    <div className='text-3xl text-green-500'>
      <Navbar/>
     

      <Routes>
        <Route path={"/"} element={ <Homepage/>}/>
         <Route path={"/movie/:id"} element={ <Moviepage/>}/>
          <Route path={"/signin"} element={<SignIn />} />
            <Route path={"/signup"} element={<SignUp />} />
      </Routes>
    </div>
  )
}

export default App