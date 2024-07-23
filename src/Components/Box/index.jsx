import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { addMovie } from '../../Store/LikedMovies'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Login from '../../Pages/Login'

function Box({ image, showmodal, setShowModal, setHideModal }) {
    const dispatch = useDispatch();
    const [isLoggedIn, setLoggedIn] = useState(false);
    const SignUpData = useSelector(state => state.SignUp.SignUpDetails);
    const navigate = useNavigate();

    function HandleOnLike() {

        console.log(SignUpData);

        if (SignUpData.length > 0) {

            SignUpData.map((user) => {

                if (user.loggedIn) {
                   
                    const combinedPayload = {
                        userId: user.id,
                        userName :user.email.split('@')[0],
                        movie : image
                      };
                     dispatch(addMovie(combinedPayload));

                    navigate(`/WishList/${user.id}`)
                } else {

                    setShowModal()
                    setLoggedIn(true)
                }
            });
        } else {

            setShowModal()
            setLoggedIn(true)
        }
    }

    return (
        <>
            <div className="relative drop-shadow h-72 w-56 border border-star m-5">
                <img src={image.Poster} className="h-full w-full object-cover" alt="movieImage" />
                <div className="w-full h-14 movie-info z-50">
                    <h2 className="text-white text-lg mb-3">
                        {image.Title.length > 10 ? image.Title.substring(0, 15) + "..." : image.Title + " "}
                    </h2>
                    <span className="px-2 py-[3px] bg-star rounded-md mb-[0.3rem] ml-[42px]" onClick={HandleOnLike}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            className="w-5 h-4 fill-white inline mt-[0.3rem] mb-[0.3rem]"
                        >
                            <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
                        </svg>
                    </span>
                </div>
            </div>
            {/* <Login showmodal={showmodal} setHideModal={setHideModal} /> */}
        </>
    );
}

export default Box