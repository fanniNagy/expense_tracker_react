import './App.css';
import Entry from "./components/Entry";
import Login from "./components/Login"
import {UserProvider} from "./context/UserContext";
import Registration from "./components/Registration";
import Welcome from "./components/Welcome";
import NavBar from "./components/NavBar";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

function App() {

    return (
        <Router>
            <div className="App">
                <UserProvider>
                    <NavBar/>
                    <Switch>
                        <Route path="/login" component={Login} />
                        <Route path="/entry" component={Entry} />
                        <Route path="/register" component={Registration} />
                        <Route path="/" component={Welcome} />
                    </Switch>
                </UserProvider>
            </div>
        </Router>
    );
}

export default App;
