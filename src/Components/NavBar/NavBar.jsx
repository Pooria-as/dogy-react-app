import React from "react"
import { NavLink } from "react-router-dom";

class NavBar extends React.Component {
    constructor(props)
    {
        super(props);
    }
    render() { 
    

        return <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <NavLink className="navbar-brand" to='/dogs'>
            Dogy Dogy
        </NavLink>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink exact activeClassName="active" className='nav-link' to='/dogs'>Home</NavLink>
                </li>

                
                    
                {this.props.dogs.map((dog)=>
                 <li className="nav-item" key={dog.id}>
                 <NavLink exact activeClassName="active" className='nav-link' to={`/dogs/${dog.name}`}>{dog.name}</NavLink>
               </li>
                
                )}



                
                
                </ul>
            </div>
        </nav>
        </div>;
    }
}
 
export default NavBar;