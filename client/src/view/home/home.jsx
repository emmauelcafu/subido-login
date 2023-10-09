// import {Router} from "react-router-dom";

// import Logins from "../login/login";
import {Link} from "react-router-dom"
function Home(params) {
    return(

        <div>
          <h1>estamos en el Home</h1>
          <Link to={"/login"}> 
          <button>ir a login</button>
          
          </Link>
        </div>
    )
}

export default Home;