import React from 'react';

function RecipeSteps(props) {

    const steps = props.steps.map((step, index) => {
        return (
            <li className="step">
                {step}
            </li>
        )
    })
    return (
        <div className="recipe-steps">
            <h1>Steps</h1>
            <ol>
                {steps}
            </ol>
        </div>
    )
}

export default RecipeSteps