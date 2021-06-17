import React from 'react'
// custom imports
import { useCopyClipboard } from "#hooks";


export const Copy = (props) => {
    const [isCopied, setCopied] = useCopyClipboard()
    const { toCopy, children } = props;
    return (
        <span onClick={() => setCopied(toCopy)}>
			{ 
				isCopied ? (
					<React.Fragment>
						<i className="far fa-clipboard text-info"></i>
					</React.Fragment>
				) : (
					children
				)
			}
		</span>
    );
}

export default Copy;