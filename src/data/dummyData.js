export const categories = [
  { id: 1, name: "Tractors", icon: "Tractor" },
  { id: 2, name: "Harvesters", icon: "Wheat" },
  { id: 3, name: "Tools", icon: "Wrench" },
  { id: 4, name: "Seeds & Fertilizers", icon: "Leaf" },
];

export const products = [
  {
    id: 1,
    name: "Mahindra 575 DI",
    category: "Tractors",
    price: 650000,
    image: "https://images.unsplash.com/photo-1592982537447-6f2a6a0c6cbf?auto=format&fit=crop&q=80&w=800",
    rating: 4.8,
    reviews: 124,
    description: "Powerful 45 HP tractor for heavy-duty farming tasks."
  },
  {
    id: 2,
    name: "Swaraj 744 FE",
    category: "Tractors",
    price: 690000,
    image: "https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&q=80&w=800",
    rating: 4.9,
    reviews: 89,
    description: "High fuel efficiency and reliable performance."
  },
  {
    id: 3,
    name: "John Deere Multi-Crop Harvester",
    category: "Harvesters",
    price: 2500000,
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80&w=800",
    rating: 4.7,
    reviews: 56,
    description: "Versatile harvester suitable for wheat, paddy, and more."
  },
  {
    id: 4,
    name: "Heavy Duty Cultivator",
    category: "Tools",
    price: 35000,
    image: "https://images.unsplash.com/photo-1592659762303-90081d34b277?auto=format&fit=crop&q=80&w=800",
    rating: 4.5,
    reviews: 210,
    description: "9-tine cultivator for deep soil preparation."
  },
];

export const repairRequests = [
  {
    id: "REQ001",
    machineName: "Mahindra 575 DI",
    problem: "Engine making unusual noise when starting",
    status: "Pending",
    date: "2026-04-05",
    image: "https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "REQ002",
    machineName: "Water Pump 5HP",
    problem: "Not drawing water, pressure issue",
    status: "In Progress",
    date: "2026-04-03",
    image: null
  },
  {
    id: "REQ003",
    machineName: "Swaraj 744 FE",
    problem: "Clutch plate needs replacement",
    status: "Completed",
    date: "2026-03-28",
    image: "https://images.unsplash.com/photo-1592982537447-6f2a6a0c6cbf?auto=format&fit=crop&q=80&w=800"
  }
];
