import logo from './logo.svg';
import './App.css';
import About from './components/About';
import ContactMe from './components/ContactMe';
import Home from './components/Home';
import NotFound from './components/NotFound';
import { Switch, Route } from 'react-router-dom';
import React from 'react';
import NavBar from './components/NavBar';
//import Projects from './components/Projects';
import Loading from './components/Loading';
import ProjectDetails from './components/ProjectDetails';

const lazyProjects = React.lazy(() => import('./components/Projects'));

class App extends React.Component {
  state = {
    loggedIn: true
  }

  render () {
    const { loggedIn } = this.state;
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path='/' component={Home} /> 
          <Route path='/projects/:id' component={ProjectDetails} />
          <Route path='/home' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/contact' render={
            () => {
              return (
                loggedIn 
                ?
                <ContactMe />
                :
                <About />
              )
            }
          } />
           <React.Suspense fallback={<Loading />}>
            <Route exact path='/projects' component={lazyProjects} /> 
          </React.Suspense>
          <Route component={NotFound} />
         
        </Switch>
      </div>
    );
  }
}

export default App;
