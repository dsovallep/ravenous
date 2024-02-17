import React from "react";
import styles from "./Business.module.css"


function Business(props) {
    return (
    	<div className={styles.Business}>
	    
	    <div className={styles.imageContainer}>
        	 <img src={props.image} alt='logo_image'/>
	    </div>
            
	    <h2>{props.name}</h2>

	    <div className={styles.BusinessInformation}>
 		<p>credit_type: {props.credit_type}</p>
	    	<p>cutoff_date: {props.cutoff_date}</p>
	    	<p>interest_rate_EA: {props.interest_rate_EA}</p>
	    	<p>interest_rate_EM: {props.interest_rate_EM}</p>
	    </div>
	</div>  
    );
};

export default Business;
