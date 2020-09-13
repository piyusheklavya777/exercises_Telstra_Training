# JWT Auth :
- on npmjs.org, jsonwebtoken by ziluvatar: npm install jsonwebtoken

# STEPS (Backend)
Following steps are executed in backend folder
- npm init -y : Make package.json
- npm install express jsonwebtoken
- "start":"index.js" in package.json and make an index.js.
    - In index.js instantiate express. This file is the first routing file found.


# STEPS (Frontend)

-App.jsx
import { Route, withRouter } from 'react-router-dom';

const WorkshopDetailsWithRouter = withRouter( WorkshopDetails );

function App(props) {
    return (
        <div>
              <Navbar/>
              <Route path="/" exact >
                   <Home/>
              </Route>
              <Route path="/workshops" exact >
                    <WorkshopsList/>                   
              </Route>
              <Route path="/workshops/:id" component={WorkshopDetailsWithRouter}   />
                

        </div>
    );
}

-------------
In workshopdetails : 
import {Route, Switch, Link} from 'react-router-dom'
<div>
    <div>
        <Link to={this.props.match.url}>Sessions</Link>
        <br/>
        <Link to={`${this.props.match.url}/add`}>Add session</Link>
    </div> <hr/>
    <div>
        <Switch>
            <Route path ={`${this.props.match.url}/add`} component={AddSession}/>
            <Route path ={this.props.match.url} component={SessionsList}/>
        </Switch>
    </div>
</div>

# doubts
- is it also possible to remove a team from a meeting?
 In that case the team needs to have a meetings object
 