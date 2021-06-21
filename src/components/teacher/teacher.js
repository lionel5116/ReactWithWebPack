import React from 'react';
import { connect } from "react-redux";
import Nav from 'react-bootstrap/Nav';
import {Navbar} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import {Form,FormControl,NavDropdown,Container} from 'react-bootstrap';
import {store} from '../../store/store';


class Teacher extends React.Component {

    constructor(props){
      super(props);
      
      this.state = {
        teacherName: '',
        teacherSubject: '',
        isCertified: '',
        gradeLevel: '',
      };
      
    };
    
    componentDidMount(){
          //WE MAPPED OUR STATE=>PROPS !!!! (SO THE SYNTAX WOULD "NOT BE" this.state.props)
          console.log("The enviorment you are in is " + this.props.environment)  
    }

  handleTextChange(e) {
      let fieldName = e.target.name;
      let fleldVal = e.target.value;
      this.setState({[fieldName]: fleldVal})
    }

    proceedToNothing() {
        console.log("Current Logged in User is " + this.props.userName );
    }


    render() {
        return (
            <div id="MasterContainer">
                <Container>
                    <Form>

                        <Form.Group controlId="environment">
                            <h2>Teacher Name</h2>
                        </Form.Group>

                        <Form.Group controlId="formTeacherName">
                            <Form.Label>Teacher Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Teacher Name"
                                type='text'
                                name='teacherName'
                                value={this.state.text}
                                onChange={(e) => { this.handleTextChange(e) }}
                            />
                        </Form.Group>

                        <Form.Group controlId="formteacherSubject">
                            <Form.Label>Subject</Form.Label>
                            <Form.Control type="text" placeholder="Enter Subject"
                                type='text'
                                name='teacherSubject'
                                value={this.state.text}
                                onChange={(e) => { this.handleTextChange(e) }}
                            />
                        </Form.Group>

                        <Form.Group controlId="formisCertified">
                            <Form.Label>Certified</Form.Label>
                            <Form.Control type="text" placeholder="Certified Y/N"
                                type='text'
                                name='isCertified'
                                value={this.state.text}
                                onChange={(e) => { this.handleTextChange(e) }}
                            />
                        </Form.Group>

                        <Form.Group controlId="formisCertified">
                            <Form.Label>Grade Level</Form.Label>
                            <Form.Control type="text" placeholder="Grade Level"
                                type='text'
                                name='gradeLevel'
                                value={this.state.text}
                                onChange={(e) => { this.handleTextChange(e) }}
                            />
                        </Form.Group>



                        <Button variant="primary" type="button"
                            onClick={() => this.proceedToNothing()}>
                            Submit
                        </Button>
                    </Form>
                </Container>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
  return {
    
    teacherName: state.redTeacher.teacherName,
    teacherSubject: state.redTeacher.teacherSubject,
    isCertified: state.redTeacher.isCertified,
    gradeLevel: state.redTeacher.gradeLevel,

    userName:state.redLogin.userName,
    environment: state.redLogin.environment,
    password:state.redLogin.password
    
  };
};

export default connect(mapStateToProps, null)(Teacher);

