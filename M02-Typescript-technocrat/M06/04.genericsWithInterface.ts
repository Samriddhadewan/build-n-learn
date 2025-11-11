interface Developer<T, X = null> {
  name: string;
  salary: number;
  device: {
    brand: string;
    model: string;
    releasedYear: string;
  };
  smartWatch: T;
  bike?: X;
}

interface BrandCharaGhori {
  heartRate: string;
  stopwatch: boolean;
}

interface AppleWatch {
  heartRate: string;
  stopwatch: boolean;
  callSupport: boolean;
  aiSupport: boolean;
}

const poorDeveloper: Developer<
  BrandCharaGhori,
  {
    model: string;
    engineCapacity: number;
  }
> = {
  name: "Mr poor",
  salary: 20,
  device: {
    brand: "lenovo",
    model: "45 arch",
    releasedYear: "2021",
  },
  smartWatch: {
    heartRate: "200",
    stopwatch: true,
  },
  bike: {
    engineCapacity: 250,
    model: "yamaha",
  },
};

console.log(poorDeveloper);
const richDeveloper: Developer<AppleWatch> = {
  name: "Mr rich",
  salary: 20,
  device: {
    brand: "Mac",
    model: "100 arch",
    releasedYear: "2025",
  },
  smartWatch: {
    heartRate: "200",
    stopwatch: true,
    aiSupport: true,
    callSupport: true,
  },
};

console.log(richDeveloper);
