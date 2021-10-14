import React from "react"
import { Switch,Route, Redirect } from "react-router";
import DogDetail from "./Components/DogDetail/DogDetail";
import DogList from "./Components/DogList/DogList";
import NavBar from "./Components/NavBar/NavBar";
import DATA from "./DATA"

class App extends React.Component {
    constructor(props)
    {
        super(props);
        this.state={
            dogs:DATA
        }
    }
    render() { 
        const getDogData =(idk)=>
        {
            let RouteParam=idk.match.params.name;
            let currentDog=this.state.dogs.find(
                dog=>dog.name.toLowerCase()===RouteParam.toLowerCase()
            );
            return <DogDetail {...idk} dog={currentDog} />
        }
        return <div>
            <NavBar dogs={this.state.dogs}/>
           <section className="container">
           <Switch>
                <Route exact path='/dogs' render={()=><DogList dogs={this.state.dogs}/>} />
                <Route exact path='/dogs/:name' render={getDogData} />
                <Redirect to='/dogs' /> 
            </Switch>
           </section>
        </div>;
    }
}
 
export default App;