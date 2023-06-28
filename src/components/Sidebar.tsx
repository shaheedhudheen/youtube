const Sidebar = () => {
  return (
    <div className="md:w-48 lg:w-64 flex flex-col h-custom ">
      <div className=" border-b-[1px] border-gray-200 px-10 flex flex-col gap-3 py-3">
        <p>Home</p>
        <p>Shorts</p>
        <p>Subscriptions</p>
      </div>

      <div className=" border-b-[1px] border-gray-200 px-10 flex flex-col gap-3 py-3">
        <p>Library</p>
        <p>History</p>
        <p>Your Videos</p>
        <p>Your Courses</p>
      </div>

      <div className=" border-b-[1px] border-gray-200 px-10 flex flex-col gap-3 py-3">
        <p>Trending</p>
        <p>Shopping</p>
        <p>Music</p>
        <p>Movies</p>
        <p>Live</p>
        <p>Gaming</p>
        <p>News</p>
        <p>Sports</p>
        <p>Learning</p>
      </div>
    </div>
  );
};

export default Sidebar;
