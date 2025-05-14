# ABC Company Website

A responsive website for Company ABC with dynamic content management capabilities.

## Project Structure

```
abcapp/
├── frontend/           # React frontend application
├── backend/           # Spring Boot backend application
└── README.md         # Project documentation
```

## Prerequisites

- Node.js (v14 or higher)
- Java JDK 17 or higher
- Maven
- MySQL/PostgreSQL

## Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

The frontend will be available at `http://localhost:3000`

## Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Build the project:
   ```bash
   mvn clean install
   ```

3. Run the application:
   ```bash
   mvn spring-boot:run
   ```

The backend API will be available at `http://localhost:8080`

## API Endpoints

### GET /api/heading
- Returns the current heading text
- Response: `{ "text": "string" }`

### POST /api/heading
- Updates the heading text
- Request Body: `{ "text": "string" }`
- Response: `{ "success": boolean, "message": "string" }`

## Database Configuration

The application uses a relational database (MySQL/PostgreSQL). Configure the database connection in `backend/src/main/resources/application.properties`:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/abc_company
spring.datasource.username=your_username
spring.datasource.password=your_password
```

## Features

- Responsive design based on Figma specifications
- Dynamic heading management through CMS
- RESTful API endpoints
- Database integration
- Cross-browser compatibility

## Development

- Frontend: React with modern CSS (styled-components)
- Backend: Spring Boot
- Database: MySQL/PostgreSQL
- API Documentation: Swagger/OpenAPI

## Deployment

Instructions for deploying the application will be added soon.

## License

This project is proprietary and confidential.
