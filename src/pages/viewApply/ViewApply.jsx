import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'

const ViewApply = () => {
    const data = useLoaderData()
    console.log('🚀 ~ ViewApply ~ data:', data)
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
                                    <td>{job.Facebook}</td>
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
