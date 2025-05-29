import Swal from 'sweetalert2'

const AddJob = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
        const data = new FormData(e.target)

        const jobs = Object.fromEntries(data)

        const { min, max, currency, ...newJob } = jobs
        newJob.salaryRange = { min, max, currency }
        newJob.requirements = newJob.requirements.split('\n')
        newJob.responsibilities = newJob.responsibilities.split('\n')

        fetch(
            'https://job-protal-server-badols-projects.vercel.app/jobs/jobs',
            {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(newJob),
            }
        )
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                Swal.fire('Job is created')
            })

        console.log('🚀 ~ AddJob ~ newJob:', newJob)
    }
    return (
        <div className="mx-4">
            <form onSubmit={handleSubmit} class="w-full min-h-screen ">
                <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label
                            class="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                            for="grid-first-name"
                        >
                            Title
                        </label>
                        <input
                            class="appearance-none block w-full bg-gray-700 text-white border-none border-none-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-black"
                            name="title"
                            type="text"
                            placeholder="Jane"
                        />
                    </div>
                    <div class="w-full md:w-1/2 px-3">
                        <select
                            class="block appearance-none w-full bg-gray-700 border-none border-none-gray-200 text-white py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-black focus:border-none-gray-500"
                            id="grid-state"
                            name="jobType"
                        >
                            <option>remote</option>
                            <option>onsite</option>
                            <option>hybrid</option>
                        </select>
                    </div>
                    <div class="w-full md:w-1/2 px-3">
                        <label
                            class="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                            for="grid-last-name"
                        >
                            requirements
                        </label>
                        <textarea
                            class="appearance-none block w-full bg-gray-700 text-white border-none border-none-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-black focus:border-none-gray-500"
                            name="requirements"
                            type="text"
                            placeholder="requirements"
                        />
                    </div>
                    <div class="w-full md:w-1/2 px-3">
                        <label
                            class="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                            for="grid-last-name"
                        >
                            responsibilities
                        </label>
                        <textarea
                            class="appearance-none block w-full bg-gray-700 text-white border-none border-none-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-black focus:border-none-gray-500"
                            name="responsibilities"
                            type="text"
                            placeholder="requirements"
                        />
                    </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full px-3">
                        <label
                            class="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                            for=""
                        >
                            hr_email
                        </label>
                        <input
                            class="appearance-none block w-full bg-gray-700 text-white border-none border-none-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-black focus:border-none-gray-500"
                            name="hr_email"
                            placeholder="email@gmail.com"
                        />
                        <label
                            class="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                            for=""
                        >
                            description
                        </label>
                        <textarea
                            class="appearance-none block w-full bg-gray-700 text-white border-none border-none-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-black focus:border-none-gray-500"
                            name="description"
                            placeholder=" job description"
                        />
                        <label
                            class="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                            for=""
                        >
                            company
                        </label>
                        <input
                            class="appearance-none block w-full bg-gray-700 text-white border-none border-none-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-black focus:border-none-gray-500"
                            type=""
                            name="company_name"
                            placeholder=" company name"
                        />{' '}
                        <label
                            class="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                            for=""
                        >
                            company_logo
                        </label>
                        <input
                            class="appearance-none block w-full bg-gray-700 text-white border-none border-none-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-black focus:border-none-gray-500"
                            id="grid-password"
                            type="url"
                            name="company_logo"
                            placeholder=" company_logo"
                        />
                    </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-2">
                    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label
                            class="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                            for="grid-city"
                        >
                            City
                        </label>
                        <input
                            class="appearance-none block w-full bg-gray-700 text-white border-none border-none-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-black focus:border-none-gray-500"
                            id="grid-city"
                            type="text"
                            name="city"
                            placeholder="Albuquerque"
                        />
                    </div>
                    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label
                            class="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                            for="grid-state"
                        >
                            currency
                        </label>
                        <div class="relative">
                            <select
                                class="block appearance-none w-full bg-gray-700 border-none border-none-gray-200 text-white py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-black focus:border-none-gray-500"
                                id="grid-state"
                                name="currency"
                            >
                                <option>BDT</option>
                                <option>USD</option>
                                <option>UAE</option>
                            </select>
                            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
                                <svg
                                    class="fill-current h-4 w-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div class="w-full items-center gap-4 flex md:w-1/3 px-3 mb-6 md:mb-0">
                        <label
                            class="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                            for="grid-zip"
                        >
                            min
                        </label>
                        <input
                            class="appearance-none block w-full bg-gray-700 text-white border-none border-none-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-black focus:border-none-gray-500"
                            name="min"
                            type="text"
                            placeholder="1000$"
                        />
                        <label
                            class="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                            for="grid-zip"
                        >
                            max
                        </label>
                        <input
                            class="appearance-none block w-full bg-gray-700 text-white border-none border-none-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-black focus:border-none-gray-500"
                            name="max"
                            type="text"
                            placeholder="1000$"
                        />
                    </div>
                </div>
                <label
                    class="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                    for=""
                >
                    applicationDeadline
                </label>
                <input
                    class="appearance-none block w-full bg-gray-700 text-white border-none border-none-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-black focus:border-none-gray-500"
                    id="grid-password"
                    type="date"
                    name="applicationDeadline"
                    placeholder=" applicationDeadline"
                />
                <button
                    className="bg-blue-500 py-2 cursor-pointer px-3 rounded-2xl"
                    type="submit"
                >
                    submit
                </button>
            </form>
        </div>
    )
}

export default AddJob
