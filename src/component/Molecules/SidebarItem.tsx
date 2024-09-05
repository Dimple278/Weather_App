import Icon from "../Atomic/Icon";
import Text from "../Atomic/Text";
import { ISidebarItem } from "../Interface/ISidebarItem";

const SidebarItem = (props: ISidebarItem) => {
  const { title, value, src } = props;
  return (
    <div className="flex space-between">
      <Text type="p">{title}</Text>
      <div className="sidebar__item flex">
        <Text type="p">{value}</Text>
        <Icon src={src} width="22px" height="22px" />
      </div>
    </div>
  );
};

export default SidebarItem;
