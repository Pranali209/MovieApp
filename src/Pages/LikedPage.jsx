import React from 'react'
import { Header, TableList } from '../Components'
import { clearMovies } from '../Store/LikedMovies'
import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom';
function LikedPage() {
    const { userId } = useParams();
    const [LikedMoviesList, setLikedMovieList] = useState([])
    const data = useSelector(state => state.LikedMovies.LikedMovies)
    const dispatch = useDispatch()
    let filteredMovies = []
    const [currentUser, setcurrentUser] = useState("")


    useEffect(() => {
        filteredMovies = data.filter(movie => movie.userId === userId);
        console.log(filteredMovies, " filtermovies");
        setLikedMovieList(filteredMovies);

    }, [userId, data]);

    useEffect(() => {
        setcurrentUser(filteredMovies.find((user) => user.userId === userId))
        console.log(currentUser, "currentuser");
    }, [userId])

    function updateMovieList(params) {
        setLikedMovieList([])
    }

    function handleDeleteAll() {
        setLikedMovieList([])
        dispatch(clearMovies())

    }


    return (
        <>

            <div className='bg-main w-full p-10 h-screen flex justify-around max-md:flex-col'>
                <div className=" bg-subMain text-white w-64  h-fit p-4 border border-dry mr-7 rounded-sm">
                    <h2 className="text-2xl font-bold mb-4">Dashboard {currentUser ? currentUser.username.toUpperCase() : "User not found"}</h2>
                    <ul>
                        <label>
                            <input type="radio" name="radio" id="Women" className='radioBtn' checked />
                            <span className='h-[32px] block cursor-pointer bg-subMain py-[0.1em] px-[0.75em] 
                            relative ml-[0.0625em] text-center tracking-[0.05em] m-5 NavigationBar text-lg'> Liked Movies </span>
                        </label>

                        <label>
                            <input type="radio" name="radio" id="Women" className='radioBtn' />
                            <Link to='/' className='h-[32px] block cursor-pointer bg-subMain py-[0.1em] px-[0.75em] 
                            relative ml-[0.0625em] text-center tracking-[0.05em] m-5 NavigationBar text-lg'>Go Back</Link>


                        </label>
                    </ul>
                </div>

                <div className="flex-1 p-6 bg-subMain text-white rounded-sm border border-dry">
                    <div className="flex justify-between items-center mb-4">
                        <h1 className="text-3xl font-bold">Movies List</h1>
                        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded max-md:px-2 max-md:py-1"
                            onClick={handleDeleteAll}>Delete All</button>
                    </div>
                    <div className='overflow-x-auto'>
                        <table className="min-w-full bg-subMain h-auto max-md:table-auto border-collapse">
                            <thead>
                                <tr>
                                    <th className="w-[24%] p-4">Image</th>
                                    <th className="w-[24%] p-4">Name</th>
                                    <th className="w-[20%] p-4">Year</th>
                                    <th className="p-4">Type</th>
                                </tr>
                            </thead>
                            <tbody>
                                {LikedMoviesList.map((item, index) => (
                                    <TableList movie={item} key={index} updateFunct={updateMovieList} />
                                ))}
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </>

    )
}

export default LikedPage