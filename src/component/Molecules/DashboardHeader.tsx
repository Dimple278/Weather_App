import Icon from "../Atomic/Icon";
import Searchbar from "./Searchbar";

const DashboardHeader = ({
  handleClick,
}: {
  handleClick: (search: string) => void;
}) => {
  return (
    <div className="dashboard__header flex">
      <Icon src="logo.svg" height="47px" width="90px" />
      <div className="search-wrapper">
        <Searchbar handleClick={handleClick} />
      </div>
    </div>
  );
};

export default DashboardHeader;
