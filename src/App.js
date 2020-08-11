import React from 'react';
import BooksList from "./components/Books/BooksList";
import Alerts from "./components/Alerts/Alerts";

function App() {
  return (
    <div className="App">
      <BooksList/>
      <Alerts/>
    </div>
  );
}

export default App;
