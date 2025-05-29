import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Jobs = () => {
    const [jobs, setJobs] = useState([])

    const [showAll, setShowAll] = useState(false)

    const visibleJobs = showAll ? jobs : jobs.slice(0, 9)

    useEffect(() => {
        fetch('https://job-protal-server-steel.vercel.app/jobs')
            .then((res) => res.json())
            .then((data) => setJobs(data))
    })
    return (
        <div className="grid relative md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-4">
            {visibleJobs.map((job) => {
                return (
                    <div className="card text-black  w-full bg-gray-700 shadow-sm">
                        <div className="flex justify-around items-center font-bold w-full ">
                            <span className="text-white">
                                {job.applicationDeadline}
                            </span>
                            <img
                                className="w-20"
                                src={`${job.company_logo}`}
                                alt="Shoes"
                            />
                            <span className="text-white">{job.jobType}</span>
                        </div>
                        <div className="card-body">
                            <h2 className="card-title text-white">
                                {job.title}
                            </h2>
                            <p className="text-white">{job.location}</p>
                            <div className="flex md:flex-row flex-col">
                                {job.requirements.map((requirement) => {
                                    return (
                                        <li className="border py-2 px-3 bg-green-300 text-black rounded-3xl hover:bg-green-400 list-none">
                                            {requirement}
                                        </li>
                                    )
                                })}
                            </div>
                            <div className="card-actions text-white justify-between">
                                {job?.salaryRange.min &&
                                    job?.salaryRange.max && (
                                        <span>
                                            Salary: ${job?.salaryRange.min} - $
                                            {job?.salaryRange.max}
                                        </span>
                                    )}
                                <Link
                                    to={`/jobs/${job._id}`}
                                    className="btn btn-primary"
                                >
                                    Apply Now
                                </Link>
                            </div>
                        </div>
                    </div>
                )
            })}
            <div className="absolute bottom-[-46px] right-0 ">
                {!showAll && jobs.length > 9 && (
                    <button
                        onClick={() => setShowAll(true)}
                        className="mt-4 w-30 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                        See More
                    </button>
                )}
            </div>
        </div>
    )
}

export default Jobs
