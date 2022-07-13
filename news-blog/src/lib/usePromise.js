import { useState, useEffect } from "react";

export default function usePromise(promiseCreator, deps) {
	const [loading, setLoading] = useState(false);
	const [resolved, setResolved] = useState(null);
	const [error, setError] = useState(null);

	useEffect(() => {
		const process = async () => {
			setLoading(true);
			try {
				const resolved = await promiseCreator();
				setResolved(resolved);
			} catch (err) {
				setError(err);
			}
			setLoading(false);
		};
		process();
	}, deps);

	return [loading, resolved, error];
}

/*
import { useState, useEffect } from "react";

export default function usePromise(promiseCreater, deps) {
	const [loading, setLoading] = useState(false);
	const [resolved, setResolved] = useState(null);
	const [error, setError] = useState(null);
	console.log("dfsdfdfgdfg");
	useEffect(() => {
		const process = async () => {
			setLoading(true);
			try {
				const resolved = await promiseCreater();
				setResolved(resolved);
			} catch (err) {
				setError(err);
			}
			setLoading(false);
		};
		process();
	}, deps);

	return [loading, resolved, error];
} */
