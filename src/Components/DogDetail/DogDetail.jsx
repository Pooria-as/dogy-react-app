import React from 'react';
import { NavLink } from 'react-router-dom';
import "./DogDetail.css"
class DogDetail extends React.Component {
    render() { 
        let {dog}=this.props
        return <div className="card DogDetails-card" style={{ width: '18rem' }}>
                    <img src={dog.src} className="img-thumbnail" alt={dog.name} />
                    <div className="card-body">
                        <h5 className="card-title">{dog.name}</h5>
                        <p className="card-text">
                            {dog.age} years old
                        </p>
                        <ul className="list-group">
                            {
                                dog.facts.map((item,i)=>
                                {
                                    return  <li key={i}  className="list-group-item">{item}</li>
                                })
                            }
                           
                        </ul>
                        <br/>
                      <NavLink to="/dogs" className='btn btn-info'>
                          Back To Dogs
                      </NavLink>
                    </div>
                </div>
      ;
    }
}
 
export default DogDetail;