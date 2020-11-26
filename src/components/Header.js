import React, { useState, useEffect } from 'react'
const navOptions = [
    { label: 'Welcome' },
    { label: 'My Projects' },
    { label: 'Contact Me' }
]

const Header = props => {
    const [ page, setPage] = useState([navOptions[1].label, navOptions[2].label])
    const [ id, setId ] = useState(['projects', 'contact'])
    
    useEffect( () => {
        const view = props.view
        
        switch (view) {
            case 'landing':
                setPage([navOptions[1].label, navOptions[2].label])
                break;
            case 'projects':
                setPage([navOptions[0].label, navOptions[2].label])
                break;
            case 'contact':
                setPage([navOptions[0].label, navOptions[1].label])
                break;
            default:
                setPage([])
        }
    }, [props.view])

    const handleOnClick = event => {
        event.preventDefault()
        const view = event.target.id
        props.setView(view)
        switch(view) {
            case 'projects':
                setId(['landing', 'contact']); 
                break;

            case 'contact':
                setId(['landing', 'projects']); 
                break;

            default:
                setId(['projects', 'contact']); 
        }
    }

    return (
        <header className="header">
            <div className="header__title">
                <h1 className="header__title-1">Welcome to my Web Page</h1>
                <h4 className="header__title-2">by Raul Oliva</h4>
            </div>

            <nav className="navbar">
                <a href='/' id={ id[0] } onClick={ handleOnClick } className="navbar__item-1">{page[0]}</a>
                <a href='/' id={ id[1] } onClick={ handleOnClick } className="navbar__item-2">{page[1]}</a>
            </nav>
        </header>
    )
}

export default Header;