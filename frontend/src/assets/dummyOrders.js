const dummyOrders = [
  {
    id: "ORD-1001",
    paymentType: "Online",
    amount: 140,
    status: "Placed",
    isPaid: true,
    items: [
      {
        productId: 1,
        name: "Dolo 500mg Tablet",
        quantity: 2,
        offerPrice: 45,
        total: 90
      },
      {
        productId: 10,
        name: "Nulife 7 Sterile Gloves 2s",
        quantity: 1,
        offerPrice: 50,
        total: 50
      }
    ],
    address: {
      firstName: "John",
      lastName: "Doe",
      street: "123 Main Street",
      city: "New York",
      state: "NY",
      zipcode: "10001",
      country: "USA",
      phone: "+1-555-0123"
    },
    createdAt: "2024-06-05T12:00:00Z"
  },
  {
    id: "ORD-1002",
    paymentType: "Cash on Delivery",
    amount: 197,
    status: "Placed",
    isPaid: false,
    items: [
      {
        productId: 5,
        name: "Aristozyme Capsule",
        quantity: 1,
        offerPrice: 85,
        total: 85
      },
      {
        productId: 6,
        name: "Telmisartan Tablets",
        quantity: 1,
        offerPrice: 112,
        total: 112
      }
    ],
    address: {
      firstName: "Jane",
      lastName: "Smith",
      street: "456 Oak Avenue",
      city: "Los Angeles",
      state: "CA",
      zipcode: "90210",
      country: "USA",
      phone: "+1-555-0456"
    },
    createdAt: "2024-06-01T09:00:00Z"
  },
  {
    id: "ORD-1003",
    paymentType: "Online",
    amount: 83,
    status: "Placed",
    isPaid: true,
    items: [
      {
        productId: 8,
        name: "Happi Hands Sanitizer 100ml",
        quantity: 1,
        offerPrice: 55,
        total: 55
      },
      {
        productId: 7,
        name: "Electral Orange Flavour Powder 21.8gm",
        quantity: 1,
        offerPrice: 28,
        total: 28
      }
    ],
    address: {
      firstName: "Mike",
      lastName: "Johnson",
      street: "789 Pine Road",
      city: "Chicago",
      state: "IL",
      zipcode: "60601",
      country: "USA",
      phone: "+1-555-0789"
    },
    createdAt: "2024-05-28T16:30:00Z"
  }
];

export default dummyOrders;