import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Jobs = () => {
    const [jobs, setJobs] = useState([])
    console.log('🚀 ~ Jobs ~ jobs:', jobs)
    useEffect(() => {
        fetch('http://localhost:5000/jobs')
            .then((res) => res.json())
            .then((data) => setJobs(data))
    })
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-4">
            {jobs.map((job) => {
                return (
                    <div className="card text-black  w-full bg-amber-50 shadow-sm">
                        <div className="flex justify-around items-center font-bold w-full ">
                            <img src={`${job.company_logo}`} alt="Shoes" />
                            <span>{job.jobType}</span>
                        </div>
                        <div className="card-body">
                            <h2 className="card-title">{job.title}</h2>
                            <p>{job.location}</p>
                           <div className='flex md:flex-row flex-col'>
                             {job.requirements.map((requirement) => {
                                return (
                                    <li className="border py-2 px-3 bg-gray-500 text-white list-none">
                                        {requirement}
                                    </li>
                                )
                            })}
                           </div>
                            <div className="card-actions justify-between">
                                {
                                    job.salaryRange.min && job.salaryRange.max && (
                                        <span>Salary: ${job.salaryRange.min}  -  ${job.salaryRange.max}</span>
                                    )
                                }
                                <Link to={job._id} className="btn btn-primary">
                                    Apply Now
                                </Link>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Jobs
