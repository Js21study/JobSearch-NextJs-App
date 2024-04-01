import SearchComponent from './components/SearchComponent';

export default function Home() {
  const homePage = true;

  return (
    <div className="mt-32 min-h-screen">
      <div className="text-center sm:py-20">
        <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-800 text-5xl">
          {' '}
          Welcome to job search app!
        </h1>
        <p className=" text-base sm:text-lg lg:text-xl mb-6 text-slate-200 md:w-[800px] mx-auto mt-10">
          Build a professional profile showcasing your skills, experience, and qualifications to
          attract potential employers. Explore our extensive job listings, tailored to your industry
          and preferences, to find the perfect opportunity. Submit your application with just a few
          clicks, streamlining the process and increasing your chances of success. Secure the ideal
          position, grow your career, and achieve your professional goals with JobSearch's support.
        </p>
      </div>
      <SearchComponent homePage={homePage} />
    </div>
  );
}
