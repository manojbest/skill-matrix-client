import React from 'react';
import Layout from './components/Layout/Layout';
import { Route, BrowserRouter as Router } from 'react-router-dom'


import MySkill from './components/AddSkill/MySkill';
import AddSkill from './components/AddSkill/AddSkill';
import SearchSkill from './components/AddSkill/SearchSkill';


const app = () => (
  <Router>
        <Layout>
          <Route path="/myskill" component={MySkill} />
          <Route path="/addskill" component={AddSkill} />
          <Route path="/searchskill" component={SearchSkill} />
        </Layout>
    </Router>
);

export default app;
