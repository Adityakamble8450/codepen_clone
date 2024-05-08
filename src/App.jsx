import React from 'react'

import Home from './componants/Home'
import Dataprovider from './Context/Dataprovider'

const App = () => {
  return (
    <div>
      <Dataprovider>
     <Home/>
     </Dataprovider>
      
    </div>
  )
}

export default App