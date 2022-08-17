import React from 'react';

const Form = ({ setValue, setTodoData, value }) => {
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

	return (
		<div>
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

				<input type='submit' value='입력' style={{ flex: 1 }} className='btn' />
			</form>
		</div>
	);
};

export default Form;
