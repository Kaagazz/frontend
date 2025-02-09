import React from "react";

const CustomButton = ({ text, size = "md" }) => {
    // Define size classes
    const sizeClasses = {
        sm: "px-8 py-2 text-sm",  // Small button
        md: "px-10 py-3 text-base", // Medium (default)
        lg: "px-12 py-4 text-lg",  // Large button
        xl: "px-14 py-5 text-xl"  // Extra Large
    };

    return (
        <button className={`bg-black text-white rounded-full font-semibold transition-transform duration-200 hover:scale-105 active:scale-95 cursor-pointer ${sizeClasses[size]}`}>
            {text}
        </button>
    );
};

export default CustomButton;
