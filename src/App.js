import React from 'react';
import './App.css';
import { isTemplateElement } from '@babel/types';
import { BrowserRouter as Router,Route} from 'react-router-dom';
import { Link } from 'react-router-dom';
import RouterComponent from '../src/router'

export default class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      headIndex: 0,
      userName: '王坤',
      headerList : [
        {
          name: '我的地盘',
          id: 1,
          active: true,
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
      ],
      miniHeaderList: [
        [
          {name:'首页',active: true,path: '/home'},
          {name:'日程',active: false,path: '/schedule'},
          {bar: true},
          {name:'任务',active: false},
          {name:'BUG',active: false},
          {name:'需求',active: false},
          {bar: true},
          {name:'项目',active: false},
          {name:'动态',active: false},
          {bar: true},
          {name:'档案',active: false},
          {name:'密码',active: false},
          {name:'联系人',active: false}
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
    }
  }

  clickHead = (index)=>{
    return (e) => {
      let headerList = this.state.headerList;
      headerList.forEach((element,inx) => {
        if(index === inx) {
          element.active = true;
        } else {
          element.active = false;
        }
      });
      this.setState({
        headerList: headerList,
        headIndex: index
      })
    }
  }

  clickMiniHead = (index)=> {
    return (e) => {
      let miniHeaderList = this.state.miniHeaderList;
      miniHeaderList[this.state.headIndex].forEach((item,inx) => {
        if(index === inx) {
          item.active = true;
        } else {
          item.active = false;
        }
      })
      this.setState({
        miniHeaderList: miniHeaderList
      })
    }
  }

  render() {
    return (
      <div className="App" id="app">
      <Router>
        <header className="App-header">
          <h1>不告诉你</h1>
          <ul className="header-list">
            {
              this.state.headerList.map((item,index) => {
                return  <li onClick={this.clickHead(index)} key={index} className={item.bar ? 'li-bar': item.active ? 'active-li' : 'inactive-li'}>{item.name}</li>
              })
            }
          </ul>
          <div style={{display: 'flex'}}>
            <div style={{display: 'flex',marginRight: '10px'}}>
              <span style={{background: 'rgba(255,255,255,.15)',padding: '1px 4px'}}>产品</span>
              <input className="search-input"/>
              <a style={{background: 'rgba(106, 154, 253,0.5)',padding: '0 3px'}}>GO!</a>
            </div>
            <div>{this.state.userName}</div>
          </div>
        </header>
        <div className="mini-header">
            {
              this.state.miniHeaderList[this.state.headIndex].map((item,index) => {
                return <Link key={index} to={item.path}><li onClick={this.clickMiniHead(index)} className={item.bar ? 'mini-bar' : item.active ? 'mini-list mini-active-li' : 'mini-list'}>{item.name}</li></Link>
              })
            }
        </div>
        <div className="router-part">
            <RouterComponent></RouterComponent>
        </div>
        </Router>
      </div>
    )
  }
}
