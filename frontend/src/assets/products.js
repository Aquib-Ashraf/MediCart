import assets from '../assets'; // adjust the path as needed

// src/assets/products.js

const products = [
  {
    id: 1,
    name: "Dolo 500mg Tablet",
    image: [
      assets.glycomet_sr_500mg_tablet_20s_0_1,
      assets.dolo_500mg_tablet_15s_581314_1_0,
      assets.dolo_500mg_tablet_15s_581314_1_0,
      assets.dolo_500mg_tablet_15s_581314_1_0
    ],
    price: 50,
    offerPrice: 45,
    path: "dolo-500mg-tablet",
    category: "pain-relief",
    description: [
      "Effective pain relief medication",
      "Contains paracetamol 500mg",
      "Suitable for headache, fever, and body pain",
      "Safe for adults and children above 12 years"
    ],
    createdAt: "2024-01-15T10:00:00Z",
    updatedAt: "2024-05-01T12:00:00Z",
    inStock: true,
  },
  {
    id: 2,
    name: "Glycomet SR 500mg Tablet",
    image: [
      assets.glycomet_sr_500mg_tablet_20s_0_1,
      assets.glycomet_sr_500mg_tablet_20s_0_1,
      assets.glycomet_sr_500mg_tablet_20s_0_1,
      assets.glycomet_sr_500mg_tablet_20s_0_1
    ],
    price: 120,
    offerPrice: 110,
    path: "glycomet-sr-500mg-tablet",
    category: "diabetes",
    description: [
      "Sustained release metformin tablet",
      "Helps control blood sugar levels",
      "For type 2 diabetes management",
      "Take as prescribed by doctor"
    ],
    createdAt: "2024-02-10T09:30:00Z",
    updatedAt: "2024-05-03T14:15:00Z",
    inStock: true,
  },
  {
    id: 3,
    name: "Alergin L Tablet",
    image: [
      assets.Alergin_L_tablet_10s_1_0,
      assets.Alergin_L_tablet_10s_1_0,
      assets.Alergin_L_tablet_10s_1_0,
      assets.Alergin_L_tablet_10s_1_0
    ],
    price: 75,
    offerPrice: 70,
    path: "alergin-l-tablet",
    category: "allergies",
    description: [
      "Anti-allergic medication",
      "Provides relief from allergic reactions",
      "Effective against skin allergies",
      "Non-drowsy formula"
    ],
    createdAt: "2024-01-20T11:45:00Z",
    updatedAt: "2024-04-30T16:00:00Z",
    inStock: true,
  },
  {
    id: 4,
    name: "Aquasol A Capsule",
    image: [
      assets.aquasol_a_capsule_30s_46890_0_2,
      assets.aquasol_a_capsule_30s_46890_0_2,
      assets.aquasol_a_capsule_30s_46890_0_2,
      assets.aquasol_a_capsule_30s_46890_0_2
    ],
    price: 150,
    offerPrice: 140,
    path: "aquasol-a-capsule",
    category: "vitamin-supplements",
    description: [
      "Vitamin A supplement",
      "Supports eye health and vision",
      "Boosts immune system",
      "Essential for skin health"
    ],
    createdAt: "2024-03-05T08:20:00Z",
    updatedAt: "2024-05-02T10:10:00Z",
    inStock: true,
  },
  {
    id: 5,
    name: "Aristozyme Capsule",
    image: [
      assets.Aristozyme_Capsule_15s_47994_0_1,
      assets.Aristozyme_Capsule_15s_47994_0_1,
      assets.Aristozyme_Capsule_15s_47994_0_1,
      assets.Aristozyme_Capsule_15s_47994_0_1
    ],
    price: 90,
    offerPrice: 85,
    path: "aristozyme-capsule",
    category: "digestive-health",
    description: [
      "Digestive enzyme supplement",
      "Improves digestion and reduces bloating",
      "Helps with stomach discomfort",
      "Take before meals"
    ],
    createdAt: "2024-02-28T13:00:00Z",
    updatedAt: "2024-05-01T09:30:00Z",
    inStock: true,
  },
  {
    id: 6,
    name: "Telmisartan Tablets",
    image: [
      assets["70465-3-1"],
      assets["70465-3-1"],
      assets["70465-3-1"],
      assets["70465-3-1"]
    ],
    price: 90,
    offerPrice: 85,
    path: "telmisartan-tablets",
    category: "blood-pressure",
    description: [
      "Blood pressure medication",
      "Helps control hypertension",
      "Reduces risk of heart disease",
      "Take as prescribed by doctor"
    ],
    createdAt: "2024-02-28T13:00:00Z",
    updatedAt: "2024-05-01T09:30:00Z",
    inStock: true,
  },
  {
    id: 7,
    name: "Electral Orange Flavour Powder 21.8gm",
    image: [
      assets.electral_orange_flavour_powder_21_8gm_0_0,
      assets.electral_orange_flavour_powder_21_8gm_0_0,
      assets.electral_orange_flavour_powder_21_8gm_0_0,
      assets.electral_orange_flavour_powder_21_8gm_0_0
    ],
    price: 30,
    offerPrice: 28,
    path: "electral-orange-flavour-powder-21-8gm",
    category: "electrolytes",
    description: [
      "Oral rehydration solution",
      "Orange flavored electrolyte powder",
      "Prevents dehydration",
      "Restores body fluids and minerals"
    ],
    createdAt: "2024-06-10T10:00:00Z",
    updatedAt: "2024-06-10T10:00:00Z",
    inStock: true,
  },
  {
    id: 8,
    name: "Happi Hands Sanitizer 100ml",
    image: [
      assets.happi_hands_sanitizer_100ml_0_0,
      assets.happi_hands_sanitizer_100ml_0_0,
      assets.happi_hands_sanitizer_100ml_0_0,
      assets.happi_hands_sanitizer_100ml_0_0
    ],
    price: 60,
    offerPrice: 55,
    path: "happi-hands-sanitizer-100ml",
    category: "hygiene",
    description: [
      "Hand sanitizer with 70% alcohol",
      "Kills 99.9% germs and bacteria",
      "Quick-drying formula",
      "Convenient 100ml size"
    ],
    createdAt: "2024-06-10T10:05:00Z",
    updatedAt: "2024-06-10T10:05:00Z",
    inStock: true,
  },
  {
    id: 9,
    name: "Syringe 2ml with Needle 23g",
    image: [
      assets.syringe_2_ml_with_needle_23g_45814_0_1,
      assets.syringe_2_ml_with_needle_23g_45814_0_1,
      assets.syringe_2_ml_with_needle_23g_45814_0_1,
      assets.syringe_2_ml_with_needle_23g_45814_0_1
    ],
    price: 15,
    offerPrice: 12,
    path: "syringe-2-ml-with-needle-23g",
    category: "medical-equipment",
    description: [
      "Sterile disposable syringe",
      "2ml capacity with 23g needle",
      "For medical injections",
      "Single use only"
    ],
    createdAt: "2024-06-10T10:10:00Z",
    updatedAt: "2024-06-10T10:10:00Z",
    inStock: true,
  },
  {
    id: 10,
    name: "Nulife 7 Sterile Gloves 2s",
    image: [
      assets.nulife_7_sterile_gloves_2s_774663_0_0,
      assets.nulife_7_sterile_gloves_2s_774663_0_0,
      assets.nulife_7_sterile_gloves_2s_774663_0_0,
      assets.nulife_7_sterile_gloves_2s_774663_0_0
    ],
    price: 25,
    offerPrice: 22,
    path: "nulife-7-sterile-gloves-2s",
    category: "medical-equipment",
    description: [
      "Sterile surgical gloves",
      "Pack of 2 gloves",
      "Latex-free material",
      "For medical procedures"
    ],
    createdAt: "2024-06-10T10:15:00Z",
    updatedAt: "2024-06-10T10:15:00Z",
    inStock: true,
  },
];

export default products;