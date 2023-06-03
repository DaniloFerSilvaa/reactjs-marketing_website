import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/home';
import { NotFound } from './pages/notFound';
import { FeatureEsporte } from './pages/FeatureItem/FeatureEsporte';
import { FeatureInconsciente } from './pages/FeatureItem/FeatureInconsciente';
import { FeatureSonho } from './pages/FeatureItem/FeatureSonho';


function App() {

  return (
    <div>
          <Routes>
               <Route path='/' element={<Home/>   } /> 
               <Route path='/feature/Estrutura-e-papel-dos-sonhos' element={<FeatureSonho/>}/>
               <Route path='/feature/Psicologia-do-esporte' element={<FeatureEsporte/>}/>
               <Route path='/feature/Inconsciente-coletivo-e-arquétipo' element={<FeatureInconsciente/>}/>
               <Route path='*' element={<NotFound/>} />
          </Routes>
    </div>
  )
}

export default App
