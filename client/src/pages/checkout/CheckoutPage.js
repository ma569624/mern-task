import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Api from '../../Api/Api'
import EmailContext from '../../components/context/Context'

const CheckoutPage = () => {
    const [checkout, setcheckout] = useState({})
    // const [response, setresponse] = useState([])
    const navigate = useNavigate()
    const {data} = useContext(EmailContext)
    const [checkoutdata, setcheckoutdata] = useState({email: data})
    
    useEffect(() => {
        // console.log(data);
        setcheckoutdata({email: data })
        trackCheckoutPageVisit()
    },[])

    // Track checkout page visit
    function trackCheckoutPageVisit() {
        // Tracking logic here
        
        Api('/api/checkout', 'POST', checkoutdata).then((res) => {
            // setresponse(res);
            // try {
            //     if (!res.ok) {
            //         console.log('page visted')
            //     }
            // } catch (error) {
            //     console.log('not page visted')
            // }
        })
    }

    const ChangeHandle = (e) => {
        const { name, value } = e.target;
        setcheckout({
            ...checkout, [name]: value
        })
    }

    const SubmitHandler = async (event) => {
        event.preventDefault();
        // console.log("submit handler trigger", checkout)
        Api(`/api/checkout`, 'PUT', checkoutdata).then((res) => {
            // setresponse(res);
            try {
                if (!res.ok) {
                    navigate('/payment-success')
                }
            } catch (error) {
                console.log("payment not success")
            }
        })
        
        // console.warn("data add succesfully", response)
    }
    return (
        <section className="antialiased bg-gray-100 text-gray-600 min-h-screen p-4">
            <div className="h-full">
                {/* Pay component */}
                <div>
                    {/* Card background */}
                    <div className="relative px-4 sm:px-6 lg:px-8 max-w-lg mx-auto">
                        <img
                            className="rounded-t shadow-lg"
                            src="https://preview.cruip.com/mosaic/images/pay-bg.jpg"
                            width={460}
                            height={180}
                            alt="Pay background"
                        />
                    </div>
                    {/* Card body */}

                    <div
                        className="relative px-4 sm:px-6 lg:px-8 pb-8 max-w-lg mx-auto"
                        x-data="{ card: true }"
                    >
                        <div className="bg-white px-8 pb-6 rounded-b shadow-lg">
                            {/* Card form */}
                            <form onSubmit={SubmitHandler}>
                                <div x-show="card">
                                    <div className="space-y-4 pt-7">
                                        {/* Card Number */}
                                        <div className='mb-4'>
                                            <label
                                                className="block text-sm font-medium mb-1"
                                                htmlFor="card-nr"
                                            >
                                                Card Number <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                id="card-nr"
                                                className="text-sm text-gray-800 bg-white border rounded leading-5 py-2 px-3 border-gray-200 hover:border-gray-300 focus:border-indigo-300 shadow-sm placeholder-gray-400 focus:ring-0 w-full"
                                                type="number"
                                                name='CardNumber'
                                                onChange={(e) => ChangeHandle(e)}
                                                required
                                                value={checkout.CardNumber || ""}
                                                placeholder="1234 1234 1234 1234"
                                            />
                                        </div>
                                        {/* Expiry and CVC */}
                                        <div className="flex space-x-4">
                                            <div className="flex-1">
                                                <label
                                                    className="block text-sm font-medium mb-1"
                                                    htmlFor="card-expiry"
                                                >
                                                    Expiry Date <span className="text-red-500">*</span>
                                                </label>
                                                <input
                                                    id="card-expiry"
                                                    className="text-sm text-gray-800 bg-white border rounded leading-5 py-2 px-3 border-gray-200 hover:border-gray-300 focus:border-indigo-300 shadow-sm placeholder-gray-400 focus:ring-0 w-full"
                                                    type="text"
                                                    name='ExpiryDate'
                                                    onChange={(e) => ChangeHandle(e)}
                                                    required
                                                    value={checkout.ExpiryDate || ""}
                                                    placeholder="MM/YY"
                                                />
                                            </div>
                                            <div className="flex-1">
                                                <label
                                                    className="block text-sm font-medium mb-1"
                                                    htmlFor="card-cvc"
                                                >
                                                    CVC <span className="text-red-500">*</span>
                                                </label>
                                                <input
                                                    id="card-cvc"
                                                    className="text-sm text-gray-800 bg-white border rounded leading-5 py-2 px-3 border-gray-200 hover:border-gray-300 focus:border-indigo-300 shadow-sm placeholder-gray-400 focus:ring-0 w-full"
                                                    type="text"
                                                    name='CVC'
                                                    onChange={(e) => ChangeHandle(e)}
                                                    required
                                                    value={checkout.CVC || ""}
                                                    placeholder="CVC"
                                                />
                                            </div>
                                        </div>
                                        {/* Name on Card */}
                                        <div>
                                            <label
                                                className="block text-sm font-medium mb-1"
                                                htmlFor="card-name"
                                            >
                                                Name on Card <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                id="card-name"
                                                className="text-sm text-gray-800 bg-white border rounded leading-5 py-2 px-3 border-gray-200 hover:border-gray-300 focus:border-indigo-300 shadow-sm placeholder-gray-400 focus:ring-0 w-full"
                                                type="text"
                                                name='cardname'
                                                onChange={(e) => ChangeHandle(e)}
                                                required
                                                value={checkout.cardname || ""}
                                                placeholder="John Doe"
                                            />
                                        </div>
                                        {/* Email */}
                                        <div>
                                            <label
                                                className="block text-sm font-medium mb-1"
                                                htmlFor="card-email"
                                            >
                                                Email <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                id="card-email"
                                                className="text-sm text-gray-800 bg-white border rounded leading-5 py-2 px-3 border-gray-200 hover:border-gray-300 focus:border-indigo-300 shadow-sm placeholder-gray-400 focus:ring-0 w-full"
                                                type="email"
                                                name='courseemail'
                                                onChange={(e) => ChangeHandle(e)}
                                                required
                                                value={checkout.courseemail || ""}
                                                placeholder="john@company.com"
                                            />
                                        </div>
                                    </div>
                                    {/* Form footer */}
                                    <div className="mt-6">
                                        <div className="mb-4">
                                            <button type="submit" className="font-medium text-sm inline-flex items-center justify-center px-3 py-2 border border-transparent rounded leading-5 shadow-sm transition duration-150 ease-in-out w-full bg-indigo-500 hover:bg-indigo-600 text-white focus:outline-none focus-visible:ring-2">
                                                Pay $253.00
                                            </button>
                                        </div>
                                        <div className="text-xs text-gray-500 italic text-center">
                                            You'll be charged $253, including $48 for VAT in Italy
                                        </div>
                                    </div>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default CheckoutPage