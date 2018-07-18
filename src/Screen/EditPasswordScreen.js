import React,{Component} from 'react'

import {
    Button,
    NavBar,
    WhiteSpace,
    WingBlank,
    Icon,
    List,
    InputItem


} from 'antd-mobile'

import accountManager from '../DataManager/AccountManager';

export default class EditPasswordScreen extends Component{


    constructor(props){
        super(props)
        this.state={
            old_password:'',
            new_password:'',
        }

    }

    render() {
      return (
        <div>
            <NavBar
               mode="dark"
               icon={<Icon type="left"/>}
               onLeftClick={()=>{this.props.history.goBack()}}
            >
                修改密码
            </NavBar>
            <List>
                <InputItem
                   type={'text'}
                    value={this.state.old_password}
                    onChange={(old_password)=>{this.setState({old_password})}}
                    placeholder={'请输入旧密码'}
                
                >
                旧密码
                </InputItem>
                <InputItem
                   type={'text'}
                    value={this.state.new_password}
                    onChange={(new_password)=>{this.setState({new_password})}}
                    placeholder={'请输入新密码'}
                >
                新密码
                </InputItem>
            </List>
            <WhiteSpace/>
            <WingBlank>
                <Button
                   type={'primary'}
                   onClick={async()=>{
                       const result=await accountManager.editPassword(this.state.old_password,this.state.new )
                   }}
                >
                提交修改
                </Button>
               
            </WingBlank>
          
        </div>
      )
    }

}