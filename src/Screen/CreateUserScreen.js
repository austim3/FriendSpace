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
    Icon,
    Modal
} from 'antd-mobile';

  import userManager from '../DataManager/UserManager';

export default class CreateUserScreen extends Component {
    constructor(props){
        super(props)
        this.state ={
            nickName:'',
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
                        value={this.state.nickName}
                        onChange={(nickName)=>{this.setState({nickName})}}
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
                    Toast.loading('上传内容中...',0);
                    const resutl = await userManager.createUser(this.state.nickName,this.state.sign,this.state.files[0]);
                    Toast.hide();
                    if(resutl.success === false){
                        Toast.fail(resutl.errorMessage);
                        return;
                    }
                    Modal.alert('成功','点击确认键进入主页',[{
                        text:'确认',
                        onPress:()=>{this.props.history.replace('/LoginScreen')}
                    }])

                      
                     }} 
                    >
                        完成注册
                    </Button> 
                </WingBlank>

            </div>
        )
    }
}