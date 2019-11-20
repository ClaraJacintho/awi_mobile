import React from 'react';
import {Image, View, Button, Linking, Platform, StyleSheet} from 'react-native';
import {colors, fonts, padding, dimensions} from './../styles/base.js';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHome} from '@fortawesome/free-solid-svg-icons'
import { ScrollView } from 'react-native-gesture-handler';

export default class Settings extends React.Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this)
    }

    logout(){
        const {navigate} = this.props.navigation;
        this.props.onLogout()
        navigate("Auth")
    }

    render(){
        
        return(
            <ScrollView contentContainerStyle={styles.container}>
                <Button onPress={() => this.logout() } title="Sign Out" color={colors.purple}/>
            </ScrollView>
            
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.background,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: dimensions.fullWidth,
    },
  });
  