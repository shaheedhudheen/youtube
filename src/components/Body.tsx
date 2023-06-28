import Sidebar from "./Sidebar";
import Main from "./MainContainer";

const Body = () => {
  return (
    <div className="grid grid-flow-col">
      <Sidebar />
      <Main />
    </div>
  );
};

export default Body;
