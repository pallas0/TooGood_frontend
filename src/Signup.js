import axios from 'axios';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import React, { useState } from 'react';
import {styled} from '@mui/material/styles';
import TextField from '@mui/material/TextField';


import APIHandler from "./apihandler"

const CssTextField = styled(TextField)({
    "& .MuiInput-underline:after":{
        borderBottomColor:"white"
    },
    "& .MuiInput-underline:before":{
        borderBottomColor:"whiteSmoke"
    },
})


function Signup() {
    const initialState = {
        email: "",
        phoneNumber: ""
    };
    
    const [userData, setUserData] = useState(initialState);
    const [validationError, setValidationError] = useState('');
    const [apiError, setApiError] = useState('');

    const validateEmail = (email) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };
  
    const validatePhoneNumber = (phoneNumber) => {
      const phoneRegex = /^\d{10,11}$/;
      return phoneRegex.test(phoneNumber);
    };

    const handleSubmit = async () => {
        if (!validateEmail(userData.email)) {
          setValidationError('Please enter a valid email address.');
          return;
        }
    
        if (!validatePhoneNumber(userData.phoneNumber)) {
          setValidationError('Please enter a valid phone number (10 or 11 digits).');
          return;
        }
    
        setValidationError('');
        setApiError('');

        try {
          await APIHandler.post_data(userData);
        } catch (error) {
          if (error.response) {
            setApiError(error.response.data.message);
          } else {
            console.error('Error submitting user info:', error);
          }
        }
    }

    return (
        <div className="signup-container">
      <div className="header">
        <h1>Too Good To Go SMS Alerts</h1>
      </div>
      <div className="body">
        <p>Enter your information below to receive an SMS notification whenever your favorite stores release new bags.  Text alerts will be sent between the hours of 8am and 10pm PT.  You can pause or cancel your subscription at any time.</p>
        <p>Once you have submitted your information, a login confirmation will be sent to your email and app; you have two minutes to confirm before you'd need to resubmit your info.</p>
      </div>
      <div className="form">
        <div className="form-row">
          <label className="label">Email:</label>
          <CssTextField
            variant="standard"
            value={userData.email}
            sx={{ input: { color: 'white' } }}
            onChange={(e) =>
              setUserData({ ...userData, email: e.target.value })
            }
          />
        </div>
        <div className="form-row">
          <label className="label">Phone Number:</label>
          <CssTextField
            variant="standard"
            sx={{ input: { color: 'white' } }}
            value={userData.phoneNumber}
            onChange={(e) =>
              setUserData({ ...userData, phoneNumber: e.target.value })
            }
          />
        </div>
        <div className="error-container">
        {validationError && (
          <div className="error-message">{validationError}</div>
        )}
        {apiError && (
          <div className="error-message">{apiError}</div>
        )}
      </div>
      </div>
      <div className="button-container">
        <Button onClick={handleSubmit} variant="outlined"
        sx = {{
            color: "#FFFFFF",
            border: "1px solid white",
            '&:hover': {
                border: "1px solid black"
            }
        }}>
          Submit
        </Button>
      </div>
    </div>
    );
}

export default Signup