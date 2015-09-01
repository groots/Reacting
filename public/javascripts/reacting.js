
var Button = React.createClass({
	localHandleClick: function(){
		this.props.localHandleClick(this.props.increment);
	},
	render:function(){
		return (
			<button onClick={this.localHandleClick}>+ {this.props.increment}</button>
		)
	}
})

var CounterDisplay = React.createClass({
	render: function(){
		return(
			<div>{this.props.localCounter}</div>
		)
	}
})


var DisplayStuff = React.createClass({
	getInitialState: function(){
		return {counter:0};
	},
	handleClick: function(increment){
		this.setState({ counter: this.state.counter + increment });
	},
	render: function(){
		return(
			<div>
				<Button localHandleClick={this.handleClick} increment={1} />
				<Button localHandleClick={this.handleClick} increment={5} />
				<Button localHandleClick={this.handleClick} increment={10} />
				<Button localHandleClick={this.handleClick} increment={20} />
				<CounterDisplay localCounter={this.state.counter} />
			</div>
		)
	}
})

React.render(<DisplayStuff />, document.getElementById("root"));