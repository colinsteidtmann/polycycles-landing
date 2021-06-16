import React from 'react'
// custom imports
import {useCopyClipboard} from "#hooks";


export const Copy = (props) => {
	const [isCopied, setCopied] = useCopyClipboard()
	const {toCopy, children} = props;
	return (
		<span type="button" onClick={() => setCopied(toCopy)}>
			{ 
				isCopied ? (
					<>
						<i className="far fa-clipboard text-info"></i>
					</>
				) : (
					children
				)
			}
		</span>
	);
}

export default Copy;
