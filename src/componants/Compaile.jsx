import { useState, useEffect, useContext } from 'react';

import { DataContext } from '../Context/Dataprovider';

import { Box, styled } from '@mui/material';

const Container = styled(Box)`
    height: 41vh;
   
    
`

const Compaile = () => {

    const {html , CSS , javascript} = useContext(DataContext)
    const [src, setsrc] = useState('')

    const srcCode = `
    <html>
    <body>${html}</body>
    <style>${CSS}</style>
    <script>${javascript}</script>
</html>
    `

 

useEffect(() => {
    const timeout = setTimeout(() => {
        setsrc(srcCode);
    }, 250);

    return () => clearTimeout(timeout);
}, [html, CSS, javascript])

  return (
    <Container style={{}}>
          <iframe 
              className='no-scrollbar'
                srcDoc={src}
                title="output"
                sandbox="allow-scripts"
                frameBorder="0"
                width="100%"
                height="100%"
            /> 


    </Container>
  )
}

export default Compaile