import {React, useState, useEffect} from 'react'
import Logo from '../../assets/pizzaLogo.png'
import '../../styles/NavBar.css'
import { Link } from 'react-router-dom';
import ReorderIcon from '@mui/icons-material/Reorder';


const links = ['Home', 'Menu', 'About', 'Contact'];


function NavBar() {

    const [isClick, setIsClick] = useState(false);
    
    const handeIconClick = () => {
        setIsClick(!isClick);
        console.log(isClick);
    }

    const linksCtr = (linkName) => {
        return (
            <div className={linkName}>
                {
                    links.map((link) => {
                        return (
                            <Link className='link' key={link} to={`/${link}`}> {link} </Link>
                        )
                    })
                }
            </div>
        )
    }

    return (
        <div className='NavBar'>
            { !isClick && <img src={Logo} /> }
            { isClick && linksCtr('hiddenLinks')}
            <ReorderIcon onClick={handeIconClick} className='ReoderIcon'/>
            {linksCtr('links')}
        </div>
    )
}

export default NavBar
