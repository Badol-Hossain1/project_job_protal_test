import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'

const ViewApply = () => {
    const data = useLoaderData()
    console.log('🚀 ~ ViewApply ~ data:', data)
    const handleChange = (e, id) => {
        const data = {
            status: e.target.value,
        }
        fetch(
            `https://job-protal-server-badols-projects.vercel.app/jobs/job-applications/${id}`,
            {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(data),
            }
        )
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
            })
    }
    return (
        <div>
            <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>applicant email</th>
                            <th>linkedin</th>
                            <th>Github</th>
                            <th>Facebook</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((job) => {
                            return (
                                <tr>
                                    <th>{job.applicant_email}</th>
                                    <td>{job.Linkedin}</td>
                                    <td>{job.Github}</td>

                                    <td>
                                        <select
                                            onChange={(e) =>
                                                handleChange(e, job._id)
                                            }
                                            defaultValue={
                                                job.status || 'change status'
                                            }
                                            className="select select-lg"
                                        >
                                            <option disabled>
                                                change status
                                            </option>
                                            <option>selected</option>
                                            <option>rejected</option>
                                            <option>under review</option>
                                        </select>
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

export default ViewApply
