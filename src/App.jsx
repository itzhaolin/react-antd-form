import React, { useState } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { Button } from 'antd'
import './App.css';
import Home from './modules/Home'
import EditForm from './modules/EditForm'
import ClassForm from './modules/ClassForm'
import HookForm from './modules/HookForm'

import {createIntl, createIntlCache, RawIntlProvider, IntlProvider} from 'react-intl'
import zh_CN from './locales/zh_CN'
import en_US from './locales/en_US'

const mapObj = {
  'zh': zh_CN,
  'en': en_US
}
function App() {
  const [lang, setLang] = useState('zh')
  
  return (
    <div className="App">
      <IntlProvider locale={'zh'} messages={mapObj[lang]}>
        <Button onClick={() => setLang('en')}>切换英文</Button>
        <Button onClick={() => setLang('zh')}>切换中文</Button>
        <Router>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/classForm" component={ClassForm}></Route>
            <Route exact path="/hookForm" component={HookForm}></Route>
            <Route exact path="/editForm" component={EditForm}></Route>
          </Switch>
        </Router>
      </IntlProvider>
      
    </div>
  );
}

export default App;
