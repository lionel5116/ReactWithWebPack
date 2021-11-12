import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from "react-redux";
import studentInfoApi from '../../api/studentInfoApi';

export class StudentInformation extends Component {
   /*
    static propTypes = {

    }
  */
   constructor(props, context){
     super(props, context);
       this.state = {
          _studentSampleData:[]
       }
   }

    componentDidMount(){
        this.loadStudentSampleData();
    }


    loadStudentSampleData()
    {
        let promise = studentInfoApi.getSampleSudentData();
        promise.then(studentSampleData => {
            this.setState({ _studentSampleData: studentSampleData});
        })
        .catch(reason => {
              console.log("There was an error retrieving student data " + reason)
        });
    }

    render() {
        return (
            <div>
                Hello from Student Info Screen
            </div>
        )
    }
}

export default StudentInformation
