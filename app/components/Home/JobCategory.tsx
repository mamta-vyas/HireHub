
import React from 'react'
import Heading from '../Helper/Heading';
import JobCategoryCard from '../Helper/JobCategoryCard';

const JobCategory = () => {
  return (
    <div className='pt-20 pb-12 '>
    {/* Heading */}
    <Heading 
    mainHeading="Explore Job Categories" 
    subHeading="394 new jobs added in 2024—discover your perfect opportunity!"
    />
    <div className='w-[80%] mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-col-3 mt-[4rem] gap-[3rem] items-center'>
       {/* jobcategorycard */}
            <JobCategoryCard image="/images/icon1.png" category="Finance" openPosition="25"/>
            <JobCategoryCard image="/images/icon2.png" category="Marketing" openPosition="35"/>
            <JobCategoryCard image="/images/icon3.png" category="Designer" openPosition="20"/>
            <JobCategoryCard image="/images/icon4.png" category="Development" openPosition="40"/>
            <JobCategoryCard image="/images/icon5.png" category="Human Resource" openPosition="15"/>
            <JobCategoryCard image="/images/icon6.png" category="Automotive Jobs" openPosition="12"/>
            <JobCategoryCard image="/images/icon7.png" category="Customer Services" openPosition="25"/>
            <JobCategoryCard image="/images/icon8.png" category="Health & Care" openPosition="30"/>
            <JobCategoryCard image="/images/icon9.png" category="Project Management" openPosition="45"/>
        </div>
    </div>
  )
}

export default JobCategory;