export function validate (input, register) {
  let errors = {}
  if (register && !input.name) {
    errors.name = 'Name is required'
  }
  if (!input.email) {
    errors.title = 'Email is required'
  } 
  if (!input.password) {
    errors.password = 'Password is required'
  } 
  return errors
}