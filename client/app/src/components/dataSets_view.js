import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchDataSets } from '../actions/index';
import { Link } from 'react-router';

class DataSetsView extends Component {
	componentWillMount(){
		this.props.fetchDataSets();
	}

	renderList(){
		return this.props.dataSets.map((dataSet) => {
			return (
				<li className="list-group-item" key={dataSet.id}>
                    <span className="pull-xs-right">{dataSet.name}</span>
                    <strong>{dataSet.owner}</strong>
				</li>
			);
		});
	}

	render() {
		return (
			<div>
				<div className="text-xs-right">
					<Link to="/login" className="btn btn-primary">
						Login
					</Link>
				</div>
				<h3>Posts</h3>
				<ul className="list-group">
					{this.renderList()}
				</ul>
			</div>
		);
	}
}

function mapStateToProps(state) {
    //this is from reducer
	//ALSO sets it to this.props for up above functions
	return { dataSets: state.dataSets.all };
}
//{ fetchPosts: fetchPosts } is the same as the function below that is commented out
//NOTE - { fetchPosts } == { fetchPosts: fetchPosts }
export default connect(mapStateToProps, { fetchDataSets }) (DataSetsView);

