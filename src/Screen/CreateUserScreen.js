import React,{Component} from 'react'

import {
    NavBar,
    List,
    InputItem,
    WhiteSpace,
    WingBlank,
    Button,
    Toast,
    ImagePicker,
    Icon
} from 'antd-mobile';

import accountManager from '../DataManager/AccountManager';

export default class CreateUserScreen extends Component {
    constructor(props){
        super(props)
        this.state ={
            nickname:'',
            sign:'',
            files:[]
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
                   完善信息
                </NavBar>
                <WhiteSpace/>
                <ImagePicker
                    files={this.state.files}
                    onChange={(files)=>{this.setState({files})}}
                    selectable={this.state.files.length<1}
                />
                <List>
                    <InputItem
                        type={'text'}
                        value={this.state.nickname}
                        onChange={(nickname)=>{this.setState({nickname})}}
                        placeholder={'请输入昵称'}
                    >
                    昵称
                    </InputItem>
                    <InputItem
                        type={'text'}
                        value={this.state.sign}
                        onChange={(sign)=>{this.setState({sign})}}
                        placeholder={'请输入签名'}
                    >
                    签名
                    </InputItem>
                </List>    
                <WhiteSpace/>
                <WingBlank>
                    <Button
                        type={'primary'}
                        onClick={async()=>{
                            
                    if(this.state.files.length === 0){
                        Toast.fail('请选择头像',1);
                        return;
                    }

                           const reslut = await accountManager.register(this.state.nickname,this.state.sign);
                            if(reslut.success === false){
                               Toast.fail(reslut.errorMessage);
                               return;
                           }
                           this.props.history.push('/HomeScreen'); 
                     }} 
                    >
                        完成注册
                    </Button> 
                </WingBlank>

            </div>
        )
    }
}