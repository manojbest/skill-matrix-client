import React from 'react';
import Layout from './components/Layout/Layout';
import { Route, BrowserRouter as Router } from 'react-router-dom'

import MySkill from './components/MySkill/MySkill';
import SkillAdd from './components/SkillAdd/SkillAdd';
import SkillSearch from './components/SkillSearch/SkillSearch';

const app = () => (
  
        <Layout>
          <Router>
            <Route path="/myskill" component={MySkill} />
            <Route path="/addskill" component={SkillAdd} />
            <Route path="/searchskill" component={SkillSearch} />
          </Router>
        </Layout>
);

export default app;
