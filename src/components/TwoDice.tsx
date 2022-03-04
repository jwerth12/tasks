import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [Left, setLeft] = useState<number>(1);
    const [Right, setRight] = useState<number>(2);
    return (
        <div>
            <div>
                <Button onClick={() => setLeft(d6)}>Roll Left</Button>
                <Button onClick={() => setRight(d6)}>Roll Right</Button>
            </div>
            <div>
                Left: <span data-testid="left-die">{Left} </span>
                Right: <span data-testid="right-die">{Right} </span>
            </div>
            <div>
                {Right === 1 && Left === 1 ? (
                    <span>Sorry! Lose</span>
                ) : Right === Left ? (
                    <span>Yay! Win</span>
                ) : (
                    <span>Roll Dice!</span>
                )}
            </div>
        </div>
    );
}
