import './App.css';
import SearchBar from '../SearchBar/SearchBar.js';
import BusinessList from '../BusinessList/BusinessList.js';


const banks = [
	{
		name:'Davivienda',
		credit_type: 'credit cards',
		cutoff_date: '10/02/24',
		interest_rate_EA: '25.0%',
		interest_rate_EM: '2.5%',
		image: "https://minciencias.gov.co/sites/default/files/davivienda.jpg"
	},
	{
                name:'Daviviend',
                credit_type: 'credit cards',
                cutoff_date: '10/02/24',
                interest_rate_EA: '25.0%',
                interest_rate_EM: '2.5%',
                image: "./images/davivienda.jpeg"
        },
	{
                name:'Daviviend',
                credit_type: 'credit cards',
                cutoff_date: '10/02/24',
                interest_rate_EA: '25.0%',
                interest_rate_EM: '2.5%',
                image: "./images/davivienda.jpeg"
        },
	{
                name:'Daviviend',
                credit_type: 'credit cards',
                cutoff_date: '10/02/24',
                interest_rate_EA: '25.0%',
                interest_rate_EM: '2.5%',
                image: "./images/davivienda.jpeg"
        },
]


function App() {
  return (
    <div className="App">
       <SearchBar />
       {  
	  banks.map((bank) => (
     	  <BusinessList 
		 name={bank.name}
                 credit_type={bank.credit_type}
         	 cutoff_date={bank.cutoff_date}
       		 interest_rate_EA={bank.interest_rate_EA}
         	 interest_rate_EM={bank.interest_rate_EA}
		 image={bank.image}
		/>
          ))
	}
    </div>
  );
}

export default App;
