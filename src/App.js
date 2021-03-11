import './App.css';
import Entry from "./components/Entry";
import Login from "./components/Login"
import {UserProvider} from "./context/UserContext";
import Registration from "./components/Registration";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function App() {

    return (
        <Router>
            <div className="App">
                <UserProvider>
                    <Switch>
                        <Route path="/login" component={Login} />
                        <Route path="/entry" component={Entry} />
                        <Route path="/register" component={Registration} />
                    {/*    <Link to="/">Home</Link>*/}
                    {/*    <Route path="/entry"><Entry/></Route>*/}
                    </Switch>
                </UserProvider>
            </div>
        </Router>
    );
}

export default App;
