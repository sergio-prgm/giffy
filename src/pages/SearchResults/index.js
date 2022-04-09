import ListOfGifs from '../../components/ListOfGifs/ListOfGifs'
import useGifs from '../../hooks/useGifs'

export default function SearchResults({ params }) {
  const { keyword } = params
  const { loading, gifs } = useGifs({ keyword })
  /* Esto es el equivalente al Hook
  const [loading, setLoading] = useState(false) //
  const [gifs, setGifs] = useState([])

  useEffect(() => {
    setLoading(true) //
    getGifs({ keyword }).then((gifs) => {
      setGifs(gifs)
      setLoading(false)
    }) //
  }, [keyword])
  */

  /*
  Para solo tener un estado:
  Hacer un objeto que albergue ambos estados.
  Es conveniente no tener estados infinitos, pero tampo es necesario reducirlo hasta la extenuación, sobre todo si complica mucho el código
  
  const [gifs, setGifs] = useState(
    {loading: false, results: []}
  )

  useEffect(function () {
    setGifs(actualGifs => ({loading: true, results: actualGifs.results})
    ) //
    getGifs({ keyword })
      .then( gifs => {
        setGifs({loading: false, results: gifs})
      }) //
  }, [keyword])
  */

  /* 
    Si [keyword] lo dejamos vacío no ocurre nada al clicar el botón que cambia la keyword, porque no se especifica ninguna dependencia del efecto, por lo tanto solo se ejecuta al iniciar el componente (en este caso al iniciar la aplicación).
  */
  if (loading) return <i>🌽</i> //
  // todo lo marcado con // es lo necesario para hacer el loader rapidito

  return <>{loading ? <i>��</i> : <ListOfGifs gifs={gifs} />}</>
}

/* Hace falta dar un key cuando se renderizan varios elementos iguales.
    Se puede utilizar el index de map(gif, *index*) pero no es fiable cuando se modifican los estados de esos componentes etc.*/
