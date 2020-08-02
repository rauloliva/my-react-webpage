import React, { useState, useEffect } from 'react'
var root = "/MyReactWebPage"
const navOptions = [
    { label: 'Welcome', path: root + '/' },
    { label: 'My Projects', path: root + '/projects' },
    { label: 'Contact Me', path: root + '/contact' }
]

const Header = () => {
    const [uri, setUri] = useState([navOptions[1].label, navOptions[2].label])
    const [path, setPath] = useState([navOptions[1].path, navOptions[2].path])
    
    useEffect( () => {
        var currentURI = window.location.href.split('/')
        currentURI = currentURI[currentURI.length - 1]
        
        switch (currentURI) {
            case '':
            case root.replace('/',''):
                setUri([navOptions[1].label, navOptions[2].label])
                setPath([navOptions[1].path, navOptions[2].path])
                break;
            case 'projects':
                setUri([navOptions[0].label, navOptions[2].label])
                setPath([navOptions[0].path, navOptions[2].path])
                break;
            case 'contact':
                setUri([navOptions[0].label, navOptions[1].label])
                setPath([navOptions[0].path, navOptions[1].path])
                break;
            default:
                setUri([])
                setPath([])
        }
    }, [setUri])

    return (
        <header className="header">
            <div className="header__title">
                <h1 className="header__title-1">Welcome to my Web Page</h1>
                <h4 className="header__title-2">by Raul Oliva</h4>
            </div>

            <nav className="navbar">
                <a href={path[0]} className="navbar__item-1">{uri[0]}</a>
                <a href={path[1]} className="navbar__item-2">{uri[1]}</a>
            </nav>
        </header>
    )
}

export default Header;