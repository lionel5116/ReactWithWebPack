import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from "react-redux";
import studentInfoApi from '../../api/studentInfoApi';
import {ListGroup,Form,Container} from 'react-bootstrap';
import axios from 'axios';
import uniqueid from 'uniqid'

export class StudentInformation extends Component {
   /*
    static propTypes = {

    }
  */
   constructor(props, context){
     super(props, context);
       this.state = {
        axiosRecsStudent: [],
        done: false
       }
   }

    componentDidMount(){
        this.loadStudentSampleData();
    }


    loadStudentSampleData()
    {
        axios.get(`http://appsdev.houstonisd.org/HISDDevAppsWEBAPI/api/StudentEntryData/getStudentInformationDataTop25Rows/`)
          .then(res => {

            let studentSampleData = [];
                studentSampleData = res.data
           
            let studentRecords = studentSampleData.map(studRecItem =><ListGroup.Item key={uniqueid()} 
              action  onClick={() => this.selectHcadRecordItem(studRecItem.FirstName)}>
               School: {studRecItem.School} <br /> 
               LastName: {studRecItem.LastName}  <br /> 
               FirstName: {studRecItem.FirstName } <br /> 
               Medical_Condition: {studRecItem.Medical_Condition} 
              </ListGroup.Item>)

             this.setState({
                    axiosRecsStudent: studentRecords,
                     done: true
                    });
          });
    }

  selectHcadRecordItem(FirstName)
  {
     alert("Record Information for :" + FirstName)
  }
    render() {
        if(!this.state.done) {
            return (
                <div>
                    Student Information Loading .....
                </div>
            )
        } else {
            return (
              <div id="MasterContainer">
                <Container>
                  <h1>HCAD Records</h1>
                  <Form>
                    <Form.Group controlId="spacer">
                      <hr></hr>
                    </Form.Group>
  
                    <Form.Group controlId="StudentList">
                      <ListGroup>{this.state.axiosRecsStudent}</ListGroup>
                    </Form.Group>
                  </Form>
                </Container>
              </div>
            );
        }
    }
}

export default StudentInformation
