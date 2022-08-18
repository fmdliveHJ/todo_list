import './App.css';
import React, { useState } from 'react';
import List from './components/List';
import Form from './components/Form';
import Lists from './components/Lists';

export default function App() {
	const dummyPosts = [
		{
			id: '1',
			title: '공부하기',
			completed: false,
		},
		{
			id: '2',
			title: '청소하기',
			completed: false,
		},
	];
	const [todoData, setTodoData] = useState(dummyPosts);
	const [value, setValue] = useState('');

	const handleRemoveClick = () => {
		setTodoData([]);
	};

	return (
		<div className='flex items-center justify-center w-screen h-screen bg-blue-50'>
			<div className='w-full p-6 m-4 bg-white rounded shadow lg:w-2/4'>
				<div className='flex justify-between mb-3'>
					<h1>할일 목록</h1>
					<button onClick={handleRemoveClick}>삭제</button>
				</div>

				<Lists todoData={todoData} setTodoData={setTodoData} />
				<Form setValue={setValue} setTodoData={setTodoData} value={value} />
			</div>
		</div>
	);
}
