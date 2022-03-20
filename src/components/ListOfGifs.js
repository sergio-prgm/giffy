import { useEffect, useState } from "react";
import Gif from "./Gif";
import getGifs from "../services/getGifs";

export default function ListOfGifs ({params}) {
  const { keyword } = params
  const [loading, setLoading] = useState(false) //
  const [gifs, setGifs] = useState([])

  useEffect(() => {
    setLoading(true) //
    getGifs({ keyword })
      .then(gifs => {
        setGifs(gifs)
        setLoading(false)}) //
  }, [keyword])

  /* 
    Si [keyword] lo dejamos vacío no ocurre nada al clicar el botón que cambia la keyword, porque no se especifica ninguna dependencia del efecto, por lo tanto solo se ejecuta al iniciar el componente (en este caso al iniciar la aplicación).
  */
 if (loading) return <i>🌽</i> //
 // todo lo marcado con // es lo necesario para hacer el loader rapidito

  return <>
    {
      gifs.map(({title, url, id}) => 
        <Gif 
          key={id}
          id={id} 
          title={title} 
          url={url} 
        />
      )
    }
  </>
}

/* Hace falta dar un key cuando se renderizan varios elementos iguales.
    Se puede utilizar el index de map(gif, *index*) pero no es fiable cuando se modifican los estados de esos componentes etc.*/