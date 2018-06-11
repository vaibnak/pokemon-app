import React, { Component } from 'react';
import Description from './description';
import './App.css';

function Show(props){
 let counter = 0;
 return(
<ul>
{
props.list.map((name,i) => (
//<li key = {counter++} >{name.pokemon.name} <br/> URL :{name.pokemon.url} </li>
counter = counter + 1,
<Description key = {counter} pokemon_name = {name.pokemon.name} pokemon_url = {name.pokemon.url}/>

)

)
}
</ul>
);
}


class App extends Component {
  
  constructor(props){
  super(props)
   this.state = {
    list_pok: [
 {pokemon: {name: "vaibhav" }

},
{pokemon: {name: "vinayak" }

},
{pokemon: {name: "manju" }

}

    ],
    option_selected: "1"
   }
   this.selected = this.selected.bind(this)
   this.listing = this.listing.bind(this)
  }
   
  componentDidMount(){

    /*fetch("https://pokeapi.co/api/v2/type/2/")
  
   .then((res)=> res.json())
    .then((data)=>{
     console.log("DATA :", data.pokemon)
     this.setState(
          {list_pok: data.pokemon}
     )
   })
  */
  }
   selected(e){
   e.preventDefault();
    this.setState({
     option_selected: e.target.value,
     })
     
      
    const type = this.state.option_selected
     fetch(`https://pokeapi.co/api/v2/type/${type}/`)
     .then((res)=> res.json())
     .then((data)=>{
     
     this.setState(
          {list_pok: data.pokemon}
     )
   })
    }

    listing(){
    
     if(this.state.list_pok.length > 0){ 
    return this.list_pok.map((name,i) =>{ 
       
      return <li key = {i}>{name.pokemon.name}</li>
       
     }
    )
  
  }

  return <div>Loading</div>
    }
  
  render() {
    
    return (
      <div className = "App">
       <h1>The Pokemon Fan club</h1>
       <form>
         <label>Pokemon Type : </label>
           <select onChange = {this.selected}>
             <option value = '1'>Default</option>
             <option value = '2'>Normal</option>
             <option value = '3'>Air</option>
             <option value = '4'>Water</option>
            
           </select>
           {console.log("from render method type: ", this.state.option_selected)}
           {console.log("from render method pol_list: ",this.state.list_pok)}
        </form>
        
          <Show list = {this.state.list_pok} />
        {/*{this.listing()}*/} 
        <Description/>
      </div>
    );
}

}

export default App;
