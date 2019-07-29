// En los container esta los ciclos de vida 
import React, {Component} from 'react'
import { Text, View,FlatList } from 'react-native'

import ViewCard from '../componets/card';

class Listscontent extends Component{
    keyExtractor = item => item.id.toString()
    renderItem = ({item}) => {
        return (
          <ViewCard  {...item}/>
        )
      }
    render() {
        
       return(
        <View>
            <FlatList
            keyExtractor={this.keyExtractor}
            data={this.props.list}
            renderItem={this.renderItem}

            />
        </View>
        ); 
    }
}
export default Listscontent 