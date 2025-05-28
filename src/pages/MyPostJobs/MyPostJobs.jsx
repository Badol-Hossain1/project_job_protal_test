import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../auth/AuthProvider'
import { Link } from 'react-router-dom'

const MyPostJobs = () => {
    const [jobs, setJobs] = useState([])
    console.log('🚀 ~ MyPostJobs ~ jobs:', jobs)
    const { user } = useContext(AuthContext)
    console.log('🚀 ~ MyPostJobs ~ user:', user.email)
    useEffect(() => {
        fetch(
            `https://job-protal-server-qp0eixdxe-badols-projects.vercel.app/jobs?email=${user.email}`
        )
            .then((res) => res.json())
            .then((data) => setJobs(data))
    }, [user.email])
    return (
        <div>
            <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>title</th>
                            <th>type</th>
                            <th>name</th>
                            <th>Last Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {jobs.map((job) => {
                            return (
                                <tr>
                                    <th>{job.title}</th>
                                    <td>{job.jobType}</td>
                                    <td>{job.company_name}</td>
                                    <td>{job.applicationDeadline}</td>
                                    <td>
                                        <Link
                                            to={`/viewApplications/${job._id}`}
                                        >
                                            {' '}
                                            view{' '}
                                        </Link>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default MyPostJobs
