import React, {Component} from 'react';
import {View, Text, Button, Image, Dimensions, StyleSheet} from 'react-native';
import {Header, Card} from '../common'
const  wid = Dimensions.get('window').width
const  hei = Dimensions.get('window').height
class Detail extends Component {
    
    render() {
        return(
            <View style={styles.container} >
              
               <Image 
          resizeMode= 'contain'
          style = {{ flex: 3,height: 300, width: 350, marginVertical: 10}}
          source= {{uri:this.props.navigation.state.params.uri}}/>
               <View style = {styles.containerStyle}>
               <Text style = {styles.textStyle}>Name: {this.props.navigation.state.params.title}</Text>
               <Text style = {styles.textStyle}>Description: {this.props.navigation.state.params.des}</Text>
               <Text style = {styles.textStyle}>Author: {this.props.navigation.state.params.auth}</Text>
               <Button
               color=  'blue'
                title = {'Back'}
                onPress = {()=> {this.props.navigation.goBack()}}/>
                 </View>
              
             
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
      height: hei,
      width: wid,
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: 30,
      flex: 3
    },
    
      containerStyle:{
      flex: 1
      },
      textStyle: {
        fontWeight: 'normal',
        fontSize: 20,
       
      }
  
  });
export default Detail;
