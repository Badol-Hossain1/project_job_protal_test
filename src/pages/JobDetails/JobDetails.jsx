import { Link, useLoaderData } from 'react-router-dom'

const JobDetails = () => {
    const job = useLoaderData()
    console.log('🚀 ~ JobDetails ~ job:', job)
    return (
        <div className="bg-white relative min-h-screen p-4 rounded-xl text-black">
            <div>
                <div className="flex items-center gap-4">
                    <img className="" src={job.company_logo} alt="" />
                    <p className="text-black font-bold">{job.company}</p>
                </div>
                <div className="flex items-center justify-between">
                    <span className="font-bold">
                        DeadLine: {job.applicationDeadline}
                    </span>
                    <h1 className="text-end font-bold">{job.title}</h1>
                </div>
                <span>📍{job.location}</span>

                <p className="whitespace-pre-line">{job.description}</p>
            </div>

            <div className="flex flex-wrap  gap-4">
                {job.responsibilities.map((item) => {
                    return (
                        <li className="list-none border-none rounded-full py-2 px-3 font-bold">
                            {item}
                        </li>
                    )
                })}
            </div>

            <div className="flex  flex-wrap  gap-4">
                {job.requirements.map((item) => {
                    return (
                        <li className="list-none  border-none rounded-full py-2 px-3 bg-amber-300 font-bold hover:bg-amber-400">
                            {item}
                        </li>
                    )
                })}
            </div>

            <div className="flex md:absolute bottom-0  flex-col md:flex-row left-0 px-4 py-4 justify-between  w-full ">
                Salary: {job.salaryRange.min} bdt to {job.salaryRange.max} bdt
                <div className="flex justify-between mt-6 md:justify-baseline gap-6 items-center">
                    <Link
                        className="px-3.5 py-2 rounded-full bg-blue-400 hover:bg-blue-500 cursor-pointer font-bold  text-white"
                        to="/"
                    >
                        Go Back
                    </Link>
                    <button className="px-3.5 py-2 rounded-full bg-blue-400 hover:bg-blue-500 cursor-pointer font-bold  text-white">
                       <Link to={`/JobApply/${job._id}`}> apply</Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default JobDetails
