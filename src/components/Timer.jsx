import React, { useEffect, useState } from "react";

const Timer = ({ onTimeUp, initialTime = 1200 }) => {
  // 1200 seconds = 20 minutes
  const [leftTime, setLeftTime] = useState(initialTime);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setLeftTime((prev) => {
        if (prev <= 1) {
          clearInterval(intervalId);
          onTimeUp(); // Call parent function when time is up
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array - run once

  // Format time as MM:SS
  const formattedTime = `${String(Math.floor(leftTime / 60)).padStart(2, "0")}:${String(leftTime % 60).padStart(2, "0")}`;

  // Color changes based on remaining time
  const getTimeColor = () => {
    if (leftTime <= 60) return "text-red-500"; // Last minute - red
    if (leftTime <= 300) return "text-yellow-300"; // Last 5 minutes - yellow
    return "text-black"; // Normal - white
  };

  return (
    <div className="flex items-center gap-2">
      <span className={`text-2xl font-bold ${getTimeColor()} transition-colors `}>
        ⏱️ {formattedTime}
      </span>
    </div>
  );
};

export default Timer;