import { useState, useEffect } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountdownTimerProps {
  targetDate: Date;
}

const CountdownTimer = ({ targetDate }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const timeUnits = [
    { value: timeLeft.days, label: "Days" },
    { value: timeLeft.hours, label: "Hours" },
    { value: timeLeft.minutes, label: "Minutes" },
    { value: timeLeft.seconds, label: "Seconds" },
  ];

  return (
    <div className="flex justify-center gap-3 md:gap-6 mt-12">
      {timeUnits.map((unit, index) => (
        <div key={unit.label} className="flex items-start gap-3 md:gap-6">
          <div className="text-center group">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-4 min-w-[70px] md:min-w-[90px] shadow-lg transition-transform group-hover:scale-105 duration-300">
              <span className="font-elegant text-3xl md:text-5xl text-white font-medium drop-shadow-md">
                {String(unit.value).padStart(2, "0")}
              </span>
            </div>
            <p className="text-xs md:text-sm text-white/80 mt-3 uppercase tracking-widest font-sans font-light">
              {unit.label}
            </p>
          </div>
          {index < timeUnits.length - 1 && (
            <span className="font-elegant text-2xl md:text-4xl text-white/50 self-start mt-4">:</span>
          )}
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;
