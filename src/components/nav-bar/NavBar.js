
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { getCategorias } from '../../hooks/getCategorias';
import { Categorias } from './Categorias';
import './style.css'
let sw = false;
export const NavBar = () => {
    const h = useHistory();
    const category = getCategorias();
    const handleClick = ()=> {
      window.scrollTo(0,0)
      sw=!sw;
      if(sw ){
        const m = document.querySelector('.banner-app').classList;
        m.remove('m-56')
      } else {
        const m = document.querySelector('.banner-app').classList;
        m.add('m-56')
      }
    }
    const [input, setinput] = useState("");

    const handleSubmit = (e)=> {
      e.preventDefault();
      //console.log(77)
      h.push(`/libreria/search?q=${input}`)
    }

    const handleInput = (e) => {
      setinput(e.target.value);
    }

    const handleLogo =()=> {
      if(sw){
        document.querySelector('.button-click').click();
      }
    } 
    return (
        <header>
          <div className="collapse" id="navbarToggleExternalContent">
          <div className="bg-dark p-4">
          <div className="container-fluid">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  {
                      category.map( category => {
                          return <Categorias key = { category } category = { category} />
                      })
                  }
                </ul>
            </div>
          
          </div>
          </div>
        <nav className="navbar navbar-dark bg-dark fixed-top">
          <div className="container-fluid">
            <button className="navbar-toggler" onClick = { handleClick } type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon button-click"></span>
            </button>
            <div className = 'd-flex'>
            <Link onClick = { handleLogo  } className="navbar-brand" to="/">Italia</Link>
            <form className="m-0" onSubmit = { handleSubmit }>
                  <input onChange = { handleInput }  className="form-control me-2" type="text" placeholder="Buscar" aria-label="Search"/>
             </form>
            </div>
          </div>
        </nav>
        </header>
    )
}
