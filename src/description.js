import React, {Component} from 'react';

class Description extends Component{
    constructor(props){
    super()
    this.state = {
        image: "",
        toshow: false,
    }
    }

    componentDidUpdate(prevProps,prevState){
       /*
    console.log("Previous State: ", prevState.toshow)   
    console.log("Current State: ", this.state.toshow)    

if(prevState. !== this.state.toshow){
    this.setState({
        toshow:false
    })
}*/    
}
    

    call(){
        if(!this.state.toshow){
        console.log(this.props.pokemon_name)
        fetch(this.props.pokemon_url)
        .then(res => res.json())
        .then((data) => {
        console.log(data)
       this.setState({
    image: data.sprites.front_default,
    toshow: true,


       })
   })
    }else{
     this.setState({
         toshow:false
     })
    }
    }

render(){
console.log(this.props)
if(!this.state.toshow){
    return(


        <li onClick = {this.call.bind(this)}> {this.props.pokemon_name} <br/>
        {this.props.pokemon_url}
        </li>
        )
}
return(


    <li onClick = {this.call.bind(this)}> <img src = {this.state.image}/> 
    
    </li>
    )

}



} 

export default Description