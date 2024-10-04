import ApplyButton from "@/app/components/Helper/ApplyButton";
import JobCard from "@/app/components/Helper/JobCard";
import { authOptions } from "@/auth";
import JobData from "@/data";
import { getServerSession } from "next-auth";
import Link from "next/link";
import React from "react";

const jobDetails = async ({ params }: { params: { id: string } }) => {
  const singleJob = JobData.find((job) => job.id.toString() == params.id);
  const session = await getServerSession(authOptions);

  const firstFourJobs = JobData.slice(0,4);

  return (
    <div className="mt-20 mb-12">
      <div className="block sm:flex items-center justify-between w-[80%] mx-auto">
        <div className="flex-[0.7]">
          <JobCard job={singleJob!} />
        </div>
        {session && <ApplyButton />}
        {!session && (
          <Link href="/signup">
            <button className="px-8 py-3 bg-emerald-600 rounded-lg text-white">
              Sign Up To Apply
            </button>
          </Link>
        )}
      </div>
      <div className="mt-16 w-[80%] mx-auto ">
        <h1 className="text-[20px] font-semibold">Job Description</h1>
        <p className="mt-4 text-black text-opacity-70">
          We are looking for a talented Software Engineer to join our dynamic team. The ideal candidate should have experience in developing high-quality applications and collaborating with cross-functional teams. You will participate in all phases of the software development lifecycle. Strong problem-solving skills and attention to detail are essential. Join us to help create innovative software solutions!
        </p>
        <h1 className="text-[20px] mt-8 font-semibold">Key Responsibility</h1>
        <p className="mt-4 text-black text-opacity-70">
          Design, develop, and maintain software applications. 
          Collaborate with product managers and designers to understand requirements and develop solutions.
          Write clean, maintainable, and efficient code.
          Conduct code reviews and provide constructive feedback. 
          Troubleshoot and debug applications to ensure optimal performance. Stay updated with industry trends and best practices.
        </p>
        <h1 className="text-[20px] mt-8 font-semibold">Skills</h1>
        <ul className="mt-4">
          <li className="mt-4 text-black text-opacity-70">React js</li>
          <li className="mt-4 text-black text-opacity-70">Next js</li>
          <li className="mt-4 text-black text-opacity-70">TypeScript</li>
          <li className="mt-4 text-black text-opacity-70">Tailwind css</li>
          <li className="mt-4 text-black text-opacity-70">Next Auth</li>
        </ul>
        <h1 className="text-[20px] mt-8 font-semibold">Related Jobs</h1>
        <div className='mt-4'>
     {firstFourJobs.map((job) => {
      return (
        <Link href={`/job/jobdetails/${job.id}`} className='space-y-6' key={job.id}>
          <JobCard job={job}/>
        </Link>
      )
     })}
    </div>
      </div>
    </div>
  );
};

export default jobDetails;
