import React from 'react';
import './spinner.css';


// if data loaded this component will show

const Spinner = () => {
    return(
    <div className="row justify-content-center lds-css">
      <div className="lds-flickr">
        <div className="ng-scope"></div>
        <div></div>
      </div>
    </div>
    )
}

export default Spinner;