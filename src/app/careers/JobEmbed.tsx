'use client';

import { useEffect, useState } from 'react';
import styles from './careers.module.css';

type Job = {
  id: number;
  title: string;
  location: string;
  job_type: string;
  closing_date: string;
  work_style: string;
};

const APPLY_BASE = 'https://ninajojer.seamlesshiring.com/job/view';

function formatType(type: string) {
  return type.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
}

export default function JobEmbed() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/jobs')
      .then(r => r.json())
      .then(d => {
        if (d.status === 'success') setJobs(d.data.jobs.data ?? []);
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <p className={styles.jobsEmpty}>Loading open roles…</p>;
  }

  if (!jobs.length) {
    return <p className={styles.jobsEmpty}>No open roles at this time. Check back soon.</p>;
  }

  return (
    <div className={styles.jobList}>
      {jobs.map(job => (
        <div key={job.id} className={styles.jobRow}>
          <div className={styles.jobInfo}>
            <h3 className={styles.jobTitle}>{job.title}</h3>
            <span className={styles.jobMeta}>
              {formatType(job.job_type)} &middot; {job.location}
              {job.work_style && job.work_style !== 'onsite' && ` · ${formatType(job.work_style)}`}
            </span>
          </div>
          <a
            href={`${APPLY_BASE}/${job.id}#/`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.applyBtn}
          >
            APPLY
          </a>
        </div>
      ))}
    </div>
  );
}
