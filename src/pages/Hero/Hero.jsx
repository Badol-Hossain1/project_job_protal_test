import Lottie from 'lottie-react'
import logo from '../../assets/images/hello.json'

const Hero = () => {
    return (
        <div className="flex  items-center md:flex-row flex-col justify-between">
            <div>
                <h1 className="text-3xl font-bold ">
                    {' '}
                    The <span className="text-blue-600">Easiest Way</span>{' '}
                </h1>
                <h1 className="text-3xl font-bold ">to get your job</h1>
                <p className="mt-10">
                    Each month, more than 3 million job seekers turn to website
                    in their search for work, making over 140,000 applications
                    every single day
                </p>
                <div className="join mt-4">
                    <div>
                        <label className="input validator join-item">
                            <svg
                                className="h-[1em] opacity-50"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                            >
                                <g
                                    strokeLinejoin="round"
                                    strokeLinecap="round"
                                    strokeWidth="2.5"
                                    fill="none"
                                    stroke="currentColor"
                                >
                                    <rect
                                        width="20"
                                        height="16"
                                        x="2"
                                        y="4"
                                        rx="2"
                                    ></rect>
                                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                                </g>
                            </svg>
                            <input
                                type="email"
                                placeholder="mail@site.com"
                                required
                            />
                        </label>
                        <div className="validator-hint hidden">
                            Enter valid email address
                        </div>
                    </div>
                    <button className="btn btn-neutral join-item">Join</button>
                </div>
            </div>
            <div className="w-full h-full">
                <Lottie animationData={logo}></Lottie>
            </div>
        </div>
    )
}

export default Hero
