import { useState } from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/FeedbackData";
import Card from "./components/shared/Card";
import { Counter } from "./components/Counter";

function App() {
    const [feedback, setFeedback] = useState(FeedbackData)

    return (
        <>
            <Counter />
        </>
    )
}

export default App
