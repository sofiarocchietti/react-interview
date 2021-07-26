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
      errors.servings = 'Servings must be a number'
    }
    if (input.steps.length < 1) {
      errors.steps = 'Steps are required'
    }
    if (input.ingredients.length < 1) {
      errors.ingredients = 'Ingredients are required'
    }
    return errors
  }