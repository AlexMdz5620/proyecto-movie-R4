import Menu from '../Menu/Menu.jsx'
import Portada from '../Portada/Portada.jsx';
import ListaPeliculas from '../ListaPeliculas/ListaPeliculas.jsx';
import { Outlet } from 'react-router-dom';

export default function Home(){
    return(
        <>
            {/* Menu */}
            <Menu />
            {/* <Portada /> */}
            {/* <ListaPeliculas /> */}
            <Outlet />
            {/* Footer */}
        </>
    )
}