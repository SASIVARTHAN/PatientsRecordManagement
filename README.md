# Patient Records Dashboard - Jarurat Care

A modern, responsive Patient Records Dashboard built with React that demonstrates proficiency in React development, state management, and API integration.

## 🚀 Features

### 1. Landing Page
- Clean and modern UI with Jarurat Care branding
- Responsive navigation bar with links to Home, Patients, and About pages
- Hero section with call-to-action buttons
- Feature highlights and statistics section

### 2. Patients Page (Main Feature)
- **Data Management**: Fetches patient data from mock API service
- **Responsive Grid Layout**: Displays patients in a beautiful card-based grid
- **Search Functionality**: Real-time search to filter patients by name
- **Patient Details**: View comprehensive patient information in a modal
- **Patient Information Displayed**:
  - Name, Age, Gender
  - Contact information (Phone, Email)
  - Address and Emergency Contact
  - Blood Group
  - Medical History (Last Visit, Diagnosis, Doctor)

### 3. State Management
- Implemented using **React Hooks** (useState, useEffect)
- Manages:
  - Patient data loading and storage
  - Search query state
  - Selected patient details
  - Loading and error states

### 4. UI & Styling
- **Fully Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern CSS**: Custom CSS with animations and transitions
- **User-Friendly Interface**: Intuitive navigation and interactions
- **Accessibility**: Keyboard navigation support (ESC to close modal)

## 📁 Project Structure

```
PatientsRecord/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header.js
│   │   ├── Header.css
│   │   ├── PatientCard.js
│   │   ├── PatientCard.css
│   │   ├── PatientModal.js
│   │   └── PatientModal.css
│   ├── pages/
│   │   ├── LandingPage.js
│   │   ├── LandingPage.css
│   │   ├── PatientsPage.js
│   │   ├── PatientsPage.css
│   │   ├── AboutPage.js
│   │   └── AboutPage.css
│   ├── services/
│   │   └── patientsData.js
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## 🛠️ Technologies Used

- **React 18.2.0**: Modern JavaScript library for building user interfaces
- **React Router DOM 6.20.0**: Client-side routing for navigation
- **React Hooks**: useState, useEffect for state management
- **CSS3**: Custom styling with modern features (Grid, Flexbox, Animations)
- **Mock API**: Simulated API service with realistic patient data

## 📦 Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Steps to Run

1. **Clone or navigate to the project directory**
   ```bash
   cd PatientsRecord
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   - The application will automatically open at `http://localhost:3000`
   - If it doesn't open automatically, navigate to the URL manually

## 🎯 Key Features Demonstrated

### React Skills
- Functional components
- React Hooks (useState, useEffect)
- Component composition and reusability
- Props and event handling
- Conditional rendering

### State Management
- Local state management using React Hooks
- Derived state (filtered patients from search)
- Loading and error state handling
- Modal state management

### API Integration
- Mock API service simulating real-world data fetching
- Asynchronous data loading
- Error handling
- Loading states

### Responsive Design
- Mobile-first approach
- CSS Grid and Flexbox layouts
- Media queries for different screen sizes
- Touch-friendly interface

## 🎨 Design Features

- **Color Scheme**: Modern blue gradient (#2563eb to #1e40af)
- **Typography**: Clean, readable fonts with proper hierarchy
- **Animations**: Smooth transitions and hover effects
- **Icons**: Custom SVG icons for better visuals
- **Cards**: Shadow effects and hover animations
- **Modal**: Beautiful overlay with smooth animations

## 📱 Responsive Breakpoints

- **Desktop**: > 968px
- **Tablet**: 768px - 968px
- **Mobile**: < 768px

## 🔍 Search Functionality

The search feature:
- Filters patients in real-time as you type
- Case-insensitive search
- Shows number of results found
- Clear search button for easy reset
- Displays "No results" message when appropriate

## 📊 Mock Data

The application includes 12 mock patients with realistic Indian names and data:
- Complete patient profiles
- Varied medical conditions
- Different age groups and demographics
- Realistic contact information and addresses

## 🚀 Available Scripts

- `npm start`: Runs the app in development mode
- `npm build`: Builds the app for production
- `npm test`: Launches the test runner
- `npm eject`: Ejects from Create React App (one-way operation)

## 🎓 Learning Outcomes

This project demonstrates proficiency in:
1. Building modern React applications
2. Managing application state effectively
3. Creating responsive, mobile-friendly interfaces
4. Working with mock APIs and asynchronous data
5. Component-based architecture
6. CSS styling and animations
7. User experience (UX) best practices

## 📝 Future Enhancements

Potential features to add:
- Redux for advanced state management
- Backend integration with real API
- Patient data editing and adding
- Advanced filtering (by age, diagnosis, etc.)
- Sorting functionality
- Pagination for large datasets
- Authentication and authorization
- Data export functionality

## 👨‍💻 Developer

Built as a skills assessment project to demonstrate React development capabilities.

## 📄 License

This project is created for educational and assessment purposes.

---

**Jarurat Care** - Revolutionizing Healthcare Management 🏥

