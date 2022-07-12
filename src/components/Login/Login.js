import React, {useState} from 'react'
import {connect} from 'react-redux';
import {setLoginData} from '../../actions/login';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Login = ({setLoginData}) => {
    const [userName,setUserName] = useState('');
    const [_password,setPassword] = useState('');
  return (
    <div className="container">
      <Form
        onSubmit={(e) => {
            console.log("Submitting from Login Form")
            e.preventDefault();
            setLoginData(userName,_password);
            setUserName('');
            setPassword('');
        }}
        >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="input" 
                        placeholder="Enter email" 
                        value={userName} 
                        onChange={(e) => setUserName(e.target.value)}
                        />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control 
                      type="password" 
                      placeholder="Password" 
                      value={_password} 
                      onChange={(e) => setPassword(e.target.value)}/>
        </Form.Group>
        
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

const mapStateToProps = state => ( {
  
})


export default connect(mapStateToProps,{setLoginData})(Login)