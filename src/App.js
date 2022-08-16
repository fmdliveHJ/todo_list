import './App.css';
import React, { useState } from 'react';

export default function App() {
	const [todoData, setTodoData] = useState([]);
	const [value, setValue] = useState('');

	const btnStyle = {
		color: '#fff',
		border: 'none',
		padding: '5px 9px',
		borderRadius: '50%',
		cursor: 'pointer',
		float: 'right',
	};

	//동적함수 추가
	const getStyle = (completed) => {
		return {
			padding: '10px',
			borderBottom: '1px #ccc dotted',
			textDecoration: completed ? 'line-through' : null,
		};
	};

	//filter
	const handleClick = (id) => {
		let newTodoData = todoData.filter((data) => data.id !== id);
		setTodoData(newTodoData);
	};

	const handleChange = (e) => {
		setValue(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		let newTodo = {
			id: Date.now(),
			title: value,
			completed: false,
		};
		setTodoData((prev) => [...prev, newTodo]);
		setValue('');
	};

	const handleCompleteChangae = (id) => {
		let newTodoData = todoData.map((data) => {
			if (data.id === id) {
				data.completed = !data.completed;
			}
			return data;
		});
		setTodoData(newTodoData);
	};

	return (
		<div className='container'>
			<div className='todoBlock'>
				<div className='title'>
					<h1>할일 목록</h1>
				</div>

				{todoData.map((data) => (
					<div style={getStyle(data.completed)} key={data.id}>
						<input
							type='checkbox'
							defaultChecked={false}
							onChange={() => handleCompleteChangae(data.id)}
						/>
						{data.title}
						<button style={btnStyle} onClick={() => handleClick(data.id)}>
							x
						</button>
					</div>
				))}

				<form style={{ display: 'flex' }} onSubmit={handleSubmit}>
					<input
						type='text'
						name='value'
						id=''
						style={{ flex: '10', padding: '5px' }}
						placeholder='해야할일 입력하세요'
						value={value}
						onChange={handleChange}
					/>

					<input
						type='submit'
						value='입력'
						style={{ flex: 1 }}
						className='btn'
					/>
				</form>
			</div>
		</div>
	);
}
