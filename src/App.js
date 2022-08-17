import './App.css';
import React, { useState } from 'react';
import List from './components/List';
import Form from './components/Form';

export default function App() {
	const [todoData, setTodoData] = useState([]);
	const [value, setValue] = useState('');

	return (
		<div className='container'>
			<div className='todoBlock'>
				<div className='title'>
					<h1>할일 목록</h1>
				</div>

				<List todoData={todoData} setTodoData={setTodoData} />
				<Form setValue={setValue} setTodoData={setTodoData} value={value} />
			</div>
		</div>
	);
}
