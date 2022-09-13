import React from 'react';
import ReactDOM from 'react-dom/client';
import Profile from "./Profile"
// const name = 'Farhiya';
function Profile(props){

// if (props.name != null){
    return <div>
                <h1>{props.name}'s React Page</h1>
                  <p>I'm a new coder. </p>
                  
                  </div>
}



// else {
//         return <div>
//         <h1>Just a React Page</h1>
//           <p>Nothing to see here!</p>
//        </div>  
                 
// } 



// console.log(element);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Profile name="Farhiya"/>);
