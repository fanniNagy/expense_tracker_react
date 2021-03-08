import './App.css';
import Entry from "./components/Entry";
import Login from "./components/Login"
import {UserProvider} from "./context/UserContext";
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
                    <Login/>
                    {/*
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <Switch>
                        <Route path="/">
                            <Entry/>
                        </Route>
                    </Switch>*/}
                </UserProvider>
            </div>
        </Router>
    );
}

export default App;
