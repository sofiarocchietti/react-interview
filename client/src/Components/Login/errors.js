export function validate (input) {
    let errors = {}
    if (!input.email) {
      errors.title = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(input.username)) {
        errors.email= 'Email is invalid';
      }
    if (!input.password) {
      errors.password = 'Password is required'
    } 
    return errors
  }