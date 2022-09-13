import React, { useState, Fragment } from 'react';
import ReactDOM from 'react-dom/client';
import bookArray from './models/books.json';

import BookCounter from './components/BookCounter';

const App = () => {
  // const bookArray =  [{"title":"Half of a Yellow Sun"},{"title":"Born a Crime"},{"title":"Americanah"},{"title":"Ghana Must Go"}];
  const [localLibrary,setLibrary] = useState({name:"Sarah", books : bookArray});
  
  const refreshBooks = () => {
    setLibrary({name:"Sarah", books : [{"title":"The Wind Blew West"}]});
    }
   

  return <Fragment>
    <h1>Welcome to My Library</h1>
    <BookCounter library={localLibrary} refreshBooks={refreshBooks}/>
  </Fragment>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);
