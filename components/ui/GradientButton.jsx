"use client";
import React from "react";
import PropTypes from "prop-types";

const GradientButton = ({ text, onClick }) => {
  const buttonContainerStyle = {
    position: "relative",
    display: "inline-block",
    padding: "2px", // Thickness of the border
    borderRadius: "50px", // Keeps it rounded
    background: "linear-gradient(to right, #3a7bd5, #d3ecf3)", // Gradient border
    overflow: "hidden",
  };

  const buttonStyle = {
    position: "relative",
    background: "black", // White background for the button
    color: "white", // Text color
    fontFamily: "system-ui, sans-serif",
    fontSize: "1rem",
    padding: "0.75rem 1.5rem",
    border: "none", // No inner border
    borderRadius: "50px", // Matches the container's border radius
    cursor: "pointer",
    transition: "background 0.3s ease, color 0.3s ease",
  };

  const hoverStyle = {
    background: "linear-gradient(to right, #3a7bd5, #285e9f)", // Gradient on hover
    color: "white", // Text color changes to white on hover
  };

  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div style={buttonContainerStyle}>
      <button
        style={isHovered ? { ...buttonStyle, ...hoverStyle } : buttonStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
};

GradientButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default GradientButton;
