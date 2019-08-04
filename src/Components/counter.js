import React from 'react';
import {increment,incrementAsync,decrement,decrementAsync} from './../actions/action'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
const mapStateToProps=(state)=>{
    return({
        counter:state.counter
    });
}
const mapDispatchToProps=(dispatch)=>{
    return bindActionCreators({
        increment,decrement,incrementAsync,decrementAsync
    },dispatch);
}

class Counter extends React.Component
{
    render()
    {
        return(<div>
             <p>{this.props.counter}</p>
            <button onClick={()=>this.props.increment()}>Increase</button>
            <button onClick={()=>this.props.decrement()}
            disabled={this.props.counter<1}>Decrease</button>
            <button onClick={()=>this.props.incrementAsync()}>Increase Async.</button>
            <button onClick={()=>this.props.decrementAsync()}
            disabled={this.props.counter<1}>Decrease Async.</button>
            </div>
        );
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Counter);