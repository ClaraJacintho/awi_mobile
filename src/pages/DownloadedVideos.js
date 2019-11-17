import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default class CoursePage extends React.Component {
    
    render() {
        const data = {characters: [
            {id:123, name:'Sheldon', profession:'Theoretical Physicist', image="..\assets\youtube.jpg" },
            {id:234, name:'Leonard', profession:'Experimental Physicist', image="..\assets\youtube.jpg"  },
            {id:345, name:'Howard', profession:'Mechanical Engineer', image="..\assets\youtube.jpg" },
            {id:456, name:'Raj', profession:'Astro-Physicist', image="..\assets\youtube.jpg" },
            {id:567, name:'Amy', profession:'Neurobiologist', image="..\assets\youtube.jpg" },
            {id:678, name:'Bernadette', profession:'Microbiologist', image="..\assets\youtube.jpg" },
        ]};
        const list = [{key:'Sheldon', prof:'Theoretical Physicist'},
                     {key:'Leonard', prof:'Experimental Physicist'},
                     {key:'Howard', prof:'Mechanical Engineer'},
                     {key:'Raj', prof:'Astro-Physicist'},
                     {key:'Amy', prof:'Neurobiologist'},
                     {key:'Bernadette', prof:'Microbiologist'},
                     {key:'Penny', prof:'Actress'},
                     {key:'Dr. Gabelhauser', prof:'Dean'},
                     {key:'Stuart', prof:'comic store owner'},
                     {key:'Barry', prof:'Engineer'},
                     {key:'Leslie', prof:'Physicist'},
                     {key:'Priya', prof:'Lawyer'},
                     {key:'Lucy', prof:'unknown'}];
        return (
            <View style={styles.container}>
            { data.characters.length > 0 ? 
                <FlatList data={data.characters}
                    renderItem={({item})=> (
                <View style={{borderBottomColor:'#999', padding:10}}>
            <Text style={{fontSize:60, fontWeight:'bold', color:'#333'}}>
                {item.id}
            </Text>
            <Text style={{fontSize:36, color:'#999'}}>
                {item.profession}
            </Text>
        </View>
                    
            )} />
            :
                <Text style={{fontSize: 48, color:'red'}}>
                    Sorry. No Videos Available.
                </Text>
            }
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
      backgroundColor: '#fff',
      paddingTop: 20,
      paddingBottom: 20
  },
    listitem: {
        fontSize:48, 
        fontWeight:'bold', 
        color:'#333',
        borderBottomWidth: 2,
        borderBottomColor: '#999'
    }
});