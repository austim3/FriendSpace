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

// import {imageBaseURL} from '../DataServer/URLConfig';

// import accountManager from '../DataServer/AccountManager';
// import userManager from '../DataServer/UserManager';

export default class AScreen extends Component {

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
            <Button>
                修改个人资料
            </Button>
            <WhiteSpace/>
            <Button>
                修改密码
            </Button>
            <WhiteSpace/>
            <Button
                type={'warning'}
            >
                退出登录
            </Button>
        </WingBlank>
      </div>
    )
  }
}
