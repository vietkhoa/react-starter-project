import _ from 'lodash'
import React, { Component } from 'react'
import { Card, CardSection, Button, Confirm } from './common'
import {Communications} from 'react-native-communications'
import EmployeeForm from './EmployeeForm'
import { connect } from 'react-redux'
import {employeeUpdate, employeeCreate, employeeDelete} from '../actions'

class EmployeeEdit extends Component{

    state = { showModal : false }

    componentWillMount(){
        _.each(this.props.employee, (value, key) =>{
            this.props.employeeUpdate({prop, value})
        })
    }

    onButtonPress = () =>{
        const { name, phone, shift } = this.props
        this.props.employeeSave({name, phone, shift, uid: this.props.employee.uid})
    }

    onTextPress = () =>{
        const { phone, shift} = this.props

        Communications.text(phone, `Your upcoming shift on ${shift}`)
    }

    onAccept = () =>{
        const { uid } = this.props.employee

        this.props.employeeDelete({uid})
    }

    onDecline = () =>{
        this.setState({showModal:false})
    }

    render() {
        return(
            <Card>
                <EmployeeForm/>
                <CardSection>
                    <Button onPress={this.onButtonPress}>
                        Save Changes
                    </Button>
                </CardSection>

                <CardSection>
                    <Button onPress = {this.onTextPress}>
                        Text Shcedule
                    </Button>
                </CardSection>

                <CardSection>
                    <Button onPress={() => this.setState({showModal:!this.state.showModal})}>
                        Fire Employee
                        </Button>
                        </CardSection>

                <Confirm
                    visible={this.state.showModal}
                    onAccept = {this.onAccept}
                    onDecline = {this.onDecline}
                >
                    Are you sure you want to delete it ?
                    </Confirm>
            </Card>
        )
    }
}

const mapStateToProps = state =>{
    const { name, phone, shift} = state.employee

    return  { name, phone, state}
}

export default connect(mapStateToProps,{employeeUpdate, employeeCreate, employeeDelete})(EmployeeEdit)