import React from 'react'

const Context = React.createContext({
  name: 'sin provider',
  diAlgo: true
})

export default Context

// este valor es el que tiene el context si un elemento intenta acceder a él pero no tiene provider
// si se especifica un provider es obligatorio pasar un value
