import React, { useState } from "react";
import Text from "../Atomic/Text";

import { AlertProps } from "../Interface/IAlert";

const Alert: React.FC<AlertProps> = ({ message, type }) => {
  const [visible, setVisible] = useState(true);

  const getEmoji = () => {
    switch (type) {
      case "error":
        return "⚠";
      case "success":
        return "✅";
      case "warning":
        return "⚠️";
      case "info":
        return "ℹ️";
      default:
        return "";
    }
  };

  if (!visible) return null;

  return (
    <div className={`alert alert--${type}`}>
      <span className="alert__emoji">{getEmoji()}</span>
      <Text type="p">{message}</Text>
      <button className="alert__close" onClick={() => setVisible(false)}>
        ✖️
      </button>
    </div>
  );
};

export default Alert;
