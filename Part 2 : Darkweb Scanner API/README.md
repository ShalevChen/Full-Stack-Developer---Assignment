# Darkweb Scanner API

This API queries dark web data related to a specified domain using IntelX.

## Requirements

- Node.js
- IntelX API Key

## Installation Steps

1. **Clone the Repository or Download the Files**:
   - You can clone the repository using Git:
     ```bash
     git clone <repository-url>
     cd part2-darkweb-scanner
     ```
   - Alternatively, download the ZIP file from GitHub and extract it.

2. **Install Node.js**:
   - Download and install Node.js from the official website: [Node.js](https://nodejs.org/).
   - Make sure to have Node.js and npm (Node Package Manager) installed by running:
     ```bash
     node -v
     npm -v
     ```

3. **Navigate to the Project Directory**:
   ```bash
   cd part2-darkweb-scanner
   ```

4. **Install Dependencies**:
   - Run the following command to initialize a new Node.js project and install the necessary dependencies:
     ```bash
     npm init -y
     npm install express axios body-parser
     ```

5. **Set Up IntelX API Key**:
   - Sign up or log in to IntelX to obtain your API key.
   - Open `darkwebScannerAPI.js` and replace `YOUR_INTELX_API_KEY` with your actual API key:
     ```javascript
     const INTELX_API_KEY = 'YOUR_INTELX_API_KEY'; // Replace with your IntelX API key
     ```

## Running the API

1. **Start the Server**:
   - In the terminal, ensure you are in the `part2-darkweb-scanner` directory and run:
     ```bash
     node darkwebScannerAPI.js
     ```
   - You should see the message indicating that the server is running:
     ```
     Server is running on http://localhost:3000
     ```

## Usage

To query dark web data for a specified domain, send a POST request to `http://localhost:3000/scan` with the following JSON body:

```json
{
    "domain": "example.com"
}
```

Replace `example.com` with the domain you wish to scan.

## Testing

You can use **Postman** to test the API:

1. Open Postman.
2. Select POST as the request type.
3. Enter the URL: `http://localhost:3000/scan`.
4. In the Body tab, select `raw` and choose `JSON` from the dropdown.
5. Paste the following JSON into the body:
   ```json
   {
       "domain": "example.com"
   }
   ```
6. Send the request and observe the response for dark web data related to the specified domain.
