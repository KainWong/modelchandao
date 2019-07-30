import React from 'react';
import './App.css';
import { isTemplateElement } from '@babel/types';

const headerList = [
  {
    name: '我的地盘',
    id: 1,
    active: true
  },
  {
    name: '产品',
    id: 2,
    active: false
  },
  {
    name: '项目',
    id: 3,
    active: false
  },
  {
    name: '测试',
    id: 4,
    active: false
  },
  {
    bar: true
  },
  {
    name: '文档',
    id: 5,
    active: false
  },
  {
    name: '统计',
    id: 6,
    active: false
  },
  {
    bar: true
  },
  {
    name: '组织',
    id: 7,
    active: false
  },
]

const miniHeaderList = [
  [
    {name:'首页'},
    {name:'日程'},
    {name:'任务'},
    {name:'BUG'},
    {name:'需求'},
    {name:'项目'},
    {name:'动态'},
    {name:'档案'},
    {name:'密码'},
    {name:'联系人'}
  ],
  [
    {name:'需求'},
    {name:'计划'},
    {name:'发布'},
    {name:'路线图'},
    {name:'项目'},
    {name:'动态'},
    {name:'文档'},
    {name:'概况'},
  ],
  [
    {}
  ],
  [],
  [],
  [],
  []
]
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>国贸云商</h1>
        <ul className="header-list">
          {
            headerList.map((item,index) => {
              return  <li key={index} className={item.bar ? 'li-bar': item.active ? 'active-li' : 'inactive-li'}>{item.name}</li>
            })
          }
        </ul>
        <div style={{display: 'flex'}}>
          <div style={{display: 'flex',marginRight: '10px'}}>
            <span style={{background: 'rgba(255,255,255,.15)',padding: '1px 4px'}}>产品</span>
            <input className="search-input"/>
            <a style={{background: 'rgba(106, 154, 253,0.5)',padding: '0 3px'}}>GO!</a>
          </div>
          <div>王坤</div>
        </div>
      </header>
      <div className="mini-header">
          {

          }
      </div>
    </div>
  );
}

export default App;
