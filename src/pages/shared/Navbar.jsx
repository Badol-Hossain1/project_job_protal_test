import { useContext, useState } from 'react'
import { NavbarMenu } from '../data/navData'
import { AnimatePresence, motion } from 'motion/react'

import logo from '../../assets/images/pngegg.png'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../auth/AuthProvider'

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const { user, LoginOut } = useContext(AuthContext)
    const handleLogout = () => {
        LoginOut()
    }
    return (
        <div className="py-8 mx-6">
            <nav>
                <div className="container flex justify-between">
                    <Link to="/">
                        <img
                            src={logo}
                            className="md:w-20 w-14 cursor-pointer"
                            alt=""
                        />
                    </Link>
                    <ul className=" hidden md:flex items-center gap-6 text-gray-600">
                        {NavbarMenu.map((menu, id) => {
                            return (
                                <li className="text-white font-bold" key={id}>
                                    <a href={menu.link}>
                                        {id === NavbarMenu.length - 1 ? (
                                            user ? (
                                                <button
                                                    className=" bg-blue-600  py-2 px-3 rounded-md cursor-pointer"
                                                    onClick={handleLogout}
                                                >
                                                    Logout
                                                </button>
                                            ) : (
                                                <button className="bg-blue-600  py-2 px-3 rounded-md cursor-pointer">
                                                    Login
                                                </button>
                                            )
                                        ) : (
                                            menu.title
                                        )}
                                    </a>
                                </li>
                            )
                        })}
                    </ul>
                    <li
                        className="cursor-pointer md:hidden block"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? 'X' : '☰'}
                    </li>

                    {/* responsive nav */}
                </div>
            </nav>
            <div className="">
                <AnimatePresence mode="wait">
                    {open && (
                        <motion.div
                            initial={{ opacity: 0, y: -100 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -50 }}
                            transition={{ duration: 0.3 }}
                            className="absolute bg-yellow-200 top-20 left-0 w-full h-screen z-20"
                        >
                            <div>
                                <ul className="flex flex-col items-center gap-6 text-gray-600 justify-center">
                                    {NavbarMenu.map((menu) => {
                                        return (
                                            <li
                                                key={menu.id}
                                                className="py-4 text-gray-600 font-bold"
                                            >
                                                <a href={menu.link}>
                                                    {menu.title}
                                                </a>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    )
}

export default Navbar
