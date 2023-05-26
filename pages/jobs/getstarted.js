import Link from 'next/link';
export default function GetStarted() {
  return (
    <div>
      <h2>Lets Get Started</h2>
      <div>
        <Link href="/jobs/employee">Experienced</Link>
      </div>
      <div>
        <Link href="/jobs/jobseeker">Fresher</Link>
      </div>
      <div>
        <Link href="/jobs/interviews">Interview Prep</Link>
      </div>
    </div>
  );
}
