import React, { Component } from 'react'
import { Action } from 'react-native-router-flux'
import { Text, TouchableWithoutFeedback } from 'react-native'
import { CardSection } from './common'

class ListItem extends Comment{

    onRowPress(){
        ApplicationCache.employeeEdit({ employee : this.props.employee});
    }

    render(){
        const { name } = this.props.employee
     return(  
         <TouchableWithoutFeedback onPress = {onROwPress}>
             <View>
         <CardSection>
            <Text style = {styles.titleSTyle}>
                {name}
            </Text>   
            </CardSection>
            </View>
            </TouchableWithoutFeedback>
     )
    }
}

const styles = {
    titleStyle:{
        fontSize: 18,
        paddingLeft: 15
    }
}

export default ListItem