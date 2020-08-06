import React, { Fragment } from 'react';
import{
    BrowserRouter as Router,
    Switch,
    route,
    Link
}
from 'react-router-dom';



function Header() {
  return (
      <Fragment>
    <div className="header">
        <div className="textheader">
    <p className="issuetext"> ISSUE 079</p>
       <h2 className="title"> Catalyst</h2>
       <p className ="agenttext">Agent of change</p>
       <Router>
       <Link className="linktext1" to='https://google.com/'>Read more<br/><br/></Link>
       <Link className="linktext2" to='https://google.com/'>SEE FULL ISSUE</Link>
       </Router>
       </div>
    </div>
    </Fragment>
   
  )

}

export default Header;