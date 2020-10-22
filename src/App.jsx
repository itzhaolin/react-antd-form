import React, { useState } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { Button, ConfigProvider, Modal } from 'antd'
import './App.css';
import Home from './modules/Home'
import EditForm from './modules/EditForm'
import ClassForm from './modules/ClassForm'
import HookForm from './modules/HookForm'
import UseRefComp from './modules/UseRefComp'

import {IntlProvider} from 'react-intl'
import zh_CN from './locales/zh_CN'
import en_US from './locales/en_US'
import zhCN from 'antd/es/locale/zh_CN'
import enUS from 'antd/es/locale/en_US'

// import intl from 'react-intl-universal'

const mapObj = {
  'zh': zh_CN,
  'en': en_US
}
function App() {
  const [lang, setLang] = useState('zh')
  const [show, setShow] = useState(false)
  return (
    <div className="App">
      <IntlProvider locale={lang} messages={mapObj[lang]}>
        <Button onClick={() => setLang('en')}>切换英文</Button>
        <Button onClick={() => setLang('zh')}>切换中文</Button>
        <Button onClick={() => setShow(!show)}>测试antd语言包</Button>
        <ConfigProvider locale={{
          'zh': zhCN,
          'en': enUS
        }[lang]}>
          <Modal title="测试弹框语言" visible={show} onCancel={() => setShow(!show)}>这是一个 测试弹框语言</Modal>
          <Router>
            <Switch>
              <Route exact path="/" component={Home}></Route>
              <Route exact path="/ClassForm" component={ClassForm}></Route>
              <Route exact path="/HookForm" component={HookForm}></Route>
              <Route exact path="/EditForm" component={EditForm}></Route>
              <Route exact path="/UseRefComp" component={UseRefComp}></Route>
            </Switch>
          </Router>
        </ConfigProvider>
      </IntlProvider>
    </div>
  );
}

export default App;
