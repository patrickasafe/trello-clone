import React from 'react'

interface CounterState {
  count: number;
};
export class Counter extends React.Component<{}, CounterState> {
  state: CounterState = {
    count: 0,
  };
  private increment = () => {
    // ...
  };
  private decrement = () => {
    // ...
  };
  render() {
    return (
      <>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
      </>
    );
  }
}

// class SimpleComponent extends React.Component<{}, { count: number }> {
//   render(){
//   return null
//   }
// }