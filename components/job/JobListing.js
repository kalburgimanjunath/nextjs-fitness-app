import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Filters from './Filters';
export default function JobListing({ jobs, search }) {
  const [newsearch, setNewSearch] = useState('');
  const JobsTemplate = ({ item }) => {
    return (
      <>
        <Link href={`../jobs/${item.id}`}>
          <div>
            <h6>{item.job_title}</h6> at {item.company_name}
          </div>
        </Link>
        <div>{item.company_address}</div>
        <div>{item.location}</div>
        <div>{item.notice_period}</div>
        <div>{item.salary_range}</div>
      </>
    );
  };
  return (
    <div>
      <h3>Latest jobs</h3>
      <Filters search={newsearch} onsetSearch={setNewSearch} />
      {newsearch}
      {jobs &&
        jobs.map((item) => {
          return (
            <div>
              <JobsTemplate item={item} />
            </div>
          );
        })}
    </div>
  );
}
