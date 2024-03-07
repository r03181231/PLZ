import { useEffect, useState } from "react";

export const CurrTime = () => {
  const [time, setTime] = useState<Date>(new Date());

  useEffect(() => {
    const moment = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(moment);
  }, []);

  return (
    <div>
      <p>{time.toLocaleTimeString()}</p>
    </div>
  );
};

export default CurrTime;
