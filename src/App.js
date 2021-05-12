import "./estilo.css"
import Tabla from "./componentes/Tabla";
import {Switch,Route} from'wouter'
import HomePage from "./pages/home";


function App() {

return(<>

   <Switch>
       <Route
       path="/"
       component={HomePage}
       />
       <Route 
       path="/:tabla"
       component={Tabla}
       />
   </Switch>  
</>
)
}

export default App;
