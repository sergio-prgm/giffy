import { useEffect, useState } from "react";
import Gif from "./Gif";
import getGifs from "../services/getGifs";

export default function ListOfGifs ({keyword}) {
  const [gifs, setGifs] = useState([])

  useEffect(() => {
    getGifs({ keyword }).then(gifs => setGifs(gifs))
  }, [keyword])

  /* 
    Si [keyword] lo dejamos vacío no ocurre nada al clicar el botón que cambia la keyword, porque no se especifica ninguna dependencia del efecto, por lo tanto solo se ejecuta al iniciar el componente (en este caso al iniciar la aplicación).
  */

  return (
    gifs.map(({title, url, id}) => 
      <Gif 
        key={id}
        id={id} 
        title={title} 
        url={url} 
        />)
  )
}

/* Hace falta dar un key cuando se renderizan varios elementos iguales.
    Se puede utilizar el index de map(gif, *index*) pero no es fiable cuando se modifican los estados de esos componentes etc.*/