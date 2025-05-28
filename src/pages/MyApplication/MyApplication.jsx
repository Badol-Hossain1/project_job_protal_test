import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../auth/AuthProvider'
import Swal from 'sweetalert2'
import axios from 'axios'

const MyApplication = () => {
    const [applyJobs, setApplyJobs] = useState([])
    console.log('🚀 ~ MyApplication ~ applyJobs:', applyJobs)
    const { user } = useContext(AuthContext)

    useEffect(() => {
        if (!user?.email) return
        // fetch(`http://localhost:5000/job-application?email=${user.email}`)
        //     .then((res) => res.json())
        //     .then((data) => setApplyJobs(data))
        //     .catch((err) => console.log(err))
        axios
            .get(
                `https://job-protal-server-h9tjtouty-badols-projects.vercel.app/job-application?email=${user.email}`,
                {
                    withCredentials: true,
                }
            )
            .then((res) => setApplyJobs(res.data))
    }, [user.email])

    const handleDelete = async (id) => {
        console.log(id)

        const res = await fetch(
            `http://localhost:5000/job-applications/${id}`,
            {
                method: 'DELETE',
            }
        )
        console.log('🚀 ~ handleDelete ~ res:', res)
        const data = await res.json()
        if (data.deletedCount > 0) {
            Swal.fire({
                title: 'Good job!',
                text: 'You clicked the delete button!',
                icon: 'success',
            })

            setApplyJobs((prev) => prev.filter((app) => app._id !== id))
        }
    }

    return (
        <div className="h-screen">
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input
                                        type="checkbox"
                                        className="checkbox"
                                    />
                                </label>
                            </th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Email</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {applyJobs.map((job) => {
                            return (
                                <tr>
                                    <th>
                                        <label>
                                            <input
                                                type="checkbox"
                                                className="checkbox"
                                            />
                                        </label>
                                    </th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src={job.company_logo}
                                                        alt="Avatar Tailwind CSS Component"
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">
                                                    {job.company}
                                                </div>
                                                <div className="text-sm opacity-50">
                                                    {job.location}
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {job.title}
                                        <br />
                                        <span className="badge badge-ghost badge-sm">
                                            Desktop Support Technician
                                        </span>
                                    </td>
                                    <td>{job.hr_email}</td>
                                    <th>
                                        <button
                                            onClick={() =>
                                                handleDelete(job._id)
                                            }
                                            className="btn btn-ghost btn-md"
                                        >
                                            Delete
                                        </button>
                                    </th>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default MyApplication
