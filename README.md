# Event Booking Management System

A comprehensive event booking management platform built with modern technologies. This system enables users to browse, book, and manage events seamlessly across web and mobile platforms.

## 📋 Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Setup Instructions](#setup-instructions)
  - [Backend Setup (Java)](#backend-setup-java)
  - [Frontend Setup (React)](#frontend-setup-react)
- [Running the Application](#running-the-application)
- [API Documentation](#api-documentation)
- [Database Schema](#database-schema)
- [Contributing](#contributing)
- [License](#license)

## 🎯 Project Overview

The Event Booking Management System is a full-stack application designed to streamline the process of discovering, booking, and managing events. Whether you're an event organizer or an attendee, this platform provides an intuitive interface and robust backend to handle all your event needs.

### Key Objectives

- Provide a user-friendly interface for browsing and booking events
- Enable event organizers to create and manage events efficiently
- Facilitate secure payment processing for event bookings
- Deliver real-time notifications and confirmations
- Maintain comprehensive booking history and analytics

## ✨ Features

### For Event Attendees

- **Event Discovery**: Browse and search events by category, date, location, and price
- **Advanced Filtering**: Filter events with multiple criteria for better results
- **Event Details**: View comprehensive event information including agenda, speakers, and reviews
- **Easy Booking**: Simple one-click booking process with multiple payment options
- **Booking Management**: View, modify, and cancel bookings with ease
- **Review & Ratings**: Leave reviews and ratings for attended events
- **Wishlist**: Save favorite events for later booking
- **User Dashboard**: Personalized dashboard with upcoming events and booking history

### For Event Organizers

- **Event Creation**: Create and publish events with rich descriptions and media
- **Capacity Management**: Set ticket quotas and manage availability
- **Attendee Management**: View and manage list of event attendees
- **Analytics**: Track booking trends, revenue, and attendee metrics
- **Promotional Tools**: Create discount codes and promotional offers
- **Email Notifications**: Send automated confirmations and reminders

### General Features

- **User Authentication**: Secure registration, login, and password management
- **Role-Based Access Control**: Different permissions for attendees, organizers, and admins
- **Real-time Notifications**: Push notifications and email alerts
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Payment Integration**: Secure payment processing with multiple options
- **Admin Dashboard**: Comprehensive administrative tools and reporting

## 🛠️ Tech Stack

### Frontend (React)

- **Framework**: React.js (v18+)
- **State Management**: Redux Toolkit
- **UI Framework**: Material-UI / Tailwind CSS
- **HTTP Client**: Axios
- **Routing**: React Router v6
- **Form Handling**: React Hook Form
- **Validation**: Zod / Yup
- **Real-time**: Socket.io-client
- **Build Tool**: Vite / Create React App
- **Package Manager**: npm / yarn

### Backend (Java)

- **Framework**: Spring Boot 3.x
- **Web Framework**: Spring MVC / Spring WebFlux
- **ORM**: Hibernate / JPA
- **Database**: PostgreSQL / MySQL
- **Security**: Spring Security + JWT
- **API Documentation**: Swagger/Springdoc-openapi
- **Testing**: JUnit 5, Mockito
- **Build Tool**: Maven / Gradle
- **Containerization**: Docker
- **Real-time**: WebSocket with Spring

### Database

- **Primary**: PostgreSQL or MySQL
- **Caching**: Redis (optional)
- **Message Queue**: RabbitMQ (optional, for notifications)

### DevOps & Deployment

- **Containerization**: Docker & Docker Compose
- **CI/CD**: GitHub Actions / Jenkins
- **Cloud Platform**: AWS / Azure / GCP (optional)
- **Version Control**: Git

## 📁 Project Structure

```
pageandrest/
├── backend/                          # Java Spring Boot Backend
│   ├── src/
│   │   ├── main/java/com/pageandrest/
│   │   │   ├── config/              # Configuration classes
│   │   │   ├── controller/          # REST API endpoints
│   │   │   ├── service/             # Business logic
│   │   │   ├── repository/          # Data access layer
│   │   │   ├── entity/              # JPA entities
│   │   │   ├── dto/                 # Data transfer objects
│   │   │   ├── exception/           # Custom exceptions
│   │   │   ├── security/            # Security configurations
│   │   │   ├── util/                # Utility classes
│   │   │   └── PageandrestApplication.java
│   │   └── resources/
│   │       ├── application.properties
│   │       ├── application-dev.properties
│   │       ├── application-prod.properties
│   │       └── db/migration/        # Database migrations (Flyway/Liquibase)
│   ├── pom.xml                      # Maven dependencies
│   ├── Dockerfile                   # Docker configuration
│   └── README.md                    # Backend-specific documentation
│
├── frontend/                         # React Frontend
│   ├── src/
│   │   ├── components/              # Reusable React components
│   │   │   ├── common/              # Common components
│   │   │   ├── pages/               # Page components
│   │   │   └── layouts/             # Layout components
│   │   ├── pages/                   # Page-level components
│   │   │   ├── Home.jsx
│   │   │   ├── EventDetails.jsx
│   │   │   ├── Booking.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   └── ...
│   │   ├── hooks/                   # Custom React hooks
│   │   ├── services/                # API service calls
│   │   ├── store/                   # Redux store configuration
│   │   │   ├── slices/              # Redux slices
│   │   │   └── index.js
│   │   ├── styles/                  # Global styles and themes
│   │   ├── utils/                   # Utility functions
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── public/                      # Static assets
│   ├── package.json                 # npm dependencies
│   ├── vite.config.js               # Vite configuration
│   ├── Dockerfile                   # Docker configuration
│   └── README.md                    # Frontend-specific documentation
│
├── docker-compose.yml               # Docker Compose for local development
├── .github/
│   └── workflows/                   # GitHub Actions CI/CD
├── docs/                            # Documentation
│   ├── API.md                       # API endpoints documentation
│   ├── DATABASE.md                  # Database schema documentation
│   └── ARCHITECTURE.md              # System architecture
├── .gitignore
└── README.md                        # This file
```

## 🚀 Setup Instructions

### Prerequisites

Ensure you have the following installed on your system:

- **Java**: JDK 17 or higher
- **Node.js**: v18 or higher (with npm or yarn)
- **Maven**: 3.8+ or Gradle 7.0+
- **Docker**: (Optional, for containerized deployment)
- **PostgreSQL/MySQL**: Latest stable version (or use Docker)
- **Git**: For version control

### Backend Setup (Java)

#### 1. Navigate to Backend Directory

```bash
cd backend
```

#### 2. Configure Database

Create a PostgreSQL/MySQL database:

```sql
CREATE DATABASE pageandrest_db;
CREATE USER pageandrest_user WITH PASSWORD 'your_secure_password';
GRANT ALL PRIVILEGES ON DATABASE pageandrest_db TO pageandrest_user;
```

#### 3. Configure Application Properties

Update `src/main/resources/application.properties` with your database credentials:

```properties
# Database Configuration
spring.datasource.url=jdbc:postgresql://localhost:5432/pageandrest_db
spring.datasource.username=pageandrest_user
spring.datasource.password=your_secure_password
spring.datasource.driver-class-name=org.postgresql.Driver

# JPA/Hibernate Configuration
spring.jpa.database-platform=org.hibernate.dialect.PostgreSQLDialect
spring.jpa.hibernate.ddl-auto=validate
spring.jpa.show-sql=false
spring.jpa.properties.hibernate.format_sql=true

# Server Configuration
server.port=8080
server.servlet.context-path=/api

# JWT Secret (Generate a strong secret key)
jwt.secret=your_jwt_secret_key_here
jwt.expiration=86400000

# Application Name
spring.application.name=pageandrest
```

#### 4. Install Dependencies

Using Maven:

```bash
mvn clean install
```

Or using Gradle:

```bash
gradle clean build
```

#### 5. Run Database Migrations

Migrations will run automatically on application startup if configured with Flyway or Liquibase.

Alternatively, run manually:

```bash
mvn flyway:migrate
```

#### 6. Start the Backend Server

Using Maven:

```bash
mvn spring-boot:run
```

Or using Gradle:

```bash
gradle bootRun
```

Or using Java directly:

```bash
java -jar target/pageandrest-1.0.0.jar
```

The backend will be available at `http://localhost:8080`

API documentation (Swagger UI) will be available at `http://localhost:8080/swagger-ui.html`

### Frontend Setup (React)

#### 1. Navigate to Frontend Directory

```bash
cd frontend
```

#### 2. Install Dependencies

Using npm:

```bash
npm install
```

Or using yarn:

```bash
yarn install
```

#### 3. Configure Environment Variables

Create a `.env` file in the frontend directory:

```env
# API Configuration
VITE_API_BASE_URL=http://localhost:8080/api
VITE_API_TIMEOUT=30000

# Application Configuration
VITE_APP_NAME=Event Booking Management System
VITE_APP_VERSION=1.0.0

# Feature Flags
VITE_ENABLE_ANALYTICS=true
VITE_ENABLE_NOTIFICATIONS=true

# Optional: Third-party Service Keys
VITE_GOOGLE_MAPS_API_KEY=your_google_maps_key
VITE_STRIPE_PUBLIC_KEY=your_stripe_public_key
```

#### 4. Start the Development Server

Using npm:

```bash
npm run dev
```

Or using yarn:

```bash
yarn dev
```

The frontend will be available at `http://localhost:5173` (Vite) or `http://localhost:3000` (Create React App)

#### 5. Build for Production

Using npm:

```bash
npm run build
```

Or using yarn:

```bash
yarn build
```

Production-ready files will be in the `dist/` directory.

## 🏃 Running the Application

### Option 1: Local Development (Without Docker)

**Terminal 1 - Backend:**
```bash
cd backend
mvn spring-boot:run
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
```

### Option 2: Using Docker & Docker Compose

#### Build and Run with Docker Compose

From the project root:

```bash
docker-compose up -d
```

This will start:
- Backend service on `http://localhost:8080`
- Frontend service on `http://localhost:3000`
- PostgreSQL database on `localhost:5432`
- Redis (optional) on `localhost:6379`

#### View Logs

```bash
docker-compose logs -f
```

#### Stop Services

```bash
docker-compose down
```

## 📚 API Documentation

### Quick API Overview

The backend provides RESTful API endpoints following this pattern:

```
Base URL: http://localhost:8080/api
```

#### Main Endpoints

- **Events**: `/api/events`
  - `GET /api/events` - List all events
  - `POST /api/events` - Create new event (Admin/Organizer)
  - `GET /api/events/{id}` - Get event details
  - `PUT /api/events/{id}` - Update event
  - `DELETE /api/events/{id}` - Delete event

- **Bookings**: `/api/bookings`
  - `GET /api/bookings` - List user bookings
  - `POST /api/bookings` - Create new booking
  - `GET /api/bookings/{id}` - Get booking details
  - `PUT /api/bookings/{id}` - Update booking
  - `DELETE /api/bookings/{id}` - Cancel booking

- **Users**: `/api/users`
  - `POST /api/auth/register` - User registration
  - `POST /api/auth/login` - User login
  - `GET /api/users/profile` - Get user profile
  - `PUT /api/users/profile` - Update profile

- **Payments**: `/api/payments`
  - `POST /api/payments` - Process payment
  - `GET /api/payments/{id}` - Get payment details

For detailed API documentation, visit: `http://localhost:8080/swagger-ui.html`

## 🗄️ Database Schema

### Key Tables

- **users**: User account information
- **events**: Event details and metadata
- **bookings**: User event bookings
- **tickets**: Ticket information and pricing
- **payments**: Payment transaction records
- **reviews**: User reviews and ratings
- **categories**: Event categories
- **notifications**: User notifications

For detailed schema documentation, see `docs/DATABASE.md`

## 🧪 Testing

### Backend Testing

Run unit tests:

```bash
mvn test
```

Run integration tests:

```bash
mvn verify
```

### Frontend Testing

Run tests:

```bash
npm run test
```

Run tests with coverage:

```bash
npm run test:coverage
```

## 📦 Deployment

### Deploy Backend to Cloud

#### AWS EC2
```bash
# Build JAR
mvn clean package

# Deploy to EC2 instance
scp -i your-key.pem target/pageandrest.jar ec2-user@your-instance:/app/
ssh -i your-key.pem ec2-user@your-instance
java -jar /app/pageandrest.jar
```

#### Heroku
```bash
heroku create pageandrest
git push heroku main
```

### Deploy Frontend to Cloud

#### Netlify
```bash
npm run build
# Deploy dist folder to Netlify
```

#### Vercel
```bash
npm install -g vercel
vercel
```

## 🤝 Contributing

We welcome contributions! Please follow these guidelines:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

Please ensure:
- Code follows the project's style guide
- Tests are included for new features
- Documentation is updated
- Commit messages are clear and descriptive

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Support & Contact

For support, questions, or suggestions:

- **Email**: support@pageandrest.com
- **Issues**: GitHub Issues
- **Discussions**: GitHub Discussions

## 🔄 Version History

- **v1.0.0** (Current) - Initial release with core features
  - User authentication and authorization
  - Event browsing and booking
  - Payment integration
  - User dashboard
  - Admin panel

## 📈 Roadmap

- [ ] Mobile app (React Native)
- [ ] Advanced analytics dashboard
- [ ] Multi-language support
- [ ] Video integration for events
- [ ] Virtual event support
- [ ] Social features and event sharing
- [ ] Machine learning recommendations
- [ ] Blockchain-based ticketing

---

**Last Updated**: 2026-01-12
**Status**: Active Development
