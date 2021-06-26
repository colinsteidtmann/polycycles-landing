import React from "react";
import {FontIcons} from "#constants/icons";

export const GoogleForm = (props) => {
	const {iframeUrl, webUrl, title} = props;
	return (
		<React.Fragment>
			<div class="row justify-content-center">
			    <div class="col-12 col-sm-10 ">
	            	<div className="card p-3 w-100 bg-secondary d-lg-none">
	            		<p>
	            			{title}
	            		</p>
	            		<a href={webUrl} target="_blank" rel="noreferrer" className="btn btn-dark mx-auto">Open in new window</a>
	            	</div>

	            	<div className="ratio ratio-21x9 d-block" style={{"minHeight":"100vh"}}>
	    				<iframe 
	    					src={iframeUrl} 
	    					title={title}
	    				>
	    					Loading…
	    				</iframe>
	    			</div>
	    			
	    				<a href={webUrl} target="_blank" rel="noreferrer" className="text-dark float-end my-3 d-none d-lg-block">
	    					Open form in new tab {FontIcons.externalLink}
	    				</a>
			    </div>
			</div>
		</React.Fragment>
	);
}

export default GoogleForm;