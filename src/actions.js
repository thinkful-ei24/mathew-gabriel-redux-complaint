import {SubmissionError} from 'redux-form';

export const sendComplaint = values => dispatch => {
  console.log('in action')
    return fetch('https://us-central1-delivery-form-api.cloudfunctions.net/api/report', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(res => {
          console.log(res)
          console.log(res.ok)
            if (!res.ok) {
              console.log('in !res.ok')
                if (
                    res.headers.has('content-type') &&
                    res.headers
                        .get('content-type')
                        .startsWith('application/json')
                ) {
                    // It's a nice JSON error returned by us, so decode it
                    return res.json().then(err => Promise.reject(err));
                }
                
                // It's a less informative error returned by express
                return Promise.reject({
                    code: res.status,
                    message: res.statusText
                });
            }
            return;
        })
        .then(() => console.log('Submitted with values', values))
        .catch(error =>
            Promise.reject(
                new SubmissionError({
                    [error.location]: error.message
                })
            )
        );
};