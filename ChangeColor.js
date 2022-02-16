import React, { Component } from 'react';
import {  Pressable } from 'react-native';
import { StyleSheet, Text, View} from 'react-native';


//Css code
const styles = StyleSheet.create({

    //Css to container
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: 414,
    },

    //Css to Change Color button
    changeColorButton: {
        backgroundColor: '#fff',
        width: 160,
        height: 50,
        borderRadius: 5,
        marginTop:20,
    },

    //Css to text in Change Color button
    chageColorText: {
        textAlign: 'center',
        marginTop: 9,
        fontSize: 20,
    },

    //Css to text for Color Code
    colorCodeText:{
        color: '#fff',
        textAlign: 'center',
        fontSize: 18,
    },
    pressableShadow: {
        elevation: 8,
        width: 160,
        height: 50,
        alignContent: 'center',
    }
   
});

//Class component
class ChangeColor extends Component{ 
    
    constructor(){

        super();
    
        this.state={
            
            //Set startstate to Color Holder
            ColorHolder: '#00BCD4'

        }
    }

    //Function that changes rgb value
    ChangeColor = () => {

        var ColorCode = 
        
        // r value
        'rgb(' + (Math.floor(Math.random() * 256)) + ',' + 

        //g value
        (Math.floor(Math.random() * 256)) + ',' + 

        //b value
        (Math.floor(Math.random() * 256)) + ')';
 
        this.setState({

            //Change state from colorholder to colorcode
            ColorHolder : ColorCode
        })
    }

render(){

    return(
    
    //Contaier with colorcodetext and changecolorbutton
    <View style={[styles.container, {backgroundColor: this.state.ColorHolder}]}>
        
         
        <View>
            <Text style={styles.colorCodeText}>Color Code: { this.state.ColorHolder }</Text>
        </View>
        
        <View style={styles.pressableShadow}>
            <Pressable style={styles.changeColorButton}  onPress={this.ChangeColor}>
                <Text style={[styles.chageColorText, {color: this.state.ColorHolder}]}> Change Color </Text>
            </Pressable>
        </View>

    </View>
   );
}   
}

//exports class component
export default ChangeColor;