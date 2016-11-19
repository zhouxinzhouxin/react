import React from 'react';
import ReactDom from 'react-dom';
// var App =React.createClass({
//     getDefaultProps:function(){
//         console.log('getDefaultProps');
//         return {
//             name:'ccc'
//         }
//     },
//     getInitialState:function(){
//         console.log('getInitialState');
//         return{
//             value:'please input'
//         }
//     },
//     componentWillMount:function(){
//         console.log('componentWillMount')
//     },
//     shouldComponentUpdate:function(nextProps,nextState){
//         console.log('shouldComponentUpDate',nextProps,nextState);
//         return true;
//     },
//     componentWillUpdate:function(){
//         console.log('componentWillUpDate');
//     },
//     componentDidUpdate:function(){
//         console.log('componentDidUpdate');
//     },
//     render:function(){
//         console.log(this.props.data)
//         console.log(this.props.name)
//         return (
//                 <div>
//                     <span>zx</span>
//                     <ul>
//                         {
//                             this.props.data.map(function(ele,index){
//                                 return <li key={index}>{ele}</li>
//                             })
//                         }
//                     </ul>
//                 </div>
//                 )
//     },
//     componentDidMount:function(){
//         console.log('componentDidMount');
//         var self=this;
//         setTimeout(function(){
//             self.setState({value:'bbb'})
//         },2000);
//     }
// })
// var dataList=['zx','jc','sct'];
// ReactDom.render(
//     <App data={dataList}/>,
//     document.getElementById('root')
//  );
var Search=React.createClass({
    getInitialState:function(){
        return{
            value:'please input'
        }
    },
    onHandleChange:function(){
        this.setState({value:this.refs.zx.value});
    },
    render:function(){
        console.log(this.state.value);
        return(
            <div>
                <input type='text' ref="zx" value={this.state.value} onChange={this.onHandleChange}></input>
                <span>{this.state.value}</span>
            </div>
        )
    }
})
ReactDom.render(
    <Search/>,
    document.getElementById('root')
);