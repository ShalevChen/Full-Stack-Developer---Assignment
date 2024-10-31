
# Zero-Trust Score Data Collection Backend

This backend service, built using Node.js and Express, allows for the collection and retrieval of Zero-Trust Score data, stored in a JSON file.

## Requirements

- Node.js
- Express.js
- body-parser
- fs-extra

## Installation and Setup

1. **Clone the repository or download the files**:

    ```bash
    git clone <repository-url>
    cd zero-trust-backend
    ```

2. **Install Node.js dependencies**:

    Make sure Node.js is installed on your machine. Then, run the following command to install the required packages:
    ```bash
    npm install express body-parser fs-extra
    ```

3. **Create a Data Directory**:

    Create a `data` folder in the root directory where the Zero-Trust data will be stored.
    ```bash
    mkdir data
    ```

4. **Run the Server**:

    Start the server using the following command:
    ```bash
    node server.js
    ```

    The server should now be running at `http://localhost:3000`.

## API Endpoints

### Submit Zero-Trust Score Data

- **URL**: `/submit-data`
- **Method**: POST
- **Description**: Submit Zero-Trust Score data for storage in a JSON file.
- **Body**: JSON containing Zero-Trust metrics data.

Example:
```json
{
    "averageShannonEntropyScore": 7.8,
    "firewallDetected": true,
    "DNSsecEnabled": true,
    "tlsVersion": "1.2",
    "certificateBitStrength": 2048,
    "openPortsDetected": 12
}
```

### Retrieve Zero-Trust Score Data

- **URL**: `/retrieve-data`
- **Method**: GET
- **Description**: Retrieves the saved Zero-Trust Score data.

## Testing the Endpoints

Use Postman or a similar API testing tool:

1. **Submit Data**:
    - Set the request type to **POST**.
    - Enter the URL: `http://localhost:3000/submit-data`.
    - In the body, select **raw** format and **JSON** type, then provide the JSON data.
    - Click **Send**.

2. **Retrieve Data**:
    - Set the request type to **GET**.
    - Enter the URL: `http://localhost:3000/retrieve-data`.
    - Click **Send** to see the saved data.

## Notes

Ensure the `data` folder exists to avoid errors when trying to save or retrieve data.

