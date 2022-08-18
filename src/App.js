import './App.css';
import React, { useState } from 'react';
import Form from './components/Form';
import Lists from './components/Lists';

const initialTododata = localStorage.getItem('todoData')
	? JSON.parse(localStorage.getItem('todoData'))
	: [];

export default function App() {
	const [todoData, setTodoData] = useState(initialTododata);
	const [value, setValue] = useState('');

	const handleRemoveClick = () => {
		setTodoData([]);
		localStorage.setItem('todoData', JSON.stringify([]));
	};

	return (
		<div className='flex items-center justify-center w-screen h-screen bg-blue-50'>
			<div className='w-full p-6 m-4 bg-white rounded shadow lg:w-2/4'>
				<div className='flex justify-between mb-3'>
					<h1>할일 목록</h1>
					<button onClick={handleRemoveClick}>삭제</button>
				</div>

				<Lists todoData={todoData} setTodoData={setTodoData} />
				<Form
					setValue={setValue}
					setTodoData={setTodoData}
					value={value}
					todoData={todoData}
				/>
			</div>
		</div>
	);
}
