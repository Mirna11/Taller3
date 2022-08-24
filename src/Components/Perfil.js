import React from 'react';

export default class Perfil extends React.Component{

    constructor (props){
        super(props);
        this.state = {nombre:"Mirna Elizabeth Espinoza Anzora"}
    }
        
    render(){
        return(
            <div>
            <h1>{this.state.nombre}</h1>
            </div>
        )
    }
    
}