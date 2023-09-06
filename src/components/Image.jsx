import React from "react";

const Image = ({ item }) => {
	return (
		<div>
			<a href={item.urls.full} target="_blank" rel="noreferrer">
				<img
					className='cursor-pointer object-cover rounded h-72 w-full shadow-md shadow-gray-900 hover:-translate-y-4 transition-all ease-in-out duration-300'
					src={item.urls.regular}
					alt={item.alt_description}
				/>
			</a>
		</div>
	);
};

export default Image;
