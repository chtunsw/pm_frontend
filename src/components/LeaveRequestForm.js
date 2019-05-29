import React from "react";
import Card from "@material-ui/core/Card"
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import './LeaveRequestForm.css';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    form: {
        ['@media (min-width:780px)']: { // eslint-disable-line no-useless-computed-key
            backgroundColor:"yellow"
        }
    },
    button: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      height: 48,
      padding: '0 30px',
    }
  });

  export default function LeaveRequestForm(){
        const classes = useStyles();

        return (
            <Card className={classes.form}>
                <div className='formTitle'>Leave Form</div>
                <TextField
                    id="applicant"
                    label="Applicant"
                    margin="normal"
                />
                <TextField
                    id="start date"
                    label="Start Date"
                    margin="normal"
                />
                <TextField
                    id="end date"
                    label="End Date"
                    margin="normal"
                />
                <TextField
                    id="leave reason"
                    label="Leave Reason"
                    margin="normal"
                />
                <Button className={classes.button} variant="contained" color="primary">Submit</Button>
                <Button variant="contained" color="secondary">Cancel</Button>
            </Card>
        )
}