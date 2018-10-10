import React from 'react';
import {reduxForm, Field, SubmissionError, focus} from 'redux-form';
import Input from './input';
import {required, nonEmpty, isNumber} from '../validators';
import {sendComplaint} from '../actions';

class ContactForm extends React.Component {

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(values => 
        this.props.dispatch(sendComplaint(values))
        )}>
        <h1>Report a problem with your delivery</h1>
        <Field 
          component={Input} 
          element='input' 
          label='Tracking Number' 
          id='trackingNumber' 
          name='trackingNumber' 
          type='text'
          validate={[required, nonEmpty, isNumber]} /><br />

        <label htmlFor='issue'>What is your issue?</label><br />
        <Field 
          name="issue" 
          component="select"> 
            <option /> 
              <option value='not-delivered'>My delivery hasn't arrived</option> 
              <option value='wrong-item'>The wrong item was delivered</option> 
              <option value='missing-part'>Some of my order arrived missing</option> 
              <option value='damaged'>Some of my order arrived damaged</option> 
              <option value='other'>Other (give details below)</option> 
        </Field>
        <br /><br />
        <label htmlFor='details'>Give more details (optional)</label><br />
        <Field 
          name='details'
          component='textarea' /><br />
        <button>Submit</button>

      </form>
    )
  }
}

export default reduxForm({
  form: 'contact'
})(ContactForm);