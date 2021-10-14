import React from "react"
import { Link, NavLink } from "react-router-dom";
import "./DogList.css"
class DogList extends React.Component {
    render() { 
        const path=`/dogs/`
        return <div className="Dog">
            <h1 className="text-center display-3">
                Dog List 
            </h1>
          
                <div className="row justify-content-center">
                    {
                        this.props.dogs.map((dog)=>
                        {
                            return  <div className="col-md-4" key={dog.id}>
                                <img src={dog.src}  alt={dog.name}/>
                             
                                <h3>
                                <NavLink className='link'  to={path+dog.name}>
                                    {dog.name}
                                </NavLink>
                                </h3>
                            </div>

                        })
                    }
                </div>
           
        </div>;
    }
}
 
export default DogList;
