import React, { useState } from 'react';
import {  ImageBackground, Pressable } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({

    //Css to container
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: 414,
    },
        //Css to Change Image button
        changeImageButton: {
            backgroundColor: '#000',
            width: 160,
            height: 50,
            borderRadius: 5,
            marginTop:20,
            alignSelf: 'center'
        },
    
        //Css to text in Change Image button
        changeImageText: {
            textAlign: 'center',
            marginTop: 9,
            fontSize: 20,
            color: '#fff'
        },
        //Css to image
        image: {
            flex: 1,
            justifyContent: "center",
            width: 414
        }
})

//Function component
const ImagesChange = () => { 
    
    //Array with images
    const images = [
        require("./Images/Julgran.jpg"),
        require("./Images/Julpynt.jpg"),
        require("./Images/Ljus.jpg"),
        require("./Images/Polkagris.jpg"),
        require("./Images/Träd.jpg")
    ];

    //Variable to set imageHolder
    const imageHolder = images[0]

    //Variabel to set and later change imageHolder
    const [imageAsset, setImageAsset] = useState(imageHolder)

    //Function to change image
    const Change = () => {
        
        //Random number generator
        const randomNumber = Math.floor(Math.random() * images.length);

        // Variable toset new image
        const newImage = images[randomNumber]
        setImageAsset(newImage) 
    }

        return(
        
        //Container with backgroundImage and a button to change backgroundImage
        <View style={styles.container}>
            
            <ImageBackground  source={imageAsset} resizeMode="cover" style={styles.image}> 
            
            <View>
                <Pressable style={styles.changeImageButton} onPress={Change}>
                    <Text style={styles.changeImageText}> Change Image </Text>
                </Pressable>
            </View>

           </ImageBackground>
        </View>
        );

}

//exports function component
export default ImagesChange;