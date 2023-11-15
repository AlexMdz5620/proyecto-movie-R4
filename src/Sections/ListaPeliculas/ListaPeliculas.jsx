import { useState, useEffect} from 'react'
//import CardComponent from '../../Componetns/Card/Card'
import CardComponent from '../../Components/Cards/Card'
import { FaSpinner } from "react-icons/fa6";
import './ListaPeliculas'
import { Link } from 'react-router-dom';

export default function ListaPeliculas(props) {

    const [search, setSearch] = useState('')
    const [peliculas, setPeliculas] = useState([])
    const [peliculasFilter, setPeliculasFilter] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
      if (loading) {
        fetch(`https://api-pelis-back.onrender.com/${props.genero}`)
          .then((response) => response.json())
          .then((data) => {
            setPeliculas(data.peliculas);
            setPeliculasFilter(data.peliculas);
            setLoading(false)
          });
      }
    }, []);

    const handleSearch = (e) => {
        console.log(e.target.value)
        if (e.target.value == '') {
            setPeliculasFilter(peliculas)
        } else {
        setSearch(e.target.value) 
        let pelisFilter = peliculas.filter((peli) => peli.titulo.toLowerCase().includes(search.toLowerCase()))
        setPeliculasFilter(pelisFilter)
        }
    }

    if (loading) {
        return (
            <div className="container loader-container">
                <div className="row">
                    <div className="col ">
                    <FaSpinner className='spinner'/>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col d-flex justify-content-center">
                        <input type="text" placeholder='search' onChange={handleSearch}/>
                    </div>
                </div>
        
                <div className="row mt-3">
                    { peliculasFilter.map((item, index) => {
                        return (
                            <div className="col-3 mt-4 mr-2" key={index}>
                                <Link to={`/${item.genero}/${item.titulo}`} state={item}>
                                    <CardComponent portada={item.portada} title={item.titulo} description={item.sinopsis}/>
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </div>
            </>
          );
    };
};