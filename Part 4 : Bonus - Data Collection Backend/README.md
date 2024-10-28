# Zero-Trust Score Data Collection Backend

This backend service is built using Node.js and Express to collect and store Zero-Trust Score data.

## Requirements

- Node.js
- npm (Node package manager)

## Installation Steps

1. **Clone the Repository or Download the Files**:
   - Clone the repository using Git:
     ```bash
     git clone <repository-url>
     cd part4-zero-trust-backend
     ```

2. **Install Node.js**:
   - Ensure you have Node.js installed. You can download it from the official website: [Node.js](https://nodejs.org/).

3. **Install Required Packages**:
   - Inside the `part4-zero-trust-backend` directory, install the required packages:
     ```bash
     npm install express body-parser
     ```

4. **Add the Backend Code**:
   - Create a file named `server.js` and paste the backend code provided above.

## Running the Backend Service

1. **Start the Server**:
   - In the terminal, navigate to the `part4-zero-trust-backend` directory and run:
     ```bash
     node server.js
     ```
   - This will start the backend server. Open your browser or use Postman to test the endpoints.

## API Endpoints

### 1. Submit Zero-Trust Score Data
- **Endpoint**: `POST /submit`
- **Request Body**:
```json
{
    "averageShannonEntropyScore": 7.8,
    "firewallDetected": true,
    "DNSsecEnabled": true,
    "tlsVersion": "1.2",
    "certificateBitStrength": 2048,
    "securityHeadersImplemented": ["X-XSS-Protection", "X-Frame-Options"],
    "openPortsDetected": 12
}
```
- **Response**: 
  - Status: `201` (Created) if the data is submitted successfully.
  - Status: `400` (Bad Request) if the data format is invalid.

### 2. Retrieve Stored Zero-Trust Score Data
- **Endpoint**: `GET /data`
- **Response**: 
  - Status: `200` (OK) and returns an array of stored data.

