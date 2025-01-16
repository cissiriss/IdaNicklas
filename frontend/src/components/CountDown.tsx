import { useState, useEffect } from "react";

interface CountdownProps {
  targetDate: Date;
}

export const CountDown = ({ targetDate }: CountdownProps) => {
  const calculateTimeLeft = () => {
    const difference = +targetDate - +new Date();
    return difference > 0 ? difference : 0;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  });

  const formatTime = (milliseconds: number) => {
    const days = Math.floor(milliseconds / (1000 * 60 * 60 * 24));
    const hours = Math.floor((milliseconds / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((milliseconds / (1000 * 60)) % 60);
    const seconds = Math.floor((milliseconds / 1000) % 60);
    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
  };

  return (
    <div className="min-w-[250px] flex flex-col items-center justify-center bg-blue border border-gray-200 p-4 rounded mb-6">
      {timeLeft > 0 ? (
        <p className="text-4xl text-light font-alumni font-light">
          {formatTime(timeLeft)}
        </p>
      ) : (
        <p className="text-4xl text-light font-alumnip">
          Bröllopet har redan varit..{" "}
        </p>
      )}
    </div>
  );
};
