import React from "react";
import styles from "./BusinessList.module.css";

import Business from "../Business/Business";

function BusinessList (props) {
  return (
    <div className={styles.BusinessList}>
      <Business 
	  name={props.name}
          credit_type={props.credit_type}
	  cutoff_date={props.cutoff_date}
	  interest_rate_EA={props.interest_rate_EA}
          interest_rate_EM={props.interest_rate_EM}
	  image={props.image}
	  />
    </div>
  );
};

export default BusinessList;
