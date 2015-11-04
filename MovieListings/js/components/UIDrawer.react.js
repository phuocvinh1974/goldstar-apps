var React = require('react');
var ReactDOM = require('react-dom');
var UIActions = require('../actions/UIActions');

var UIDrawer = React.createClass({

	componentDidMount: function () {
		this.state.rect = ReactDOM.findDOMNode(this).getBoundingClientRect();
	},

	componentWillReceiveProps: function(nP) {
		if (nP.comm.mouseContext.x < this.state.rect.left || nP.comm.mouseContext.x > this.state.rect.right)
		{
			UIActions.hideDrawer ();
		}
	},

	getInitialState: function () {
		return { rect: null };
	},

	render: function () {

		var baseStyle = { position:'absolute', left:0, top:0, width:280, height:'100%' };

		return ( 
			<div className="navigation-drawer" style={baseStyle}>
				<div>
					<div style={{marginLeft:16,paddingTop:40}}>
						<div style={{width:64,height:64,borderRadius:'50%',backgroundColor:'#BDBDBD',backgroundImage:this.props.comm.avatarUrl,backgroundSize:'68px 68px',backgroundPosition:'center'}}></div>
					</div>
					<div style={{marginLeft:16,marginTop:8,fontWeight:'bold',color:'#FFF'}}>nhhnguyen</div>
					<div style={{marginLeft:16,paddingBottom:24,color:'#FFF'}}>Nguyen Huu Hanh Nguyen</div>
				</div>
				<div>
					<div onClick={this._movieSchedulerClick}>MOVIE SCHEDULER</div>
					<div>MEMBER ZONE</div>
				</div>
			</div>
		);
	},

	_movieSchedulerClick: function () {
		console.log ('menu scheduler duoc lick')
	}
});

module.exports = UIDrawer;