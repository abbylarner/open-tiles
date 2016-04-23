import React from 'react';
import TilePreview from '../sub-components/TilePreview';


export default React.createClass({
	render: function() {
		return (
			<section className="page-home">
				<div className="search-results">
					<TilePreview />
				</div>
			</section>
		);
	}
});