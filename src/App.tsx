import { Routes, Route } from 'react-router-dom';

import { useForm } from './hooks/useForm';

import Hero from './sections/Hero/Hero';
import Main from './sections/Main/Main';

import { Dashboard } from './sections/Dashboard/Dashboard';
// import Button from './components/Button';

import './App.css'

function App() {

  const { isLoged } = useForm();

  return (
    <>
      {/* <Dashboard /> */}
      <Routes>
        {
          isLoged
            ?
            <Route path='/dashboard' element={<Dashboard />} />
            :
            <Route path='/main' element={<Main />} />
        }
        {/* <Route path='/dashboard' element={<Dashboard />} /> */}
        <Route path='/' element={<Hero />} />
        <Route path='/main' element={<Main />} />
      </Routes>
      {/* <Button size='small' style={{ backgroundColor: '#006EFD', color: 'white' }}>Click!</Button> */}
    </>
  )
}

export default App
