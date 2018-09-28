export const installCra = `
npm install -g create-react-app

create-react-app "nama_folder"

# atau

npx create-react-app "nama_folder"
`

export const helloWorldComponent = `
ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('root')
);
`

export const jsxExample = `
const element = (
  <h1 className="greeting">
    Hello, world!
  </h1>
);
`

export const withoutJsxExample = `
const element = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, world!'
);
`

export const functionalComponent = `
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
`

export const classComponent = `
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
`

export const renderingAComponent = `
const element = <Welcome name="Sara" />;
ReactDOM.render(
  element,
  document.getElementById('root')
);
`

export const componentWithState = `
class Counter extends React.Component {
  state = {
    counter: 0
  };

  render() {
    return (
      <div>
        Counter : {this.state.counter}
      </div>
    )
  }
}
`

export const counterComponent = `
class Counter extends React.Component {
  state = {
    counter: 0
  };

  handleCountUp = e => {
    e.preventDefault();
    this.setState({counter: this.state.counter + 1});
  }

  handleCountDown = e => {
    e.preventDefault();
    this.setState({counter: this.state.counter - 1});
  }

  render() {
    return (
      <div>
        Counter : {this.state.counter}
        <a onClick={this.handleCountUp}>+</a>
        <a onClick={this.handleCountDown}>-</a>
      </div>
    )
  }
}
`
