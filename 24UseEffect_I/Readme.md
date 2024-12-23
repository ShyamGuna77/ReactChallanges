# Logging a particular value
1 . Below, we have a signup form with several React state variables.

2 . Our goal is to add a console.log that fires only when the value of “email” changes. We should see the user's email logged in the console whenever they edit that field.

## Acceptance Criteria:

- Whenever the user changes the value of the “email” state variable, the new value should be logged to the console.
Nothing should be logged when the user changes another field (for example, their city or postal code).
- The logging should be done inside an effect, not within the onChange event handler.
Stretch Goal:

`Update the code so that name is also logged whenever it changes.`

# Live Demo

The starter code available in [codesandbox](https://codesandbox.io/s/qzk8n1?file=%2FSignupForm.js&utm_medium=sandpack )

