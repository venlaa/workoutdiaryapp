import { MD3LightTheme } from "react-native-paper";
import { StyleSheet } from "react-native";

const customTheme = {
    ...MD3LightTheme,
    colors: {
        ...MD3LightTheme.colors,
        primary: '#AFB5A1',   
        onPrimary: 'black',   
        secondary: '#8AA38A',  
        background: 'white', 
        surface: '#07485B',    
        onSurface: 'black',   
        text: 'black',   
        secondaryContainer: '#F59B5B',
        
    },
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    }, headerText: {
      fontSize: 24,
      marginBottom: 20,
      textAlign: 'center',
    }, segmentedButtons: {
      marginBottom: 20,
    }, input: {
      width: '80%',
      marginVertical: 2,
      backgroundColor: 'white',
      fontSize: 18,
      paddingHorizontal: 12,
      height: 50,
    }, modal: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    }, icon: {
      marginVertical: -22,
      marginTop: 10
    }, addworkoutButton: {
      marginVertical: 19,
      backgroundColor: 'white',
      paddingVertical: 20, 
      paddingHorizontal: 25, 
      borderRadius: 50, 
      borderWidth: 1,
      minWidth: 200, 
      width: '50%',
      borderColor: '#F59B5B',
      alignItems: 'center',
    }, buttonText: {
      marginTop: 20,
      paddingVertical: 15, 
      paddingHorizontal: 30, 
      borderRadius: 25, 
      borderWidth: 1,
      borderColor: '#07485B',
      color: 'black',
      backgroundColor: 'white',
      overflow: 'hidden'
    }, addWorkoutButtonText: {
      color: 'black'
    }, card: {
      width: '100%',
      backgroundColor: 'white',
      marginVertical: 4, 
      borderRadius: 5,
      borderWidth: 0.5,
      borderColor: '#F59B5B'
    }, cardIconColor: {
      backgroundColor:'#07485B'
    }, unitHeaderText: {
      fontSize: 30,
      marginTop: 70,
      textAlign: 'center'
    },  sumCardContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center', 
      padding: 10,
      backgroundColor: 'white'
    }, sumIcon: {
      marginRight: 5, 
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'white',
    }
  });

  export { customTheme, styles };