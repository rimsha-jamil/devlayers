import React from "react";

const ScrollingText = () => {
  return (
    <>
      <style>
        {`
          @keyframes scroll {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          .scroll-container {
            overflow: hidden;
            white-space: nowrap;
            background-color: white;
          }

          .scroll-content {
            display: inline-block;
            animation: scroll 30s linear infinite;
            padding-left: 20vw;
          }
        `}
      </style>

      <div className="scroll-container">
        <div className="scroll-content">
          <div
            className="
              inline-flex 
              gap-16 sm:gap-20 md:gap-32 lg:gap-40 
              text-xl sm:text-2xl md:text-3xl lg:text-4xl 
              font-bold 
              text-[#0b4ea1] 
              py-4 sm:py-6 md:py-8 
              uppercase 
              tracking-widest
            "
          >
            <span>Execution</span>
            <span>Acceleration</span>
            <span>Strategy</span>
            <span>Execution</span>
            <span>Acceleration</span>
            <span>Strategy</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ScrollingText;
