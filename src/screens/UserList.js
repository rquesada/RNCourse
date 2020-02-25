import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Text,
  View,
  StatusBar,
  ActivityIndicator,
  FlatList,
  Image, 
  TouchableOpacity
} from 'react-native';

import UserService from '../services/UserService';

export default class HomeScreen extends React.Component{

    constructor(props){
      super(props);
      this.state = {
          users : [],
          isLoading: false
      };
    }
  
    componentDidMount(){
        UserService.getUsers().then( (results) =>{
            console.log(results)
            if (results && results.data){
                console.log("User 1"+ (results.data).length)
                this.setState({
                    users: results.data,
                    isLoading : false
                });
            }
            
        }).catch( (err) => {
            console.log(err)
        })
      
    }

    
  // Make a request for a user with a given ID
    render(){
        if (this.state.isLoading){
            return(
                <ActivityIndicator/>
            );
        }else{
            return (
                <View >
                    <FlatList data={this.state.users}  renderItem={({ item }) =>{
                        return(
                            <TouchableOpacity onPress={() => {
                                this.props.navigation.navigate('Settings',{
                                    user: item
                                });
                            }}>
                                <View style={styles.itemContainer}>
                                    <Image style={styles.itemImage} source={{uri:'https://reactnative.dev/img/tiny_logo.png'}}/>
                                <View style={{flexDirection: 'column'}}>
                                    <Text style={styles.itemTitle}>{item.name}</Text>
                                    <Text style={styles.itemTitle, {fontSize: 13}}>Toca para mas detalles</Text>
                                </View>
                                </View>
                                </TouchableOpacity>
                            )
                        }
                    }keyExtractor={item => item.id.toString()} />
              </View>
              );
        }
    }
  }

var styles = StyleSheet.create({
    itemContainer: {
        flexDirection: 'row',
        marginBottom: 30,
        padding: 10
    },
    itemTitle: {
        fontSize: 20,
        color: 'gray',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'left',
        marginLeft: 10
    },
    itemImage:{
        width: 50,
        height: 50,
        borderRadius: 25
    }
});