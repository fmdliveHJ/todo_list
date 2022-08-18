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
			<form onSubmit={handleSubmit} className='flex pt-2'>
				<input
					type='text'
					name='value'
					id=''
					className='w-full px-3 py-2 mr-4 text-gray-500 border rounded'
					placeholder='해야할일 입력하세요'
					value={value}
					onChange={handleChange}
				/>

				<input
					type='submit'
					value='입력'
					className='p-2 text-blue-400 border-2 rounded hover:text-white hover:bg-blue-200'
				/>
			</form>
		</div>
	);
};

export default Form;
