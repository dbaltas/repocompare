import React from 'react';
import { observer, PropTypes } from 'mobx-react';

import Header from '../components/Header';
import Form from '../components/Form';
import RepoWrapper from '../components/RepoWrapper';
import Footer from '../components/Footer';

// import DevTools from 'mobx-react-devtools';

const App = observer(({ repos, addRepo, removeRepo }) =>
(
  <div>
    <Header />
    <div id="main" className="container">
      <div className="jumbotron">
        <Form addRepo={addRepo} />
      </div>
      <div className="row">
        { repos.map((repo) => <RepoWrapper key={repo.id} repo={repo} removeRepo={removeRepo} />) }
      </div>
    </div>
    <Footer copy="I love this job." />
  </div>
));

App.propTypes = {
  repos: PropTypes.observableArray,
  addRepo: React.PropTypes.func.isRequired,
  removeRepo: React.PropTypes.func.isRequired
};

export default App;
