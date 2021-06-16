import React from "react";

export const PageBanner = (props) => {
	const {text, bgImg, cols} = props;
	return (
		<div class={`row mx-auto gx-0 py-5 mb-5 ${bgImg} ${cols}`} style={{"min-height": "45vh"}}>
			<h1 class=" fw-normal text-center text-light align-self-center">
				{text}
			</h1>
		</div>
	);
}

export default PageBanner;