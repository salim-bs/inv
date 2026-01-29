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
    <div className="flex justify-center gap-3 md:gap-6 mt-8">
      {timeUnits.map((unit, index) => (
        <div key={unit.label} className="flex items-center gap-3 md:gap-6">
          <div className="text-center">
            <div className="bg-primary/10 border border-primary/20 rounded-lg p-3 md:p-4 min-w-[60px] md:min-w-[80px]">
              <span className="font-serif text-2xl md:text-4xl text-primary font-semibold">
                {String(unit.value).padStart(2, "0")}
              </span>
            </div>
            <p className="text-xs md:text-sm text-muted-foreground mt-2 uppercase tracking-wider">
              {unit.label}
            </p>
          </div>
          {index < timeUnits.length - 1 && (
            <span className="font-serif text-2xl md:text-3xl text-secondary self-start mt-3 md:mt-4">:</span>
          )}
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;
