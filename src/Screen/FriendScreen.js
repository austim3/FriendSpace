import React,{Component} from 'react'

import {
    Toast,
    NavBar,
    ListView,
    PullToRefresh,
    SearchBar
}from 'antd-mobile';

import accoutManager from '../DataSerever/AccountManager';
import friendManager from '../DataServer/FriendManager';

import FriendListItem from '../ViewComponent/FriendListItem';
import { fastest } from 'sw-toolbox';

export default class FriendScreen extends Component{
    async componentDidMount(){
        if(accountManager.isLogin()===false){
            return;
        }
        const result =await friendManager.getFllows()
        if(result.success ===false){
            Toast.fail(result.errorMessage);
            return;
        }
        this.setState((preState)=>{
            return{
                dataSource:preState.dataSource.cloneWithRows(result.data)
            }
        })
    }

    constructor(props){
        super(props)
        const dataSource = new ListView.DataSource({
            rowHasChanged:(row1,row2)=>row1!==row2,
        })

        this.state={
            dataSource,
            refreshing:false,
            nickname:'',
            isSearchData:false,
        }
    }

    onRefresh = async()=>{
        try{
            this.setState({refreshing:true});
            const result = await friendManager.getFllows()
            if(result.success ===false){
                Toast.fail(result.errorMessage);
                this.setState({refreshing:false});
                return;
            }
            this.setState((preState)=>{
                return{
                    dataSource:preState.dataSource.cloneWithRows(result.data),
                    refreshing:false
                }
            })
        }catch(error){
            Toast.fail(`${error}`);
            this.setState({refreshing:false});
        }
    }

    onSearch = async ()=>{
        this.setState({
            isSearchData:true,
        })
        Toast.loading('查询中，请稍后',0);
    }

}