import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../auth/AuthProvider'

const MyApplication = () => {
    const [applyJobs, setApplyJobs] = useState([])
    console.log('🚀 ~ MyApplication ~ applyJobs:', applyJobs)
    const { user } = useContext(AuthContext)

    useEffect(() => {
        fetch(`http://localhost:5000/job-application?email=${user.email}`)
            .then((res) => res.json())
            .then((data) => setApplyJobs(data))
            .catch((err) => console.log(err))
    }, [user.email])

    return (
        <div className="min-h-screen">
            <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="">
                            <th>Facebook</th>
                            <th>Links</th>
                            <th>Linkedin url</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {applyJobs.map((job) => {
                            return (
                                <tr>
                                    <th>{job.Facebook}</th>
                                    <td>{job.Github}</td>
                                    <td>{job.Linkedin}</td>
                                    <td>{job.applicant_email}</td>
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
