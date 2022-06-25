import './App.css';
import {Component} from "react";

class App extends Component {
	constructor(props) {
		super();
		this.title = props.title;
		this.message = props.message;
	}

	render() {
		return (
			<div>
				<h1>{this.title}</h1>
				<p>{this.message}</p>
				<Rect x={'50'} y={'50'} w={'150'} h={'150'} c={'cyan'}></Rect>
				<Rect x={'150'} y={'100'} w={'150'} h={'150'} c={'magenta'}></Rect>
				<Rect x={'100'} y={'150'} w={'150'} h={'150'} c={'black'}></Rect>
				<Rect x={'200'} y={'200'} w={'150'} h={'150'} c={'yellow'}></Rect>
			</div>
		);
	}
}

export default App;

class Rect extends Component {
	x = 0;
	y = 0;
	width = 0;
	height = 0;
	color = 'white';
	style = {};

	constructor(props) {
		super(props);
		this.x = props.x;
		this.y = props.y;
		this.width = props.w;
		this.height = props.h;
		this.color = props.c;
		this.style = {
			backgroundColor: this.color,
			position: 'absolute',
			left: this.x + 'px',
			top: this.y + 'px',
			width: this.width + 'px',
			height: this.height + 'px'
		}
	}

	render() {
		return (
			<div style={this.style}></div>
		);
	}
}
