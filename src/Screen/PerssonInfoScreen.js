import React, { Component } from 'react'

import {
    Button,
    NavBar,
    WingBlank,
    WhiteSpace,
    List,
    InputItem,
    Flex,

}from 'antd-mobile';

import {imageBaseURL} from '../DataManager/URLConfig';
import accountManager from '../DataManager/AccountManager';
import userManager from '../DataManager/UserManager';

export default class PerssonInfoScreen extends Component {

  render() {
    return (
      <div>
        <NavBar
           mode="dark"
        >个人信息</NavBar>
        <Flex
           justify={'center'}
           style={{backgroundColor:'#ffffff'}}
        >
          <img
             //alt={''}
             style={{width:'100px',height:'100px',margin:'5px'}}
          
          />
       </Flex>
       <List>
           <InputItem
             type={'text'}
             editable={false}
            // value={this.state.user.sign}
             onChange={(sign)=>{this.setState({user:{sign}})}}
             placeholder={'请输入昵称'}
           >
           昵称
            </InputItem>
           <InputItem
             type={'text'}
             editable={false}
             placeholder={'请输入个性签名'}
           >
           签名
           </InputItem>
        </List>
        <WhiteSpace/>
        <WingBlank>
            <Button
               onClick={async()=>{
                this.props.history.push('/ChangePersonInfoScreen',this.state.user);
               }}
            >
                修改个人资料
            </Button>
            <WhiteSpace/>
            <Button
                 onClick={async()=>{
                  this.props.history.push('/EditPasswordScreen');
              }}           
            
            >
                修改密码
            </Button>
            <WhiteSpace/>
            <Button
                type={'warning'}
                onClick={async()=>{
                  accountManager.logout();
                  this.props.history.replace('/');
                  
            }}
            >
                退出登录
            </Button>
        </WingBlank>
      </div>
    )
  }
}
