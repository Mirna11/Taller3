import React from 'react';

export default class Carrera extends React.Component{

    constructor (props){
        super(props);
        this.state = {carrera:"Ing.En ciencias de la computación"}
    }
        
    render(){
        return(
            <div>
            <h2>{this.state.carrera}</h2>
            </div>
        )
    }
    
}