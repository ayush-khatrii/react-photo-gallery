import React from "react";

const SearchBar = ({ handleInputChange, enterKey, handleSearch, query }) => {
	return (
		<div className='SeacrhBar gap-3 flex justify-center mb-10 '>
			<input
				type='text'
				value={query}
				onChange={handleInputChange}
				onKeyDown={enterKey}
				placeholder='nature...'
				className='input input-bordered text-white md:w-auto'
			/>
			<button onClick={handleSearch} className='btn btn-active '>
				Seacrh
			</button>
		</div>
	);
};

export default SearchBar;
