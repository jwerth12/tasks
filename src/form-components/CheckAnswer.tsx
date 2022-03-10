import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [response, setResponse] = useState<string>("");
    const [symbol, setSymbol] = useState<string>("❌");
    function updateResponse(event: React.ChangeEvent<HTMLInputElement>) {
        setResponse(event.target.value);
        checkCorrect(event.target.value);
    }
    function checkCorrect(response: string) {
        if (response === expectedAnswer) {
            setSymbol("✔️");
        } else {
            setSymbol("❌");
        }
    }
    return (
        <div>
            <h3>Check Answer</h3>
            <Form.Group controlId="response">
                <Form.Label>Type Answer:</Form.Label>
                <Form.Control value={response} onChange={updateResponse} />
            </Form.Group>
            <div>{symbol}</div>
        </div>
    );
}
