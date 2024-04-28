import { Routes, Route } from 'react-router-dom';

import { PrivateRoute } from './routes/PrivateRoute';
import { Dashboard } from './sections/Dashboard/Dashboard';

import Hero from './sections/Hero/Hero';
import Main from './sections/Main/Main';

import './App.css'

function App() {

  return (
    <>
      <Routes>
        <Route
          path='/dashboard' element=
          {(
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          )}
        />
        <Route path='/' element={<Hero />} />
        <Route path='/main' element={<Main />} />
      </Routes>
    </>
  )
}

export default App
