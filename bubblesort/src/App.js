import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    input: '',
    arr: [],
    err: false,
    sortedArr: [],
    intermediatearr: []
  }

  bublearr = [];

  populateArray = this.populateArray.bind(this);
  sort = this.sort.bind(this);
  clear = this.clear.bind(this);

  populateArray(e) {
    let input = e.target.value;
    this.setState({
      arr: input.split(','),
      input: e.target.value
    });
  }


  displayError() {
    if (this.state.error) {
      return (
        <div className="error">Mutliple numbers with , separation</div>)
    }
    return;
  }

  sort() {
    let bubbleArray = [];
    let iterationArray = [];
    let arr = this.state.arr.map((item) => Number(item));
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = 0; j < arr.length - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
        bubbleArray.push(arr.slice(0, arr.length));
      }
      iterationArray.push(bubbleArray.slice(0, bubbleArray.length));
      bubbleArray = [];
    }
    this.setState({
      intermediatearr: iterationArray,
      sortedArr: arr
    })

  }

  clear() {
    this.setState({
      input: '',
      arr: [],
      err: false,
      sortedArr: [],
      intermediatearr: []
    });
  }

  render() {
    return (
      <div className="content">
        <div >
          <input type="text" value={this.state.input} onChange={this.populateArray} />
          <button onClick={this.sort}>SORT</button>
          <button onClick={this.clear}>CLEAR</button>
          {this.displayError()}

        </div>
        <BubbleSteps data={this.state.intermediatearr} />
      </div>
    )
  }
}

class BubbleSteps extends Component {

  redenderComponent(arr) {
    return arr.map((iterations) => {
      return <div className="iterations" >{iterations.map((iteration) => {
        return <div className="iteration"> {(iteration.map((item) => {

          return <div className="array-item" key={item.toString()}>
            {item}
          </div>
        }))}</div>
      })}</div>
    })
  }
  render() {
    return (
      <div>{
        this.redenderComponent(this.props.data)
      }

      </div>
    )
  }

}


export default App;

