import assets from '../assets'; // adjust the path as needed

const bestsellers = [
  {
    id: 1,
    name: "Dolo 500mg Tablet",
    image: [assets.dolo_500mg_tablet_15s_581314_1_0],
    price: 50,
    offerPrice: 45,
    path: "dolo-500mg-tablet",
    category: "pain-relief", // ✅ added
    createdAt: "2024-01-15T10:00:00Z",
    updatedAt: "2024-05-01T12:00:00Z",
    inStock: true
  },
  {
    id: 2,
    name: "Glycomet SR 500mg Tablet",
    image: [assets.glycomet_sr_500mg_tablet_20s_0_1],
    price: 120,
    offerPrice: 110,
    path: "glycomet-sr-500mg-tablet",
    category: "diabetes-care", // ✅ added
    createdAt: "2024-02-10T09:30:00Z",
    updatedAt: "2024-05-03T14:15:00Z",
    inStock: false
  },
  {
    id: 3,
    name: "Alergin L Tablet",
    image: [assets.Alergin_L_tablet_10s_1_0],
    price: 75,
    offerPrice: 70,
    path: "alergin-l-tablet",
    category: "allergy-relief", // ✅ added
    createdAt: "2024-01-20T11:45:00Z",
    updatedAt: "2024-04-30T16:00:00Z",
    inStock: true
  },
  {
    id: 4,
    name: "Aquasol A Capsule",
    image: [assets.aquasol_a_capsule_30s_46890_0_2],
    price: 150,
    offerPrice: 140,
    path: "aquasol-a-capsule",
    category: "vitamin-supplements", // ✅ added
    createdAt: "2024-03-05T08:20:00Z",
    updatedAt: "2024-05-02T10:10:00Z",
    inStock: true
  },
  {
    id: 5,
    name: "Aristozyme Capsule",
    image: [assets.Aristozyme_Capsule_15s_47994_0_1],
    price: 90,
    offerPrice: 85,
    path: "aristozyme-capsule",
    category: "digestive-care", // ✅ added
    createdAt: "2024-02-28T13:00:00Z",
    updatedAt: "2024-05-01T09:30:00Z",
    inStock: true
  },
  // Add more products similarly...
];

export default bestsellers;
