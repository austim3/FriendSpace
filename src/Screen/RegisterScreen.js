import React,{Component} from 'react'

import {
    NavBar,
    List,
    InputItem,
    WhiteSpace,
    WingBlank,
    Button,
    Toast,
    Icon
} from 'antd-mobile';
import userManager from '../DataManager/UserManager';

export default class RegisterScreen extends Component{

    constructor(props){
        super(props)

        this.state = {
            username:'',
            password:''
        }
    }
    render(){
        return(
            <div>
                <NavBar
                    mode="dark"
                    icon={<Icon type="left" />}
                    onLeftClick={()=>{this.props.history.goBack()}}
                >
                   注册
                </NavBar>
                <WhiteSpace/>
                <List>
                    <InputItem
                        type={'text'}
                        value={this.state.username}
                        onChange={(username)=>{this.setState({username})}}
                        placeholder={'请输入注册的用户名'}
                    >
                    用户名
                    </InputItem>
                    <InputItem
                        type={'password'}
                        value={this.state.password}
                        onChange={(password)=>{this.setState({password})}}
                        placeholder={'请输入注册的密码'}
                    >
                    密码
                    </InputItem>
                </List>    
                <WhiteSpace/>
                <WingBlank>
                    <Button
                        type={'primary'}
                    onClick={async()=>{
                           const reslut = await userManager.register(this.state.username,this.state.password);
                           if(reslut.success === false){
                               Toast.fail(reslut.errorMessage);
                               return;
                           }
                           this.props.history.push('/CreateUserScreen');
                     }}
                    >
                        提交注册
                    </Button> 
                </WingBlank>

            </div>
        )
    }
}