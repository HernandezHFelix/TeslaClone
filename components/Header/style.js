
import { StyleSheet, Text, View } from 'react-native';

const style = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 50,
        zIndex: 100,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 20,
      },
      logo: {
        width: 100,
        height: 20,
        resizeMode: 'contain',
      },
      menu: {
        width: 25,
        height: 25,
        resizeMode: 'contain',
    }
});

export default style;