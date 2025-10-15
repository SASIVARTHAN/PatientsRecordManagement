// Mock patient data
export const mockPatients = [
  {
    id: 1,
    name: "Rajesh Kumar",
    age: 45,
    contact: "+91 98765 43210",
    email: "rajesh.kumar@email.com",
    bloodGroup: "O+",
    address: "123 MG Road, Mumbai, Maharashtra 400001",
    gender: "Male",
    lastVisit: "2024-10-10",
    diagnosis: "Hypertension",
    doctor: "Dr. Sharma",
    emergencyContact: "+91 98765 43211"
  },
  {
    id: 2,
    name: "Priya Patel",
    age: 32,
    contact: "+91 98765 43212",
    email: "priya.patel@email.com",
    bloodGroup: "A+",
    address: "456 Park Street, Delhi, Delhi 110001",
    gender: "Female",
    lastVisit: "2024-10-12",
    diagnosis: "Diabetes Type 2",
    doctor: "Dr. Mehta",
    emergencyContact: "+91 98765 43213"
  },
  {
    id: 3,
    name: "Amit Singh",
    age: 28,
    contact: "+91 98765 43214",
    email: "amit.singh@email.com",
    bloodGroup: "B+",
    address: "789 Brigade Road, Bangalore, Karnataka 560001",
    gender: "Male",
    lastVisit: "2024-10-08",
    diagnosis: "Asthma",
    doctor: "Dr. Reddy",
    emergencyContact: "+91 98765 43215"
  },
  {
    id: 4,
    name: "Sneha Desai",
    age: 55,
    contact: "+91 98765 43216",
    email: "sneha.desai@email.com",
    bloodGroup: "AB+",
    address: "321 Residency Road, Pune, Maharashtra 411001",
    gender: "Female",
    lastVisit: "2024-10-05",
    diagnosis: "Arthritis",
    doctor: "Dr. Kapoor",
    emergencyContact: "+91 98765 43217"
  },
  {
    id: 5,
    name: "Vikram Malhotra",
    age: 38,
    contact: "+91 98765 43218",
    email: "vikram.malhotra@email.com",
    bloodGroup: "O-",
    address: "654 Anna Salai, Chennai, Tamil Nadu 600002",
    gender: "Male",
    lastVisit: "2024-10-14",
    diagnosis: "Migraine",
    doctor: "Dr. Iyer",
    emergencyContact: "+91 98765 43219"
  },
  {
    id: 6,
    name: "Anjali Nair",
    age: 29,
    contact: "+91 98765 43220",
    email: "anjali.nair@email.com",
    bloodGroup: "A-",
    address: "987 Marine Drive, Kochi, Kerala 682001",
    gender: "Female",
    lastVisit: "2024-10-11",
    diagnosis: "Thyroid Disorder",
    doctor: "Dr. Pillai",
    emergencyContact: "+91 98765 43221"
  },
  {
    id: 7,
    name: "Rahul Verma",
    age: 42,
    contact: "+91 98765 43222",
    email: "rahul.verma@email.com",
    bloodGroup: "B-",
    address: "147 Sector 17, Chandigarh, Punjab 160017",
    gender: "Male",
    lastVisit: "2024-10-09",
    diagnosis: "High Cholesterol",
    doctor: "Dr. Bhatia",
    emergencyContact: "+91 98765 43223"
  },
  {
    id: 8,
    name: "Kavita Rao",
    age: 50,
    contact: "+91 98765 43224",
    email: "kavita.rao@email.com",
    bloodGroup: "O+",
    address: "258 Banjara Hills, Hyderabad, Telangana 500034",
    gender: "Female",
    lastVisit: "2024-10-13",
    diagnosis: "Osteoporosis",
    doctor: "Dr. Prasad",
    emergencyContact: "+91 98765 43225"
  },
  {
    id: 9,
    name: "Suresh Krishnan",
    age: 35,
    contact: "+91 98765 43226",
    email: "suresh.krishnan@email.com",
    bloodGroup: "A+",
    address: "369 Residency Area, Indore, Madhya Pradesh 452001",
    gender: "Male",
    lastVisit: "2024-10-07",
    diagnosis: "Anxiety Disorder",
    doctor: "Dr. Joshi",
    emergencyContact: "+91 98765 43227"
  },
  {
    id: 10,
    name: "Meera Chopra",
    age: 26,
    contact: "+91 98765 43228",
    email: "meera.chopra@email.com",
    bloodGroup: "AB-",
    address: "741 Civil Lines, Jaipur, Rajasthan 302001",
    gender: "Female",
    lastVisit: "2024-10-15",
    diagnosis: "Anemia",
    doctor: "Dr. Saxena",
    emergencyContact: "+91 98765 43229"
  },
  {
    id: 11,
    name: "Arjun Reddy",
    age: 47,
    contact: "+91 98765 43230",
    email: "arjun.reddy@email.com",
    bloodGroup: "B+",
    address: "852 Jubilee Hills, Hyderabad, Telangana 500033",
    gender: "Male",
    lastVisit: "2024-10-06",
    diagnosis: "Gastritis",
    doctor: "Dr. Rao",
    emergencyContact: "+91 98765 43231"
  },
  {
    id: 12,
    name: "Divya Sharma",
    age: 31,
    contact: "+91 98765 43232",
    email: "divya.sharma@email.com",
    bloodGroup: "O+",
    address: "963 Koramangala, Bangalore, Karnataka 560034",
    gender: "Female",
    lastVisit: "2024-10-04",
    diagnosis: "PCOD",
    doctor: "Dr. Gupta",
    emergencyContact: "+91 98765 43233"
  }
];

// Simulated API call with delay
export const fetchPatients = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockPatients);
    }, 500); // Simulate network delay
  });
};

// Get single patient by ID
export const getPatientById = (id) => {
  return mockPatients.find(patient => patient.id === id);
};

