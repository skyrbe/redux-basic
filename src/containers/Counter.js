import React,{Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { increment, decrement, add, subtract, storeResult, deleteFromServer, getAllResults } from '../actions';
class Counter extends Component {
    componentDidMount() {
      this.props.getAllResults();
    };

    render() {
        return (
            <div>
              <div>
                <input type = "button" value = "Increment" onClick = {this.props.increment}/>
                <input type = "button" value = "Decrement" onClick = {this.props.decrement}/>
                <input type = "button" value = "Add" onClick = {() => {this.props.add(15)}}/>
                <input type = "button" value = "Subtract" onClick = {() => {this.props.subtract(10)}}/>
              </div>
              <hr />
              <h1>Current Count {this.props.counter}</h1>
              <hr />
              <div>
                <input type = "button" value = "Save Result" onClick = {()=>this.props.storeResult(this.props.counter)}/>
                {this.props.isLoading && <div>Loading</div>}
                {!this.props.isLoading && this.props.results.length === 0 && <div>Nothing to show</div>}
                {this.props.results.length > 0 && <ul>
                  {this.props.results.map((result) => {
                    return (
                      <li
                        key = {result.id}
                        onClick = {()=>{this.props.deleteFromServer(result.id)}}>
                          {result.counter}
                      </li>
                    )
                  })}
                </ul>}
              </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
  return {
    counter : state.cnt.counter,
    results : state.res.results,
    isLoading : state.res.loading
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    increment,
    decrement,
    add,
    subtract,
    storeResult,
    deleteFromServer,
    getAllResults
  },dispatch)
}



export default connect(mapStateToProps,mapDispatchToProps)(Counter);
