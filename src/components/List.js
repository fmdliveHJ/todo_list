import React from 'react';

function List({ todoData, setTodoData }) {
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
		<div>
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
		</div>
	);
}

export default List;
