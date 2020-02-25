import React from 'react';
import {
    Text,
    ActivityIndicator,
    View,
    TouchableOpacity
} from 'react-native';

export default class TestComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            numero: 1
        };

        this.onTouch = this.onTouch.bind(this);
    }

    //Componente se va a montar
    componentWillMount(){
        console.log("componentWillMount");
    }

    //Componente ya esta montado
    componentDidMount(){
        console.log("componentDidMount");
    }

    //Componente se va a desmontar
    componentWillUnmount(){
        console.log("componentWillUnmount");
    }

    onTouch(){
        this.setState({
            numero: (this.state.numero +1)
        })
    }

    alerta(){
        alert("Alerta!!");
    }

    render(){
        console.log("pase por el render")
        return(
            <TouchableOpacity onPress={this.onTouch}>
                <Text>Mi nombre es {this.props.text} y numero es {this.state.numero}</Text>
            </TouchableOpacity>
        );
    }
}