import React, { Component } from 'react';
import { addAuthToken } from 'common-uitoolkit-beyond';
import BooksList from "./components/Books/BooksList";
import Alerts from "./components/Alerts/Alerts";

class App extends Component {
    componentDidMount() {
        addAuthToken();
    }

    render() {
        return (
            <div className="App">
                <BooksList/>
                <Alerts/>
            </div>
        );
    }
}

export default App;
