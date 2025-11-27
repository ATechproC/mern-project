import React from 'react'
import Login from './pages/Login'
import { useAdmin } from './providers/AdminProvider'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {

  const { aToken } = useAdmin();

  return aToken
    ? <></>
    : <>
      <Login />
      <ToastContainer />
    </>;
}

export default App