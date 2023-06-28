const Topics = () => {
  const topics: string[] = [
    "All",
    "Live",
    "Photography",
    "Cameras",
    "Gadgets",
    "Podcasts",
    "Comedy",
    "Tech",
    "Computers",
    "AI",
    "Occean",
    "Nature",
    "Phyics",
    "New to you",
    "Computer Science",
    "Action-adventure games",
    "Computers and information technology",
  ];

  return (
    <div className=" grid grid-flow-col overflow-x-auto  gap-2">
      {topics.map((item, index) => {
        return (
          <p key={index} className="bg-[#0000000d] h-8 rounded-lg px-4 inline-flex items-center cursor-pointer  whitespace-nowrap">
            {item}
          </p>
        );
      })}
    </div>
  );
};

export default Topics;
