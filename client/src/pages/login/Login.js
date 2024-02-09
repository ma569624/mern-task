import React, { useContext, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import Api from '../../Api/Api'
import EmailContext from '../../components/context/Context'

const Login = () => {
    const [login, setlogin] = useState({})
    // const [response, setresponse] = useState([])
    const navigate = useNavigate();
    const { setData } = useContext(EmailContext);

    const ChangeHandle = (e) => {
        const { name, value } = e.target;
        setlogin({
            ...login, [name]: value
        })


        // console.log(login)
    }

    const SubmitHandler = async (event) => {
        event.preventDefault();
        // console.log("submit handler trigger", login)
        Api('/api/login', 'POST', login).then((res) => {
            // setresponse(res);
            try {
                if (!res.ok) {
                    navigate('/home')
                    // console.log(login.email)
                    setData(login.email)
                    // console.log(data);
                }
            } catch (error) {
                // console.log("incoorect details")
                alert("incoorect details Please check Login Details");
            }
        })
        // console.warn("data add succesfully", response)
    }
    return (
        <section className='antialiased bg-gray-200 text-gray-900 font-sans'>

            <div className="flex items-center h-screen w-full">
                <div className="w-full bg-white rounded shadow-lg p-8 m-4 md:max-w-sm md:mx-auto">
                    <span className="block w-full text-xl uppercase font-bold mb-4">Login</span>
                    <form className="mb-4" onSubmit={(e) => SubmitHandler(e)}>
                        <div className="mb-4 md:w-full">
                            <label htmlFor="email" className="block text-xs mb-1">
                                Email
                            </label>
                            <input
                                className="w-full border rounded p-2 outline-none focus:shadow-outline"
                                type="email"
                                name="email"
                                id="email"
                                onChange={(e) => ChangeHandle(e)}
                                value={login.email || ""}
                                placeholder="Username or Email"
                                required
                            />
                        </div>
                        <div className="mb-6 md:w-full">
                            <label htmlFor="password" className="block text-xs mb-1">
                                Password
                            </label>
                            <input
                                className="w-full border rounded p-2 outline-none focus:shadow-outline"
                                type="password"
                                name="password"
                                id="password"
                                placeholder="Password"
                                onChange={(e) => ChangeHandle(e)}
                                value={login.password || ""}
                                required
                            />
                        </div>
                        <button className="bg-green-500 hover:bg-green-700 text-white uppercase text-sm font-semibold px-4 py-2 rounded">
                            Login
                        </button>

                    </form>
                    <NavLink to={'/signup'}>Don't have Account</NavLink>
                </div>
            </div>

        </section>

    )
}

export default Login