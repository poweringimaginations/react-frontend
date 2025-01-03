const Dashboard = () => {
    return (
      <div className="grid grid-cols-4 grid-rows-2 gap-4 p-4 h-full">

        <section className="col-span-2 row-span-1 bg-purple-100 p-4 rounded shadow-md">
          <h2 className="text-lg font-bold">Featured Clubs</h2>
          <p>Highlighting Northwestern clubs from GroupMe...</p>
        </section>
  
        <section className="col-span-2 row-span-1 bg-purple-100 p-4 rounded shadow-md">
          <h2 className="text-lg font-bold">Events</h2>
          <p>Upcoming events at Northwestern...</p>
        </section>
  
        <section className="col-span-1 row-span-1 bg-purple-100 p-4 rounded shadow-md">
          <h2 className="text-lg font-bold">Community Posts</h2>
          <p>Loading posts from Northwestern Instagram...</p>
        </section>
  
        <section className="col-span-3 row-span-1 bg-purple-100 p-4 rounded shadow-md">
          <h2 className="text-lg font-bold">Q&A</h2>
          <p>Answers to common questions for new freshmen...</p>
        </section>
      </div>
    );
  };
  
  export default Dashboard;
  