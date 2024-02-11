import React from 'react'
import styles from './SearchBar.module.css';

function SearchBar() {
    return(
	<div className={styles.SearchBar}>	    
		<div className={styles.SearchBarFields} >
	   		<input placeholder="Banco"/>
	    		<input placeholder="Tipo de Credito"/>
		</div>
	      	<div className={styles.SearchBarSubmit}>
       			<a>Let's Go</a>
      		</div>
	</div>
    );
};

export default SearchBar;
