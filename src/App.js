import { Routes, Route, Switch, Link } from "react-router-dom";
import HomePage from './pages/homepage/homepage.component'
import './App.css';

const HatsPage= (props)=>{

  return(
    <div>
     <h1>HomePage</h1>
    </div>
  )
}




function App() {
  return (
    <div>
        <Route exact path='/' component={HomePage}/>
        <Route  path='/shop/hats' component={HatsPage}/>

    </div>
    
  );
}

export default App;
