import React, { useEffect, useState } from "react";
import axios from "axios";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import tags from "./tags";
import Imagegrid from "./components/Imagegrid";
import TagButtons from "./components/TagButtons";
import SearchBar from "./components/SearchBar";

const App = () => {
	// State Variables
	const [photos, setPhotos] = useState([]);
	const [noPhotos, setnoPhotos] = useState(false);
	const [loader, setLoader] = useState(true);
	const [query, setQuery] = useState("nature");
	const [page, setPage] = useState(1); // Current page
	const [totalPages, setTotalPages] = useState(1); // Total number of pages

	//API
	const URL = "https://api.unsplash.com";
	const clientId = import.meta.env.VITE_REACT_APP_SECERT_KEY;

	// Fetch photos function
	const getPhotos = async () => {
		try {
			const response = await axios.get(
				`${URL}/search/photos?query=${query}&client_id=${clientId}&per_page=20&page=${page}`
			);

			const perPage = parseInt(response.headers["x-per-page"], 10);
			const total = parseInt(response.headers["x-total"], 10);

			if (response.data.results.length === 0) {
				setnoPhotos(true);
			} else {
				setPhotos(response.data.results);
				setnoPhotos(false);
				setTotalPages(Math.ceil(total / perPage));
			}
			setLoader(false);
		} catch (error) {
			console.error("Error fetching photos:", error);
		}
	};

	//Fetching photos using useEffects
	useEffect(() => {
		getPhotos();
		setLoader(true);
	}, [page]);

	// HandleSearch Function
	const handleSearch = () => {
		setPage(1);
		getPhotos();
		setLoader(true);
	};
	const handleTagSearch = (tag) => {
		setPage(1);
		setQuery(tag);
		getPhotos();
		setLoader(true);
	};

	const handleInputChange = (e) => {
		setQuery(e.target.value);
	};

	const enterKey = (e) => {
		if (e.keyCode === 13) {
			handleSearch();
			setLoader(true);
		}
	};

	// Handle Pagination

	const nextPage = async () => {
		if (page < totalPages) {
			setLoader(true);
			setPage(page + 1);
			setPhotos([]);
			await getPhotos();
		}
	};

	const prevPage = async () => {
		if (page > 1) {
			setLoader(true);
			setPage(page - 1);
			setPhotos([]);
			await getPhotos();
		}
	};

	return (
		<>
			{/* Navbar */}
			<Navbar />

			{/* SeacrhBar */}
			<SearchBar
				handleTagSearch={handleTagSearch}
				handleInputChange={handleInputChange}
				handleSearch={handleSearch}
				query={query}
			/>
			{/* tags component */}
			<TagButtons tags={tags} handleTagSearch={handleTagSearch} />

			{/* Image Grid */}
			<Imagegrid loader={loader} noPhotos={noPhotos} photos={photos} />

			{/* Pagination */}
			<div className='join flex justify-center items-center my-20'>
				<button
					onClick={prevPage}
					disabled={page <= 1}
					className='join-item btn'
				>
					« Prev
				</button>
				<button className='join-item btn'>Page {page}</button>
				<button onClick={nextPage} className='join-item btn'>
					Next »
				</button>
			</div>
			<Footer />
		</>
	);
};

export default App;
