import React from 'react';
import {reduxForm, Field, SubmissionError, focus} from 'redux-form';
// import Input from './input';
// import {required, nonEmpty, email} from '../validators';

class ContactForm extends React.Component {
  render() {
    return (
      <form>
        <h1>Report a problem with your delivery</h1>
        <label htmlFor='trackingNumber'>Tracking Number</label><br />
        <input name='trackingNumber' type='text'/><br />
        <label htmlFor='issue'>What is your issue?</label><br />
        <select name='issue'>
          <option>My delivery hasn't arrived</option>
          <option>The wrong item was delivered</option>
          <option>Part of my order was missing</option>
          <option>Some of my order arrived missing</option>
          <option>Other (give details below)</option>
        </select><br />
        <label htmlFor='moredetails'>Give more details (optional)</label><br />
        <textarea name='moredetails'></textarea><br />
        <button>Submit</button>

      </form>
    )
  }
}

export default reduxForm({
  form: 'contact'
})(ContactForm);