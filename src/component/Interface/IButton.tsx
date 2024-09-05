export interface IButton {
  textType: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
  children: React.ReactNode;
  backgroundColor: string;
  textColor: string;
  onClick: () => void;
}
