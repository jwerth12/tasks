import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                Jenn Werth :) UD CISC275 with React Hooks and TypeScript
            </header>
            <h1>Travel Bucketlist</h1>
            <img
                src="https://i2-prod.mirror.co.uk/incoming/article23661643.ece/ALTERNATES/n615/1_Beaty-limestone-rock.jpg"
                alt="The view I would like to have right now"
            />
            <Container>
                <Row>
                    <Col>
                        Still To Do:
                        <div
                            style={{
                                width: 50,
                                height: 10,
                                backgroundColor: "red"
                            }}
                        ></div>
                        <ol>
                            <li>Go island hopping in Thailand</li>
                            <li>
                                Roast a marshmallow over a volcano in Guatemala
                            </li>
                            <li>Skate on a frozen lake in Canada</li>
                            <li>Go skydiving in Hawaii</li>
                        </ol>
                    </Col>
                    <Col>
                        Completed:
                        <div
                            style={{
                                width: 50,
                                height: 10,
                                backgroundColor: "red"
                            }}
                        ></div>
                    </Col>
                </Row>
            </Container>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Hello World!
            </p>
            <hr></hr>
            <Counter></Counter>
            <hr />
            <RevealAnswer></RevealAnswer>
            <hr />
            <StartAttempt></StartAttempt>
            <hr />
            <TwoDice></TwoDice>
            <hr />
            <ChangeType></ChangeType>
            <hr />
            <CycleHoliday></CycleHoliday>
        </div>
    );
}

export default App;
