
import './App.css';

import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ContactDetails from './pages/ContactDetails';
import Messages from './pages/Messages';
import MessagesDetails from './pages/MessagesDetails';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/messages' element={<Messages />} />
        <Route path='/user/:id' element={< ContactDetails />} />
        <Route path='/messages/:id' element={< MessagesDetails />} />
      </Routes>
    </>
  );
}

export default App;
