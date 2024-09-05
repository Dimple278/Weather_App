import { IIcon } from "../Interface/IIcon";

const Icon: React.FC<IIcon> = (props: IIcon) => {
  const { src, height = "50px", width = "50px", alt = "Icon" } = props;

  return <img src={src} height={height} width={width} alt={alt}></img>;
};

export default Icon;
