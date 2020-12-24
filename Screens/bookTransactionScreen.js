import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import * as Permissions from "expo-permissions";
import {BarCodeScanner} from  "expo-barcode-scanner";


export default class TransactionScreen extends React.Component{
    constructor(){
        super();
        this.state= {
            hasCameraPermissions: null,
            scanned: false,
            scannedData: "",
            buttonState: "normal",
            scannedBookID: "",
            scannedStudentID: ""
        }
    }

    getCameraPermissions= async (IDvar)=>{
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState ({
            hasCameraPermissions: status==="granted",
            buttonState: IDvar,
            scanned: false
        })
    }

    handleBarcodeScanned= async ({type,data}) =>{
        this.setState ({
            scanned: true,
            scannedData: data,
            buttonState: "normal"
        })
    }
    render(){
        const hasCameraPermissions= this.state.hasCameraPermissions;
        const scanned= this.state.scanned;
        const buttonState= this.state.buttonState;
        if (buttonState!=="normal" && hasCameraPermissions){
            return(
                <BarCodeScanner 
                onBarCodeScanned= {scanned? undefined:this.handleBarcodeScanned}
                ></BarCodeScanner>
            )
        }
        else if (buttonState==="normal"){

        
        return(
            <View style= {styles.container}>
                <Image style= {{width: 200, height: 200}}
                source= {require ("./assets/booklogo.jpg")}
                />
                <Text style= {{textAlign:'center', fontSize: 30}}> Wily </Text>
               <View style = {styles.inputView}>
                   <TextInput 
                   style= {styles.inputBox}
                   placeHolder= "book ID"
                   value= {this.state.scannedBookID}
                   >
                

                
                   </TextInput>
                   <TouchableOpacity style= {styles.scanButton}
                   onPress= {()=>{
                       this.getCameraPermissions("BookID")
                   }}
                   >
                       <Text style= {styles.buttonText}
                       > Scan </Text>
                   </TouchableOpacity>

                   <TextInput 
                   style= {styles.inputBox}
                   placeHolder= "student ID"
                   value= {this.state.scannedStudentID}
                   >

                
                   </TextInput>
                   <TouchableOpacity style= {styles.scanButton}
                   onPress= {()=>{
                    this.getCameraPermissions("StudentID")
                }}
                   >
                       <Text style= {styles.buttonText}
                       > Scan </Text>
                   </TouchableOpacity>
               </View>
            </View>
        )
    }
}
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    displayText:{
      fontSize: 15,
      textDecorationLine: 'underline'
    },
    scanButton:{
      backgroundColor: '#2196F3',
      padding: 10,
      margin: 10
    },
    buttonText:{
      fontSize: 15,
      textAlign: 'center',
      marginTop: 10
    },
    inputView:{
      flexDirection: 'row',
      margin: 20
    },
    inputBox:{
      width: 200,
      height: 40,
      borderWidth: 1.5,
      borderRightWidth: 0,
      fontSize: 20
    },
    scanButton:{
      backgroundColor: '#66BB6A',
      width: 50,
      borderWidth: 1.5,
      borderLeftWidth: 0
    }
  });