import { Link } from 'react-router-dom';

function Header() {
    return(
        <header>
    <h1>NC News</h1>

    <nav>
         <Link style={{color: '#fff'}} to="/">Home</Link>  &nbsp; &nbsp; &nbsp; | &nbsp; &nbsp; &nbsp; <Link style={{color: '#fff'}} to="/topics">Topics</Link>
    </nav>
  
    </header>
    )
}




    export default Header; 