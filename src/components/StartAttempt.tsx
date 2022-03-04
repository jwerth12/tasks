import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [inProgress, setProgress] = useState<boolean>(false);
    function useAttempt(): void {
        setProgress(true);
        setAttempts(attempts - 1);
    }
    function gainAttempt(): void {
        setAttempts(attempts + 1);
    }
    return (
        <div>
            <span>Attempts left: {attempts}</span>
            <div>
                <Button
                    onClick={useAttempt}
                    disabled={inProgress || attempts === 0}
                >
                    Start Quiz
                </Button>
            </div>
            <div>
                <Button onClick={gainAttempt} disabled={inProgress}>
                    Mulligan
                </Button>
            </div>
            <div>
                <Button
                    onClick={() => setProgress(false)}
                    disabled={!inProgress}
                >
                    Stop Quiz
                </Button>
            </div>
        </div>
    );
}
