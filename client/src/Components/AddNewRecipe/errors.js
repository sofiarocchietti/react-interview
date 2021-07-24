export function validate (input) {
    let errors = {}
    if (!input.title) {
      errors.title = 'Title is required'
    } else if (!/([A-Z]|[a-z])\w+/.test(input.title)) {
      errors.name = 'Title is invalid'
    }
    if (!input.timeToMake) {
      errors.summary = 'Time to make is required'
    } else if (!/([A-Z]|[a-z])|\w+/.test(input.summary)) {
      errors.summary = 'Time to make is required'
    }
    if (typeof(input.servings) !== Number) {
      errors.servings = 'Score must be a number'
    }
    return errors
  }