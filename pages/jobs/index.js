import { Input, JobListing } from '../../components/';
import React, { useEffect, useState } from 'react';
import JobMenu from './shared/JobMenu';
import JobCategories from './shared/JobCategories';
export default function index() {
  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState('');

  const fetchJobs = async () => {
    const results = await fetch('/api/jobs')
      .then((res) => res.json())
      .then((result) => result.jobs);

    return setJobs(
      // results &&
      //   results.filter((item) => {
      //     return item.id == id;
      //   })
      results
    );
  };
  useEffect(() => {
    fetchJobs();
  }, [search]);
  return (
    <div>
      <JobMenu />
      <JobCategories />
      <JobListing jobs={jobs} search={search} />
    </div>
  );
}
