import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [gains, setGains] = useState<number>(0);
    const [able, setAble] = useState<boolean>(true);

    function useAttempt(): void {
        setAttempts(attempts - 1);
        if (attempts === 1) {
            setAble(false);
        } else {
            setAble(true);
        }
    }
    function gainAttempts(): void {
        setAttempts(attempts + gains);
        if (attempts + gains >= 1) {
            setAble(true);
        }
    }
    return (
        <div>
            <h3>Give Attempts</h3>
            <Form.Group controlId="attempts">
                <Form.Label>Request more attempts</Form.Label>
                <Form.Control
                    type="number"
                    value={gains}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setGains(parseInt(event.target.value) || 0)
                    }
                />
            </Form.Group>
            <Button onClick={gainAttempts}>gain</Button>
            <Button onClick={useAttempt} disabled={!able}>
                use
            </Button>
            <div>{attempts}</div>
        </div>
    );
}
