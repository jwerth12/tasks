import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function DisplayQuestions(options: string[]): JSX.Element {
    const [choice, setChoice] = useState<string>("");
    //const choices: string[] = [];
    function updateChoice(event: React.ChangeEvent<HTMLInputElement>) {
        setChoice(event.target.value);
        // update choices array with this value, index must match the question order
        //choices[order] = event.target.value;
    }
    return (
        <div>
            <Form.Check
                inline
                key={options[0]}
                value={options[0]}
                type="radio"
                name={options[0]}
                onChange={updateChoice}
                id="option-check"
                label={options[0]}
                //checked={choice === options[0]}
            ></Form.Check>
            <Form.Check
                inline
                key={options[1]}
                value={options[1]}
                type="radio"
                name={options[1]}
                onChange={updateChoice}
                id="option-check"
                label={options[1]}
                //checked={choice === options[1]}
            ></Form.Check>
            {choice}
        </div>
    );
}

/*
{options.map((option: string) => (
                <Form.Check
                    inline
                    key={option}
                    value={option}
                    type="radio"
                    name={option}
                    onChange={updateChoice}
                    id="option-check"
                    label={option}
                    checked={choice === option} // this aint it chief
                />
            ))}
            */
