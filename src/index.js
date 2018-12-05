import React from 'react';
import ReactDOM from 'react-dom';
// import SeasonDisplay from './SeasonDisplay';

const Application = () => {
    window.navigator.geolocation.getCurrentPosition(
        (position) => console.log(position),
        err => console.log(err)
    );
  
    return (
    <div>
        Start here     
    </div>
  )
}

ReactDOM.render(<Application />, document.querySelector('#root'))
