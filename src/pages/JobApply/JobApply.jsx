import React, { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AuthContext } from '../../auth/AuthProvider'
import Swal from 'sweetalert2'

const JobApply = () => {
    const { id } = useParams()
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()
    // console.log("🚀 ~ JobApply ~ user:", user)
    const handleApply = (e) => {
        e.preventDefault()
        const From = new FormData(e.target)
        const Facebook = From.get('Facebook')
        const Github = From.get('Github')
        const Linkedin = From.get('Linkedin')
        // console.log(Facebook, Github, Linkedin)
        const jobApplication = {
            job_id: id,
            applicant_email: user.email,
            Linkedin,
            Github,
            Facebook,
        }
        fetch(
            'https://job-protal-server-badols-projects.vercel.app/jobs/job-applications',
            {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(jobApplication),
            }
        )
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId) {
                    Swal.fire('successfully apply')
                    navigate('/')
                }
            })
            .catch((err) => console.log(err))
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">
                        Thanks for Applying This Job
                    </h1>
                    <p className="py-6">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ut officia dolores ad iste neque perferendis debitis
                        quos cum similique maiores, nulla dolorum aperiam animi,
                        numquam quod corrupti eaque laudantium sint.
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <form onSubmit={handleApply} className="flex  flex-col">
                            <label className="label font-bold">
                                Linkedin Url
                            </label>
                            <input
                                name="Linkedin"
                                type="url"
                                required
                                className="input "
                                placeholder="Linkedin"
                            />
                            <label className="label font-bold">
                                GitHub Url
                            </label>
                            <input
                                name="Github"
                                type="url"
                                required
                                className="input"
                                placeholder="Github"
                            />
                            <label className="label font-bold">
                                Facebook Url
                            </label>
                            <input
                                name="Facebook"
                                type="url"
                                className="input"
                                placeholder="Facebook"
                            />

                            <button className="btn bg-blue-500 text-white font-bold border-none text-xl w-24 mt-4">
                                submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JobApply
