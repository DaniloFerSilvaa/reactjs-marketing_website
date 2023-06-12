import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/home';
import { NotFound } from './pages/notFound';
import { Phonenordeste } from './pages/FeatureItem/PhoneNordeste';
import { NotebookNordeste } from './pages/FeatureItem/NotebookNordeste';
import { HeadsetNordeste } from './pages/FeatureItem/HeadsetNordeste';
import { ContactUs } from './pages/ContactUs';


function App() {

  return (
    <div>
          <Routes>
               <Route path='/' element={<Home/>   } /> 
               <Route path='/feature/headset-nordeste' element={<HeadsetNordeste/>}/>
               <Route path='/feature/phone-nordeste' element={<Phonenordeste/>}/>
               <Route path='/feature/notebook-nordeste' element={<NotebookNordeste/>}/>
               <Route path='/contactus' element={<ContactUs/>}/>
               <Route path='*' element={<NotFound/>} />
          </Routes>
    </div>
  )
}

export default App
