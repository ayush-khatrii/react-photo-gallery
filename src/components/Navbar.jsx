import React from "react";

const Navbar = () => {
	return (
		<nav className='navbar bg-base-100 mb-10 shadow-md'>
			<div className='navbar-start'>
				<div className='dropdown'>
					<label tabIndex={0} className='btn btn-ghost btn-circle'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='h-5 w-5'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								d='M4 6h16M4 12h16M4 18h7'
							/>
						</svg>
					</label>
					<ul
						tabIndex={0}
						className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-md bg-base-100 rounded-box w-52'
					>
						<li>
							<a target='_blank' href='https://ayushkhatri.netlify.app/'>
								Portfolio
							</a>
						</li>
					</ul>
				</div>
			</div>
			<div className='navbar-center'>
				<a className='font-medium  normal-case text-rose-500 text-xl'>
					React Photo Gallery
				</a>
			</div>
			<div className='navbar-end opacity-0'>
				<button className='btn '>Hello</button>
			</div>
		</nav>
	);
};

export default Navbar;
