import React from 'react'
import { NavLink } from 'react-router-dom'


const Home = () => {
    return (
        <main>
            <div className="antialiased flex justify-center items-center h-screen bg-purple-500">
                <div className=" flex rounded-lg bg-white shadow-md overflow-hidden">
                    <div className="p-4 bg-purple-900 w-56">
                        <div className="text-purple-400 uppercase tracking-wider text-sm">
                            course
                        </div>
                        <div className="text-white text-2xl">Javascript Fondamentals</div>
                        <div className="text-purple-400 mt-12 text-sm">
                            View all chapters{" "}
                            <svg
                                className="inline w-2 h-2 fill-current"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                            >
                                <path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" />
                            </svg>
                        </div>
                    </div>
                    <div className="p-4">
                        <div className="flex justify-between">
                            <div className="text-purple-400 uppercase tracking-wider text-sm">
                                Chapter 4
                            </div>
                            <div className="pt-1 pl-32">
                                <div className="bg-purple-200 rounded-full h-2 w-48 overflow-hidden">
                                    <div className="h-2 bg-purple-900 w-32" />
                                </div>
                                <div className="text-xs text-purple-400 text-right uppercase">
                                    6/9 chapters
                                </div>
                            </div>
                        </div>
                        <div className="text-3xl text-purple-900">Callbacks &amp; Closures</div>
                        <div className="flex justify-end pt-12">
                            <NavLink to={'/checkout'} className="px-12 py-2 bg-purple-900 rounded-full text-purple-100 text-lg shadow-md hover:bg-purple-800">
                                Continue
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>

        </main>
    )
}

export default Home
