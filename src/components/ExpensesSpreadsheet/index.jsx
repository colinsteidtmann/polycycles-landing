import React from "react";
import { FontIcons } from "#constants";

export const ExpensesSpreadsheet = () => {
    return (
        <div className="row mx-0">
			<div className="ratio ratio-1x1" style={{"height":"20vh"}}>
			  <iframe 
			  	src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSc9MVPMC0K2xIIZaZgPc3jMuRlullCKOazLX9-3ZwCp7UGQ-pxShWO5aa3QgQxPCzEqShqlHy0-T-p/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false" 
			  	title="PolyCycles Expenses Spreadsheet">
			  	Loading…
			  </iframe>
			</div>
			<a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vSc9MVPMC0K2xIIZaZgPc3jMuRlullCKOazLX9-3ZwCp7UGQ-pxShWO5aa3QgQxPCzEqShqlHy0-T-p/pubhtml?gid=0&single=true"
			   target="_blank"
			   className="text-primary ps-0"
			>
				View online
			</a>
		</div>

    );
}

export default ExpensesSpreadsheet;