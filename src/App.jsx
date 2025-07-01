import './App.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'



import Corfedupar from '../Pages/Corfedupar'
import Home from '../Pages/Home'
import Expositor from '../Pages/Expositor'
import BeneficiosExpositor from '../Pages/BeneficiosExpositor'
import TermYcondiciones from '../Pages/TermYcondiciones'
import Organihrama from '../Pages/Organihrama'
import Portafolio from '../Pages/Portafolio'
import ValoresComerciales from '../Pages/ValoresComerciales'

function App() {

  return (
    <>
      

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/PageEXPOSITOR' element={<Expositor/>} />
          <Route path='/PageCORFEDUPAR' element={<Corfedupar/>} />
          <Route path='PageBENEFICIOS' element={<BeneficiosExpositor/>} />
          <Route path='/Terminos' element={<TermYcondiciones/>} />
          <Route path='/PageORGANIGRAMA' element={<Organihrama/>} />
          <Route path='/PagePORTAFOLIO' element={<Portafolio/>} />
          <Route path='/Valores' element={<ValoresComerciales/>} />
        </Routes>
      </BrowserRouter>
      

    </>
  )
}

export default App
