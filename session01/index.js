// Add the code here

'use strict';

function ClickButton() {

  const [clicked, setClick] = React.useState(false);

  if (clicked) {
    return 'Hello World!';
  }

  return React.createElement( 
    'button', {
        className: "main-button"

    // style: {
    //   backgroundColor: "#3392e4",
    //   color: "#fff",
    //   border: "0",
    //   padding: "10px 20px",
    //   fontWeight: "bold",
    //   borderRadius: "5px",
    //   fontSize: "1.1em"
    // }
    ,
    onClick: () => setClick(true)
  },
    'Press to reveal'
  );
}

const domContainer = document.querySelector('#root');
ReactDOM.render(React.createElement(ClickButton), domContainer);



