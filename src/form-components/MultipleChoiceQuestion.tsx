import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    type ChangeEvent = React.ChangeEvent<
        HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
    >;

    const [choice, setChoice] = useState<string>(options[0]);
    const [symbol, setSymbol] = useState<string>("❌");
    function updateChoice(event: ChangeEvent) {
        setChoice(event.target.value);
        if (event.target.value === expectedAnswer) {
            setSymbol("✔️");
        } else {
            setSymbol("❌");
        }
    }
    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <Form.Group controlId="selectedChoice">
                <Form.Label>Select a choice</Form.Label>
                <Form.Select value={choice} onChange={updateChoice}>
                    {options.map((option: string) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            <div>{symbol}</div>
        </div>
    );
}
