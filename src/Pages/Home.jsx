import React, { useEffect, useState } from 'react'
import { Box, Header ,Banner } from '../Components'

function Home() {
    const [MoviesList, setMoviesList] = useState([]);
    const [loading, setLoading] = useState(false)
    const [showmodal, setShowModal] = useState(false)
    const [banner , setbanner] = useState('');

    const apikey = String(import.meta.env.VITE_API_KEY) ;
  
    function OnRequestLoginOpen(params) {
        setShowModal(true)
    }
    
    function OnRequestLoginClose(params) {
        setShowModal(false)
    }
   
    
    useEffect(() => {

        async function DataFetching(params) {
            setLoading(true)
            try {

                const data = await fetch(`http://www.omdbapi.com/?apikey=${apikey}&s=movies&y=2023`)
                const Movies = await data.json()


                if (data) {
                    setMoviesList(Movies.Search)

                }
                else {
                    console.log("Error Loading the Data");
                }
            }
            catch (err) {
                console.log("Error:", err);
            }
            finally {
                setLoading(false)
            }
        }
        DataFetching()
        setInterval(() => {
            const data = fetch(`http://www.omdbapi.com/?apikey=${apikey}&s=movies`)
        }, 10000);
    }, [])

    async function FilterBySearch(value) {

        if (value) {
            console.log(value);
            const newMovies = await fetch(`http://www.omdbapi.com/?apikey=${apikey}&s=${value}`)
            const Movies = await newMovies.json()
            if (Movies) {
                setMoviesList(Movies.Search)
            }
        }

    }

    return (
        <>
            <Header FilterBySearch={(value) => FilterBySearch(value)}
                showmodal={showmodal}
                setShowModal={OnRequestLoginOpen}
                setHideModal={OnRequestLoginClose} 
             />
            <div className={`bg-main w-full ${showmodal ? 'filter blur-sm' : ''}`}>


                <div className='w-[80%] m-auto'>
                   <Banner/>

                    <h2 className=' text-3xl text-star my-5'>Latest Movies</h2>
                    <div className='flex justify-evenly flex-wrap'>
                        {MoviesList ? MoviesList.map((movie) => {
                            return <Box key={movie.imdbID}
                                image={movie}
                                showmodal={showmodal}
                                setShowModal={OnRequestLoginOpen}
                                setHideModal={OnRequestLoginClose} />
                        }) : ""}
                    </div>

                </div>


            </div>
        </>
    )
}

export default Home