import Lottie from 'lottie-react'
import logo from '../assets/images/logo.json'
import { useContext } from 'react'
import { AuthContext } from '../auth/AuthProvider'
import { Link } from 'react-router-dom'

const Login = () => {
    const { Login } = useContext(AuthContext)
    const handleSubmit = (e) => {
        e.preventDefault()
        const data = new FormData(e.target)
        const name = data.get('email')
        console.log('🚀 ~ handleSubmit ~ name:', name)
        const password = data.get('password')
        console.log('🚀 ~ handleSubmit ~ password:', password)
        Login(name, password)
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                console.log(err)
            })
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col  lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <div className="md:w-100">
                        <Lottie animationData={logo} loop={true} />
                    </div>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <form onSubmit={handleSubmit} className="fieldset">
                            <label className="label">Email</label>
                            <input
                                type="email"
                                name="email"
                                className="input"
                                placeholder="Email"
                            />
                            <label className="label">Password</label>
                            <input
                                type="password"
                                className="input"
                                name="password"
                                placeholder="Password"
                            />
                            <div className=''>
                                don't have an account
                                <Link className='ml-4 font-bold text-red-400' to="/signup">Sign up</Link>
                            </div>
                            <button className="btn btn-neutral mt-4">
                                Login
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
