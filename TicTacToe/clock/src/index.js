import React from "react";
import ReactDOM from "react-dom";
import "./toggle.js";
import Toggle from "./toggle.js";
import LoginControl from "./loginControl.js";
import Mailbox from "./mailbox.js";
import Page from "./page.js";
import NumberList from "./numberList.js";

const messages = ["React", "Re:React", "Re:Re:React"];
const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((numbers, index) => (
  <li key={index}>{numbers}</li>
));

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      counter: 1
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
    // this.setState({
    //   counter: this.state.counter + this.props.increment
    // });

    this.setState((state, props) => ({
      counter: state.counter + props.increment
    }));
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h1>{this.state.counter}</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        <Toggle></Toggle>
        <LoginControl />
        <Mailbox unreadMessages={messages} />
        <Page />
        <ul>{listItems}</ul>
        <NumberList numbers={numbers} />
      </div>
    );
  }
}

ReactDOM.render(<Clock increment={1} />, document.getElementById("root"));