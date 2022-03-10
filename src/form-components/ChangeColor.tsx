import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { ColoredBox } from "../bad-components/ColoredBox";

export function ChangeColor(): JSX.Element {
    const [color, setColor] = useState<string>("");
    const colors = [
        "red",
        "orange",
        "yellow",
        "green",
        "blue",
        "purple",
        "pink",
        "cyan"
    ];
    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setColor(event.target.value);
    }
    return (
        <div>
            <h3>Change Color</h3>
            <Form.Group controlId="colorpick">
                {colors.map((choice: string) => (
                    <Form.Check
                        inline
                        key={choice}
                        value={choice}
                        type="radio"
                        name={choice}
                        onChange={updateColor}
                        id="color-check"
                        label={choice}
                        checked={color === choice}
                        style={{
                            backgroundColor: choice
                        }}
                    />
                ))}
            </Form.Group>
            You have chosen{" "}
            <div
                data-testid="colored-box"
                style={{
                    backgroundColor: color
                }}
            >
                {color}.
            </div>
        </div>
    );
}
