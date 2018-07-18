import React, { Component } from 'react'

import moment from 'moment';

import {
    imageBaseURL
} from '../DataServer/URLConfig';

import './FriendListItem.css'

import { 
    WingBlank, 
    WhiteSpace ,
    Card,
    SwipeAction,
} from 'antd-mobile';

export default class FriendListItem extends Component{
    render(){
        return(
            <SwipeAction
                autoClose={true}
                right={[
                    {
                        text:'取消关注',
                        style:{
                            backgroundColor:'red'
                        },
                        onPress:(e)=>{
                            if(this.props.del){
                                this.props.del(this.props.id);
                            }
                        }
                    },
                ]}
                >
                <WingBlank>
                    <WhiteSpace/>
                    <Card
                        onClick={()=>{
                            if(this.props.onItemClick){
                                this.props.onItemClick();
                            }
                        }}
                        >
                    <Card.Header
                        title={this.props.nickname}
                        thumb={imageBaseURL+this.props.image}
                        extra={this.props.sign}
                        />
                    </Card>
                </WingBlank>
            </SwipeAction>
        )
    }

}
