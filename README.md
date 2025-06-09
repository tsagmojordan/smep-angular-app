# Public Lighting Management System - Angular Application

## Overview

This is a web application built with Angular to manage public lighting systems, designed to monitor and control streetlights, track energy consumption, handle maintenance, and generate reports. It interacts with a microservices-based backend to provide a scalable, secure, and user-friendly solution for municipalities, energy providers, and maintenance teams in a context like Cameroon.

## Features

- **User Management**
  - User registration and authentication (login/logout)
  - Profile updates for personal info and preferences
  - Admin approval for new accounts
- **Streetlight Management**
  - Add, update, or remove streetlights
  - Group streetlights and control them remotely (on/off, intensity)
  - Create lighting profiles (schedules, intensity levels)
  - Real-time health monitoring (GPS, energy use, temperature, voltage, power, etc.)
  - Color-coded status display (e.g., green for operational, red for faulty)
- **Reports**
  - Export statistics in CSV and PDF formats
  - Generate maintenance and energy reports
  - Analyze logs for failures, energy savings, and consumption
- **Consumption Management**
  - Calculate energy use for groups, districts, departments, or regions
  - Estimate savings and public lighting bills
- **Maintenance**
  - Receive real-time notifications for failures with location and cause
  - Predictive AI for anticipating issues and planning interventions
  - View failure history with AI-driven improvement suggestions
  - Daily auto-scan for equipment health
- **Non-Functional**
  - Fast response times and high processing capacity
  - Secure authentication, authorization, and data encryption
  - User-friendly, accessible, and responsive UI
  - Reliable and scalable design

## Prerequisites

- **Node.js**: v22.x or later
- **npm**: v11.x or later
- **Angular CLI**: v19.x or later
- **Backend**: A running microservices backend (e.g., Spring Boot, Node.js) with APIs for auth, users, streetlights, maintenance, and notifications
- **Browser**: Modern browsers (Chrome, Firefox, Edge, Safari)

## Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-repo/public-lighting-management.git
   cd public-lighting-management
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

  - For production, update `src/environments/environment.prod.ts` similarly.

4. **Run the Application**
   ```bash
   ng serve
   ```
  - Open your browser at `http://localhost:4200`


## Development

- **Build**
  ```bash
  ng build
  ```
  - Outputs to the `dist/` folder for deployment.

- **Testing**
  ```bash
  ng test
  ```
  - Runs unit tests with Karma and Jasmine.

- **Linting**
  ```bash
  ng lint
  ```
  - Checks code style with ESLint.

## Technologies

- **Angular**: v18.x for frontend framework
- **TypeScript**: For type-safe coding
- **Tailwind CSS**: For responsive, utility-first styling
- **RxJS**: For reactive programming and API calls
- **NGX-Leaflet**: For GPS-based streetlight mapping
- **Chart.js**: For consumption and health visualizations
- **HTTP Client**: For backend API communication

## Security

- **Authentication**: Uses JWT tokens from the backend `auth-service`.
- **Data**: API calls secured with HTTPS; sensitive data encrypted.

## Contributing

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/new-feature`).
3. Commit changes (`git commit -m "Add new feature"`).
4. Push to the branch (`git push origin feature/new-feature`).
5. Open a pull request.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

## Contact

- **Project Maintainer**: Your Name (jordantsagmo@gmail.com)
- **Issues**: Report bugs or feature requests at [GitHub Issues](https://github.com/tsagmojordan/smep-angular-app.git)

## Acknowledgments

- Built with inspiration from the need for cost-effective, locally adapted public lighting solutions.
- Thanks to open-source tools like Angular, Tailwind CSS, and Leaflet.
