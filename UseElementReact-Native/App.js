import React,{Component} from 'react';
import { StyleSheet, View } from 'react-native';

import ViewLists from './src/lista/containers/lista';
import API from './utils/api.js';

export default class App extends Component {
  // creamos un estado
  state={
    // cracamos una bariable bacia
    suggestionList:[]
  } 
  async componentDidMount(){
    const movies= await API.getSuggestion(10);
    console.log(movies.movies);
    this.setState({
      suggestionList:movies.movies,
    })
  }
  render() {
    return (
      <View style={styles.container}>
        {/* creamos el container de la lista */}
          <ViewLists
          list={this.state.suggestionList}
          ></ViewLists>
      </View>
    ); 
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop:30,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
