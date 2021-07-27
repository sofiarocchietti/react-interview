export function validate (input) {
    let errors = {}
    if (!input.email) {
      errors.title = 'Email is required'
    } 
    if (!input.password) {
      errors.password = 'Password is required'
    } 
    return errors
  }