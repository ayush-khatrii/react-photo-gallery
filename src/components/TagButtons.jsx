import React from "react";

const TagButtons = ({ tags, handleTagSearch }) => {
	return (
		<div className='tags flex flex-wrap whitespace-nowrap justify-center my-20 gap-5 text-center items-center'>
			{tags.map((tag, index) => (
				<li
					onClick={() => handleTagSearch(tag.name)}
					key={index}
					className='btn btn-outline'
				>
					{tag.name}
				</li>
			))}
		</div>
	);
};

export default TagButtons;
