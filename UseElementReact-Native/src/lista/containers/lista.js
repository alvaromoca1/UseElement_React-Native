// En los container esta los ciclos de vida 
import React, {Component} from 'react'
import { Text, View,FlatList } from 'react-native'

import ViewCard from '../componets/card';

class Listscontent extends Component{
    render() {
        const list=[
            {
                title:'Harol de challito',
                descripcion:'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin li',
                img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6GKCkUiGHo9jy9y29gYWj8hHp2fawsKUmSTXOgeta1xbl9DwK',
                key:'1'
            },
            {
                title:'Restaurante rodrigo camarones',
                descripcion:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of ',
                img:'https://img.pixers.pics/pho_wat(s3:700/FO/31/98/58/43/700_FO31985843_94747c5f124fa973158731cb5b34c0f1.jpg,700,700,cms:2018/10/5bd1b6b8d04b8_220x50-watermark.png,over,480,650,jpg)/vinilos-logo-restaurante-catering.jpg.jpg',
                key:'2'
            },
            {
                title:'Restaurante angel cevicheria',
                descripcion: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour' ,
                img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSJoWWbuxec3lMUioT-lykpV6RjiRz05wOTkcgrEJQ6AauFaKE',
                key:'3'
            }
        ]
       return(
        <View>
            <FlatList
            data={list}
            renderItem={({item})=>
            <ViewCard 
                title={item.title}
                descripcion={item.descripcion}
                img={item.img}>

            </ViewCard>}>

            </FlatList>
            <Text>Soy una lista :)</Text>
        </View>
        ); 
    }
}
export default Listscontent