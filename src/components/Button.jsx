import React from "react";

const Button = ({ children, variant = "primary", ...props }) => {
  const baseStyle = "text-lg py-6 px-8 rounded-lg transition-all duration-300";
  const styles = {
    primary: "bg-gradient-ai text-white hover:opacity-90",
    outline: "bg-white/10 border border-white/30 text-white hover:bg-white/20",
  };

  return (
    <button className={`${baseStyle} ${styles[variant]}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
