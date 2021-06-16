import React from "react";

export const IconList = (props) => {
	const {list, className} = props;

	return (
		<ul class={className || "fa-ul fw-light"}>
			{
				list.map((obj, id) => (
					<>
						<li id={id}>
							{
								obj.icons.map((icon, iconId) => (
									<span class="me-2" id={iconId}>{icon}</span>
								))
							}
							{obj.listText}
						</li> 

						{
							obj.subList && 
							<ul class="fa-ul fw-light mb-2">
								{
									obj.subList.map((subObj, subId) => (
										<li id={subId}>
											{
												subObj.icons.map((subIcon, subIconId) => (
													<span class="me-2" id={subIconId}>{subIcon}</span>
												))
											}
											{subObj.listText}
										</li>
									))
								}
							</ul>
						}
					</>
				))
			}
		</ul>
	);
}

export default IconList;