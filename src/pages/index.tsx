const Home = () => {
  return (
    <div className="items-center md:items-start md:pt-72 bg-[url('/images/starbackground.jpeg')] h-screen w-screen bg-cover flex">
      <div className="flex flex-col gap-8 text-center w-full">
        <h1 className="text-5xl font-normal">
          Something <b className="font-black text-6xl">BIG</b> is being crafted
          here! Come back soon to check it out.
        </h1>
        <p>
          If you are looking for an inquiry or have any other questions please
          email me at{" "}
          <a
            className="text-green-500 hover:text-green-400"
            href="mailto:adam@adamturaj.com"
          >
            adam@adamturaj.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default Home;
