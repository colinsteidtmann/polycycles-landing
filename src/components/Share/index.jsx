import React from "react";
import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  RedditShareButton,
  TwitterShareButton,
} from "react-share";
import Copy from "./Copy";

const shareUrl="https://www.npmjs.com/package/react-share";
export const Share = () => {

	return (
		<div class="row">
			<div class="col d-flex-inline fa-2x">
				<FacebookShareButton 
					url={shareUrl}
				>
					<i class="fab fa-facebook-square text-primary  mx-1"></i>
				</FacebookShareButton>

				<TwitterShareButton 
					url={shareUrl}
				>
					<i class="fab fa-twitter-square text-info mx-1"></i>
				</TwitterShareButton>

				<RedditShareButton 
					url={shareUrl}
				>
					<i class="fab fa-reddit-square text-danger mx-1"></i>
				</RedditShareButton>

				<EmailShareButton 
					url={shareUrl}
					subject="hi"
					body="yo"
				>
					<i class="fas fa-envelope text-secondary mx-1"></i>
				</EmailShareButton>

				<LinkedinShareButton 
					url={shareUrl}
				>
					<i class="fab fa-linkedin text-primary mx-1"></i>
				</LinkedinShareButton>

				<Copy toCopy={shareUrl}>
					<i class="fas fa-link text-success mx-1"></i>
				</Copy>
			</div>



		</div>
	);
}

export default Share;