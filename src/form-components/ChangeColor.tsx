import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { ColoredBox } from "../bad-components/ColoredBox";

export function ChangeColor(): JSX.Element {
    const [color, setColor] = useState<string>("");
    // const colors = [
    //     "red",
    //     "orange",
    //     "yellow",
    //     "green",
    //     "blue",
    //     "purple",
    //     "pink",
    //     "cyan"
    // ];
    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setColor(event.target.value);
    }
    // interface colorOptions {
    //     type: "radio";
    //     name: "color";
    //     onChange: { updateColor };
    //     id: "color-check";
    //     label: "red";
    //     value: "red";
    //     checked: color==="red";
    // };
    return (
        <div>
            <h3>Change Color</h3>
            {/* <Form.Check
                inline
                type="radio"
                name="color"
                onChange={updateColor}
                id="color-check"
                label={colors.map((color: string): string => color)}
                value={colors.map((color: string): string => color)}
                checked={color === "red"}
            /> */}
            <Form.Check
                inline
                type="radio"
                name="color"
                onChange={updateColor}
                id="color-check"
                label="red"
                value="red"
                checked={color === "red"}
            />
            <Form.Check
                inline
                type="radio"
                name="color"
                onChange={updateColor}
                id="color-check"
                label="orange"
                value="orange"
                checked={color === "orange"}
            />
            <Form.Check
                inline
                type="radio"
                name="color"
                onChange={updateColor}
                id="color-check"
                label="yellow"
                value="yellow"
                checked={color === "yellow"}
            />
            <Form.Check
                inline
                type="radio"
                name="color"
                onChange={updateColor}
                id="color-check"
                label="green"
                value="green"
                checked={color === "green"}
            />
            <Form.Check
                inline
                type="radio"
                name="color"
                onChange={updateColor}
                id="color-check"
                label="blue"
                value="blue"
                checked={color === "blue"}
            />
            <Form.Check
                inline
                type="radio"
                name="color"
                onChange={updateColor}
                id="color-check"
                label="purple"
                value="purple"
                checked={color === "purple"}
            />
            <Form.Check
                inline
                type="radio"
                name="color"
                onChange={updateColor}
                id="color-check"
                label="pink"
                value="pink"
                checked={color === "pink"}
            />
            <Form.Check
                inline
                data-testid="colored-box"
                type="radio"
                name="color"
                onChange={updateColor}
                id="color-check"
                label="cyan"
                value="cyan"
                checked={color === "cyan"}
            />
            <div>You have chosen {color}.</div>
            <div
                data-testid="colored-box"
                style={{
                    width: "50px",
                    height: "50px",
                    backgroundColor: color,
                    display: "inline-block",
                    verticalAlign: "bottom",
                    marginLeft: "5px"
                }}
            ></div>
        </div>
    );
}
