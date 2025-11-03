const events = [
  { id: 1, timestamp: "2025-11-03T08:01:23Z", type: "click" },
  { id: 2, timestamp: "2025-11-03T08:03:10Z", type: "scroll" },
  { id: 3, timestamp: "2025-11-03T08:05:45Z", type: "click" },
  { id: 4, timestamp: "2025-11-03T08:06:20Z", type: "view" },
  { id: 5, timestamp: "2025-11-03T08:11:55Z", type: "click" },
  { id: 6, timestamp: "2025-11-03T08:12:40Z", type: "scroll" },
  { id: 7, timestamp: "2025-11-03T08:15:33Z", type: "click" },
  { id: 8, timestamp: "2025-11-03T08:21:02Z", type: "view" },
  { id: 9, timestamp: "2025-11-03T08:24:59Z", type: "click" },
  { id: 10, timestamp: "2025-11-03T08:25:10Z", type: "scroll" },
  { id: 11, timestamp: "2025-11-03T08:32:43Z", type: "click" },
  { id: 12, timestamp: "2025-11-03T08:36:55Z", type: "view" },
  { id: 13, timestamp: "2025-11-03T08:42:15Z", type: "click" },
  { id: 14, timestamp: "2025-11-03T08:48:05Z", type: "click" },
  { id: 15, timestamp: "2025-11-03T09:02:30Z", type: "scroll" },
  { id: 16, timestamp: "2025-11-03T09:05:10Z", type: "click" },
  { id: 17, timestamp: "2025-11-03T09:10:25Z", type: "view" },
  { id: 18, timestamp: "2025-11-03T09:11:00Z", type: "click" },
  { id: 19, timestamp: "2025-11-03T09:14:20Z", type: "scroll" },
  { id: 20, timestamp: "2025-11-03T09:17:35Z", type: "click" },
];

const Interval = 30 * 60 * 1000;

const getBinningTimestamp = (timestamp) => {
  const date = new Date(timestamp);
  const flooredDate = Math.floor(date.getTime() / Interval) * Interval;
  return new Date(flooredDate).toISOString();
};

const binnedDate = events.reduce((acc, date) => {
  const bin = getBinningTimestamp(date.timestamp);
  if (!acc[bin]) {
    acc[bin] = { total: 0 };
  }
  acc[bin].total += 1;

  return acc;
}, {});

console.log(binnedDate);
