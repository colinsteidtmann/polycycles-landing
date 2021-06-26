import React from "react";
import {
    EmailShareButton,
    FacebookShareButton,
    LinkedinShareButton,
    RedditShareButton,
    TwitterShareButton,
} from "react-share";
import {ShareText} from "#constants/share";
import Copy from "./Copy";




export const ShareButtons = (props) => {
	const {color} = props;
    return (
        <div className="row">
			<div className="col d-flex-inline fa-2x">
				<FacebookShareButton 
					url={ShareText.shareUrl}
					quote={ShareText.facebook.quote.replace(/\s+/g, ' ')}
					hashtag={ShareText.facebook.hashtag}
				>
					<i className={"fab fa-facebook-square mx-1 " + (color || "text-dark")}></i>
				</FacebookShareButton>

				<TwitterShareButton 
					url={ShareText.shareUrl.concat("\n\n")}
					title={ShareText.twitter.title.replace(/\s+/g, ' ').concat("\n\n")}
					via={ShareText.twitter.via}
					hashtags={ShareText.twitter.hashtags}
					
				>
					<i className={"fab fa-twitter-square mx-1 " + (color || "text-secondary")}></i>
				</TwitterShareButton>

				<RedditShareButton 
					url={ShareText.shareUrl}
					title={ShareText.reddit.title}
				>
					<i className={"fab fa-reddit-square mx-1 "  + (color || "text-dark ")}></i>
				</RedditShareButton>

				<EmailShareButton 
					url={ShareText.shareUrl}
					subject={ShareText.email.subject}
					body={ShareText.email.body.replace(/\s+/g, ' ').concat("\n\n")}
					seperator={ShareText.email.seperator}
				>
					<i className={"fas fa-envelope mx-1 " + (color || "text-secondary")}></i>
				</EmailShareButton>

				<LinkedinShareButton 
					url={ShareText.shareUrl}
					title={ShareText.linkedIn.title}
					summary={ShareText.linkedIn.summary.replace(/\s+/g, ' ')}
					source={ShareText.linkedIn.source}
				>
					<i className={"fab fa-linkedin mx-1 " + color || "text-dark"}></i>
				</LinkedinShareButton>

				<Copy toCopy={ShareText.shareUrl}>
					<i className={"fas fa-link mx-1 " + color || "text-secondary"}></i>
				</Copy>
			</div>



		</div>
    );
}

export default ShareButtons;