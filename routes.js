import React from 'react';
import { Route } from 'react-router-dom';
import Configuration from './configuration/Configuration';
import Segments from './segments/Segments';
import ProcessDetails from './processdetails/ProcessDetails'
import About from './about/about';

export default [
    <Route exact path="/configuration" render={() => <Configuration />} />,
    <Route exact path="/segments" render={() => <Segments />} />,
    <Route exact path="/processdetails" render={() => <ProcessDetails />} />,
    <Route exact path="/about" render={() => <About />} />,
];
