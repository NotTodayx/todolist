import React, { Component } from 'react';
import './ListItem.css'

class ListItem extends Component{
    constructor (props) {
        super(props);
        this.state = {
            defaultStatus: this.props.item.done
        }
    }
    
    textClick = (event) => {
        
        this.setState(
            {defaultStatus : !this.state.defaultStatus}
        )
    }
    render () {
        let newStyle ={
            color: this.state.defaultStatus ? '#b91111' : '#312d2d'
        }
        const item = this.props.item;
        if (item.done) {
            return <p style = {newStyle} onClick = {this.textClick.bind(this)} className='done-item'>{item.content}</p>
        } else {
            return <p style = {newStyle} onClick = {this.textClick.bind(this)} className='item'>{item.content}</p>
        }
            
    }
}



// const ListItem = (props) => {
//     const item = props.item;
//     if (item.done) {
//         return <p className='done-item'>{item.content}</p>
//     } else {
//         return <p className='item'>{item.content}</p>
//     }
// };

// const ListItem = (props) => <p>{props.item }</p>;

// class ListItem extends Component{
//     constructor (props) {
//         super(props)
//     }
//     render () {
        
//         return (  
//             <p>{this.props.item }</p>
            
//         );
//     }
// }

export default ListItem;