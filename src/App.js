import React from 'react';
import './App.css';
import Counter from './components/Counter'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      visible: true,
      index: 0
    }
  }
  visibleOnClick = () => {
    this.setState({ visible: !this.state.visible })
  }
  changeColor = () => {
    this.setState({ index: (this.state.index + 1) % 3 })
  }

  render() {
    const visible = this.state.visible;
    const index = this.state.index;
    const colors = ['red', 'green', 'yellow']
    return (
      <>
        <div className="App">
          <br />
          <button onClick={this.visibleOnClick} style={{ height: "100px", width: "500px", fontSize: "45px" }}>
            Status:  {visible ? "Show" : "Hide"}
          </button>
          <br /><br />
          {visible ?
            <div style={{ fontSize: "24px", color: 'blue' }}>
              This is Content For Codecamp#5 Student
          </div> : null}
          <br /><br />
          <button onClick={this.changeColor} style={{ height: "50px", width: "50px", fontSize: "16px" }}>Click</button>  <br /><br />
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ border: '1px solid', width: " 100px", height: "100px", textAlign: 'center', borderRadius: "50%", background: colors[index] }}></div> :
            </div>
          <Counter />

        </div>
      </>
    );
  }
}
export default App;