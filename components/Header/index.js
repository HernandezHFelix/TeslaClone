import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import style from './style';

const Header = ()=>{
    return(
        <View style={style.container}>
            <Image style={style.logo} source={require('../../assets/logo.png')} />
            <Image style={style.menu} source={require('../../assets/menu.png')} />
        </View>
    );
};

export default Header;