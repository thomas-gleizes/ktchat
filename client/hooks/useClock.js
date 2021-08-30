import React, { useEffect, useState } from "react";

import Moment from "../helpers/moment";

const useClock = (datetime, timeout = 1000) => {
  const [time, setTime] = useState(Moment(datetime).fromNow());

  useEffect(() => {
    const interval = setInterval(
      () => setTime(Moment(datetime).fromNow()),
      timeout
    );

    return () => clearInterval(interval);
  }, []);

  return time;
};

export default useClock;
