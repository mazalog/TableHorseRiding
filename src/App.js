import TablaPage from "./pages/TablaPage"
import {Switch,Route} from'wouter'
import HomePage from "./pages/home"
import "./theme.css"


export default function App() {
return(
   <Switch>
       <Route
       path="/"
       component={HomePage}
       />
       <Route 
       path="/:tabla"
       component={TablaPage}
       />
   </Switch>  
)
}

