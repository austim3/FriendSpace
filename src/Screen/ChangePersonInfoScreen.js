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

import userManager from'../DataManager/UserManager'

export default class ChangePersonInfoScreen extends Component {
    constructor(props){
        super(props)
        this.state ={
            nickname:props.location.state.nickname,
            sign:props.location.state.sign,
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
                修改用户信息
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

                           const reslut = await userManager.register(this.state.nickname,this.state.sign);
                            if(reslut.success === false){
                               Toast.fail(reslut.errorMessage);
                               return;
                           }
                           this.props.history.relace('/SucceedScreen'); 
                     }} 
                    >
                        提交修改
                    </Button> 
                </WingBlank>

            </div>
        )
    }
}