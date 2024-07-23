import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { removeMovie } from '../../Store/LikedMovies';

function TableList({ movie, index, updateFunct }) {
    const dispatch = useDispatch()

    function handleDelete(movie) {
        updateFunct()
        dispatch(removeMovie(movie))

    }

    return (

        <tr key={index}>
            <td className="py-4 px-6 max-md:px-2">
                <img src={movie.image} alt="Movie Thumbnail" className="w-[76px] h-[78px] max-md:w-auto max-md:h-auto" />
            </td>
            <td className="py-4 px-6 max-md:px-2 truncate">{movie.name}</td>
            <td className="py-4 pl-[5.5rem] max-md:px-2">{movie.year}</td>
            <td className="py-4 pl-[3rem] max-md:px-2">{movie.type}</td>
            <td className="py-4 px-6">
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded" onClick={() => handleDelete(movie)}>
                    Delete
                </button>
            </td>
        </tr>


    )
}

export default TableList