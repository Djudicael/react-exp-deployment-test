//High order component (hoc) a component that renders an other component
//Reuse code
//render hijeacking
//prop manipulation
//abstacrt state

import React from 'react';
import ReactDOM from 'react-dom';

const Info=(props)=>(
    <div>
    <h1>info</h1>
    <p> the info is: {props.info}</p>
    </div>
);

const withAdmindWarning=(WrappedComponent)=>{

    return(props)=>(
       <div>
       {props.isAdmin && <p> this is private infor plase dont share</p>}
       <WrappedComponent {...props}/>
       </div> 
    );
};
const requireAuthentication=(WrappedComponent)=>{
    return(props)=>(
        <div>
       
      {props.isAuthenticated?(
        <WrappedComponent {...props}/>
      ):(
        <p>please login rto view the info</p>
      )}
        </div> 
    );
}

const AdminInfo=withAdmindWarning(Info);
const AuthInfo= requireAuthentication(Info);

//ReactDOM.render(<AdminInfo isAdmin={true} info=" this are the detail"/>, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={false} info=" this are the detail"/>, document.getElementById('app'));