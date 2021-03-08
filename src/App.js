import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Home } from "./Home";
import { Profile } from "./Profile";
import { Callback } from "./Callback";

import './App.css';

function App() {
    return (
        <Router>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/profile">Profile</Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="App">
                <header className="App-header">
                    <div>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/profile" component={Profile} />
                    </div>
                </header>
            </div>
        </Router>
    );
}

export default App;
