import React from "react";

export const IconList = (props) => {
    const { list, className } = props;

    return (
        <ul className={(className || "fa-ul fw-light") + " ms-1 ms-sm-auto"}>
			{
				list.map((obj, id) => (
					<React.Fragment key={id}>
						<li>
							{
								obj.icons.map((icon, iconId) => (
									<span key={iconId} className="me-2">{icon}</span>
								))
							}
							{obj.listText}
						</li> 

						{
							obj.subList && 
							<ul className="fa-ul fw-light mb-2">
								{
									obj.subList.map((subObj, subId) => (
										<li key={subId}>
											{
												subObj.icons.map((subIcon, subIconId) => (
													<span key={subIconId} className="me-2">{subIcon}</span>
												))
											}
											{subObj.listText}
										</li>
									))
								}
							</ul>
						}
					</React.Fragment>
				))
			}
		</ul>
    );
}

export default IconList;