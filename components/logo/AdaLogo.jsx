import React from 'react';

/**
 * AdaLogo Component
 * 
 * Main logo component for the ADA Systems platform using design system colors.
 * 
 * @param {Object} props - Component props
 * @param {string} [props.size="medium"] - Size of the logo (small, medium, large, custom)
 * @param {string} [props.width] - Custom width (when size="custom")
 * @param {string} [props.height] - Custom height (when size="custom")
 * @param {string} [props.variant="primary"] - Color variant (primary, secondary, monochrome)
 * @param {string} [props.className] - Additional CSS classes
 * @param {Object} [props.style] - Inline styles
 */
export const AdaLogo = ({ 
  size = "medium", 
  width, 
  height,
  variant = "primary", 
  className = "",
  style = {},
  ...props 
}) => {
  // Size presets
  const sizes = {
    small: { width: "172px", height: "75px" },
    medium: { width: "275px", height: "120px" },
    large: { width: "413px", height: "180px" },
    xl: { width: "689px", height: "300px" }
  };

  // Color variants using CSS custom properties
  const variants = {
    primary: {
      fill: "var(--ada-primary, #4d6aff)",
      stroke: "var(--ada-primary-dark, #3d54cc)"
    },
    secondary: {
      fill: "var(--ada-secondary, #45b9ee)", 
      stroke: "var(--ada-secondary-dark, #2894d1)"
    },
    monochrome: {
      fill: "var(--ada-gray-800, #1f2937)",
      stroke: "var(--ada-gray-700, #374151)"
    },
    white: {
      fill: "var(--ada-white, #ffffff)",
      stroke: "var(--ada-gray-200, #e5e7eb)"
    }
  };

  // Determine dimensions
  const dimensions = size === "custom" 
    ? { width: width || "275px", height: height || "120px" }
    : sizes[size] || sizes.medium;

  // Get color scheme
  const colors = variants[variant] || variants.primary;

  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg"
      width={dimensions.width}
      height={dimensions.height}
      viewBox="0 0 689.5 300.5"
      className={`ada-logo ada-logo--${variant} ada-logo--${size} ${className}`}
      style={style}
      aria-label="ADA Systems Logo"
      role="img"
      {...props}
    >
      <path 
        fillRule="evenodd" 
        stroke={colors.stroke}
        strokeWidth="1px" 
        strokeLinecap="butt" 
        strokeLinejoin="miter" 
        fill={colors.fill}
        d="M2.228,298.969 L80.111,298.969 L153.894,114.729 L242.023,298.969 L364.995,298.969 C364.995,298.969 479.769,292.006 479.769,168.017 C479.769,44.028 388.307,8.154 348.599,8.154 C308.891,8.154 242.023,8.154 242.023,8.154 L242.023,79.887 L319.906,79.887 C319.906,79.887 412.135,72.432 412.135,157.769 C412.135,243.107 348.599,237.701 348.599,237.701 L289.163,237.701 L194.884,22.500 C194.884,22.500 182.730,1.027 157.993,2.005 C133.336,2.980 123.151,22.500 123.151,22.500 L2.228,298.969 ZM496.165,186.463 C496.165,186.463 503.447,126.624 473.620,71.689 C485.582,41.774 498.215,16.352 498.215,16.352 C498.215,16.352 503.779,2.182 526.908,2.005 C552.863,1.807 557.651,16.352 557.651,16.352 L686.772,298.969 L608.889,298.969 L531.007,114.729 L496.165,186.463 Z"
      />
    </svg>
  );
};

export default AdaLogo;