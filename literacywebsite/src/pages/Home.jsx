import React, { useState } from "react";
import { getDatabase, ref, set, child, get } from "firebase/database";

const Home = () => {

	const [dbText, setDbText] = useState("Text from the db will appear here");

	function writeToDb(text) {
		const db = getDatabase();

		set(ref(db, 'user/'), {
		  test: text,
		});
	}

	function readFromDb() {
		const dbRef = ref(getDatabase());
		get(child(dbRef, 'user/test')).then((snapshot) => {
			if (snapshot.exists()) {
				setDbText(snapshot.val());
			} else {
			  console.log("No data available");
			}
		  }).catch((error) => {
			console.error(error);
		  });
	}

	return (
		<>

			<input type="text" id="test-input"/>
			<button onClick={() => writeToDb(document.getElementById('test-input').value)}>Submit</button>
			
			<br/>
			<br/>

			<button onClick={readFromDb}>Read from the database</button>
			<p>{dbText}</p>
		</>
	);
};

export default Home;
