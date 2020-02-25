import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
  Text,
  Image,
  ActivityIndicator
} from 'react-native';


export default class SettingsScreen extends React.Component{ 

    constructor(props){
        super(props);
        this.state = {
          user: null
        };
    }

    componentDidMount(){
      //console.log(this.props.route.params.user);
      this.setState({
        user: this.props.route.params.user
      })
    }

    render(){

      if (this.state.user == null){
        return(
          <ActivityIndicator />
        );
      }else{
        return (
          <View style={styles.container}>
            <Image 
            style={styles.itemImage} source={{uri:'https://reactnative.dev/img/tiny_logo.png'}}>
            </Image>
            <Text style={styles.itemText}> {this.state.user.name}</Text>
            <Text style={styles.itemText}> {this.state.user.email}</Text>
          </View>
        );
      }
    }
  }

  var styles = StyleSheet.create({
    container: {
      flex:1,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column'
    },
    itemImage: {
      width: 70,
      height: 70,
      borderRadius: 15
    },
    itemText:{
      fontSize: 14,
      textAlign: 'center'
    }
  })