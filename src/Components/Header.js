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
        <p className="issueText"> ISSUE 079</p>
       <p className="title"> Catalyst</p>
       <p className ="agenttext">Agent of change</p>
       <Router>
       <Link className="linktext2" to='#'>Read more<br/></Link>
       <Link className="linktext2" to='https://google.com/'>SEE FULL ISSUE</Link>
       </Router>
       </div>
    </div>
    </Fragment>
   
  )

}

export default Header;