import React from "react";
import styles from "./Business.module.css"
import image from "./images/davivienda.jpeg"


const attributs = {
        image: image,
	name:'Davivienda',
	tipo_credito:'tarjetas de credito',
        fecha_corte:'10/02/24',
	tasa_interes_EA:'35.0%',
	tase_interes_EM:'2.5%',
};

function Business() {
    return (
    	<div className={styles.Business}>
	    
	    <div className={styles.imageContainer}>
        	 <img src={attributs.image} alt='logo_image'/>
	    </div>
            
	    <h2>{attributs.name}</h2>

	    <div className={styles.BusinessInformation}>
 		<p>tipo_credito: {attributs.tipo_credito}</p>
	    	<p>fecha_corte: {attributs.fecha_corte}</p>
	    	<p>tasa_interes_EA: {attributs.tasa_interes_EA}</p>
	    	<p>tase_interes_EM: {attributs.tase_interes_EM}</p>
	    </div>
	</div>  
    );
};

export default Business;
