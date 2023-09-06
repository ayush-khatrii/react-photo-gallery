import React from "react";
import Image from './Image'

const Imagegrid = ({loader , noPhotos , photos}) => {
	return (
		<div className='rowImage justify-center text-center grid md:grid-cols-2 lg:grid-cols-3 px-5 gap-10  mx-auto grid-flow-row max-w-7xl '>
			{loader ? (
				<p className=''>Loading....</p>
			) : noPhotos ? (
				<p className=''>No photos found</p>
			) : (
				photos.map((item, id) => <Image item={item} key={id} />)
			)}
		</div>
	);
};

export default Imagegrid;
