import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    type Holiday =
        | "Pi Day"
        | "Halloween"
        | "4th of July"
        | "Christmas"
        | "Taco Day";
    const [holiday, setHoliday] = useState<Holiday>("Christmas");
    const abcTransition: Record<Holiday, Holiday> = {
        Christmas: "Halloween",
        Halloween: "Pi Day",
        "Pi Day": "Taco Day",
        "Taco Day": "4th of July",
        "4th of July": "Christmas"
    };
    const dateTransition: Record<Holiday, Holiday> = {
        "Pi Day": "4th of July",
        "4th of July": "Taco Day",
        "Taco Day": "Halloween",
        Halloween: "Christmas",
        Christmas: "Pi Day"
    };
    const display: Record<Holiday, string> = {
        Christmas: "🎄",
        Halloween: "🎃",
        "Pi Day": "🥧",
        "Taco Day": "🌮",
        "4th of July": "🎆"
    };
    function changeABC(): void {
        const newDay = abcTransition[holiday];
        setHoliday(newDay);
    }
    function changeDate(): void {
        const newDay = dateTransition[holiday];
        setHoliday(newDay);
    }
    return (
        <div>
            <div>
                <Button onClick={changeABC}>Advance by Alphabet</Button>
                <Button onClick={changeDate}>Advance by Year</Button>
            </div>
            <div>
                Holiday: (<span>{display[holiday]})</span>
            </div>
        </div>
    );
}
