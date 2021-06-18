import React from "react";
import {
    EmailShareButton,
    FacebookShareButton,
    LinkedinShareButton,
    RedditShareButton,
    TwitterShareButton,
} from "react-share";
import {ReactShareText} from "#constants";
import Copy from "./Copy";




export const Share = () => {

    return (
        <div className="row">
			<div className="col d-flex-inline fa-2x">
				<FacebookShareButton 
					url={ReactShareText.shareUrl}
					quote={ReactShareText.facebook.quote.replace(/\s+/g, ' ')}
					hashtag={ReactShareText.facebook.hashtag}
				>
					<i className="fab fa-facebook-square text-primary  mx-1"></i>
				</FacebookShareButton>

				<TwitterShareButton 
					url={ReactShareText.shareUrl.concat("\n\n")}
					title={ReactShareText.twitter.title.replace(/\s+/g, ' ').concat("\n\n")}
					via={ReactShareText.twitter.via}
					hashtags={ReactShareText.twitter.hashtags}
					
				>
					<i className="fab fa-twitter-square text-info mx-1"></i>
				</TwitterShareButton>

				<RedditShareButton 
					url={ReactShareText.shareUrl}
					title={ReactShareText.reddit.title}
				>
					<i className="fab fa-reddit-square text-danger mx-1"></i>
				</RedditShareButton>

				<EmailShareButton 
					url={ReactShareText.shareUrl}
					subject={ReactShareText.email.subject}
					body={ReactShareText.email.body.replace(/\s+/g, ' ').concat("\n\n")}
					seperator={ReactShareText.email.seperator}
				>
					<i className="fas fa-envelope text-secondary mx-1"></i>
				</EmailShareButton>

				<LinkedinShareButton 
					url={ReactShareText.shareUrl}
					title={ReactShareText.linkedIn.title}
					summary={ReactShareText.linkedIn.summary.replace(/\s+/g, ' ')}
					source={ReactShareText.linkedIn.source}
				>
					<i className="fab fa-linkedin text-primary mx-1"></i>
				</LinkedinShareButton>

				<Copy toCopy={ReactShareText.shareUrl}>
					<i className="fas fa-link text-success mx-1"></i>
				</Copy>
			</div>



		</div>
    );
}

export default Share;