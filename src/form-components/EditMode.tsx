import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [inEditMode, setEditMode] = useState<boolean>(false);
    const [isStudent, setStudent] = useState<boolean>(true);
    const [name, setName] = useState<string>("Your Name");
    function switchMode(event: React.ChangeEvent<HTMLInputElement>) {
        setEditMode(event.target.checked);
    }
    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }
    function switchStudent() {
        setStudent(!isStudent);
    }
    function display() {
        if (!inEditMode) {
            return (
                <div>
                    {name} {isStudent ? "is" : "is not"} a student
                </div>
            );
        } else {
            return (
                <div>
                    <Form.Group controlId="studentName">
                        <Form.Label>Name:</Form.Label>
                        <Form.Control value={name} onChange={updateName} />
                    </Form.Group>
                    <div>
                        <Form.Check
                            type="switch"
                            id="isStudent"
                            label="Is a student?"
                            checked={isStudent}
                            onChange={switchStudent}
                        />
                    </div>
                </div>
            );
        }
    }
    return (
        <div>
            <h3>Edit Mode</h3>
            <div>{display()}</div>
            <Form.Check
                type="switch"
                id="in-edit-mode"
                label="Edit Mode"
                checked={inEditMode}
                onChange={switchMode}
            />
        </div>
    );
}
