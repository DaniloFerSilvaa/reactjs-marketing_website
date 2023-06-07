import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/home';
import { NotFound } from './pages/notFound';
import { FeatureEsporte } from './pages/FeatureItem/FeatureEsporte';
import { NotebookNordeste } from './pages/FeatureItem/NotebookNordeste';
import { PhoneNordeste } from './pages/FeatureItem/PhoneNordeste';
import { ContactUs } from './pages/ContactUs';


function App() {

  return (
    <div>
          <Routes>
               <Route path='/' element={<Home/>   } /> 
               <Route path='/feature/phone-nordeste' element={<PhoneNordeste/>}/>
               <Route path='/feature/Psicologia-do-esporte' element={<FeatureEsporte/>}/>
               <Route path='/feature/notebook-nordeste' element={<NotebookNordeste/>}/>
               <Route path='/contactus' element={<ContactUs/>}/>
               <Route path='*' element={<NotFound/>} />
          </Routes>
    </div>
  )
}

export default App
