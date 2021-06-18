import React from "react";

export const PageBanner = (props) => {
    const { text, bgImg, cols } = props;
    return (
        <div className={`row mx-auto gx-0 py-5 ${bgImg} ${cols}`} style={{"minHeight": "45vh"}}>
			<h1 className=" fw-normal text-center text-light align-self-center">
				{text}
			</h1>
		</div>
    );
}

export default PageBanner;