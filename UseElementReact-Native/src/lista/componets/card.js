// En los componentes solo existe UI
// import React from 'react';
import React, {Component} from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'
class CardView extends Component{
    render() {
       return(
        <View style={styles.cont}>
            <Image
                style={{width: 70, height: 70}}
                source={{uri: this.props.img}}
            />
            <View style={styles.text}>
                <Text style={styles.title}>{this.props.title}</Text>
                <Text>{this.props.descripcion}</Text>
            </View>
        </View> 
       );
    }
}
const styles = StyleSheet.create({
    cont: {
      flexDirection:'row'
    },
    text:{
        marginVertical:10,
        marginHorizontal:'20%'
    },
    title:{
        fontSize:20,
        fontWeight:'bold'
    }
  });
export default CardView;