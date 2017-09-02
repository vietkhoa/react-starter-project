import React, { Component } from 'react'
import _ from 'lodash'
import { ListView } from 'react-native'
import {ListItem} from './ListItem'
import { connect } from 'react-redux';
import { employeeFetch } from '../actions';
class EmployeeList extends Component {

    componentWillMount(){
        this.props.employeeFetch()

        this.createDateSource(this.props)
    }

    componentWillReceiveProps(nextProps) {
        // nextProps are the next set props received
        // this.props is still the old set
        this.createDateSource(nextProps)
    }

    createDateSource( { employees} ){
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !==r2
        })

        this.dataSource = ds.cloneWithRows(this.props.employees)
    }

    renderRow(employee){
        return <ListItem employee = {employee} />
    }

    render() {
        return (
            <ListView
                enableEmptySections
                dataSource = {this.dataSource}
                renderRow = {this.renderRow}
            />
        )
    }
}

const mapStateToProps = state =>{
    const employees = _.map(state.employees,( val, uid) => {
        return { ...val, uid}
    })

    return { employees }
}

export default connect(mapStateToProps, {employeeFetch})(EmployeeList)