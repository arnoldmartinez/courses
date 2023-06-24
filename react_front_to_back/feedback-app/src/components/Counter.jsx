import {useState, useEffect} from "react";

export const Counter = () => {
	const [count, setCount] = useState(0)

	// Called after every render
	useEffect(() => {
		console.log('Counter value is now ' + count)
	})

	return (
		<div>
			<p>{count}</p>
			<button onClick={() => setCount(count + 1)}>Increment</button>
		</div>
	)
}
