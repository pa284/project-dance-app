import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './components/Home';
import { AboutUs } from './components/AboutUs';
import { Classical } from './components/Classical';
import { Modern } from './components/Modern';
import { Performances } from './components/Performances';
import { ContactUs } from './components/ContactUs';
import { Layout } from './components/Layout';
import { Navigationbar } from './components/Navigationbar';
import { SignInPage } from './components/Login';
import { SignUpPage } from './components/Registration';
import { ForgotPasswordPage } from './components/ForgotPassword';

class App extends Component{
    render(){
        return(
        <React.Fragment>
            <Navigationbar/>
            <Layout>
            <Router>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/AboutUs' component={AboutUs}/>
                    <Route path='/Classical' component={Classical}/>
                    <Route path='/Modern' component={Modern}/>
                    <Route path='/Performances' component={Performances}/>
                    <Route path='/ContactUs' component={ContactUs}/>
                    <Route path='/Login' component={SignInPage}/>
                    <Route path='/Registration' component={SignUpPage}/>
                    <Route path='/ForgotPassword' component={ForgotPasswordPage}/>
                </Switch>
            </Router>
            </Layout>
        </React.Fragment>
        );
    }
}

export default App;