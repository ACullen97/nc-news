import { Link } from 'react-router-dom';

function Header() {
    return(
        <header>
    <h1>NC News</h1>

    <nav>
         <Link to="/">Home</Link> | <Link to="/addarticle" >Add an Article</Link> | <Link to="/topics">Topics</Link>
    </nav>
  
    </header>
    )
}




    export default Header; 