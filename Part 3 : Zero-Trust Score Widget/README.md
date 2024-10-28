# Zero-Trust Score Widget

This Vue.js component displays a company's Zero-Trust Score based on provided metrics. It visually represents the score and associated risk category using Vuetify.

## Requirements

- Vue.js 3.x
- Vuetify
- Node.js (for local development)

## Installation Steps

1. **Clone the Repository or Download the Files**:
   - Clone the repository using Git:
     ```bash
     git clone <repository-url>
     cd part3-zero-trust-widget
     ```

2. **Install Node.js**:
   - Ensure you have Node.js installed. You can download it from the official website: [Node.js](https://nodejs.org/).

3. **Create a Vue Project**:
   - If you don't have Vue CLI installed, install it globally:
     ```bash
     npm install -g @vue/cli
     ```
   - Create a new Vue project:
     ```bash
     vue create zero-trust-widget
     cd zero-trust-widget
     ```

4. **Add Vuetify**:
   - Install Vuetify in your Vue project:
     ```bash
     vue add vuetify
     ```

5. **Add the Widget Component**:
   - Inside the `src/components` directory, create a new file named `ZeroTrustWidget.vue` and paste the component code provided above.

6. **Integrate the Widget**:
   - Open `src/App.vue` and include the `ZeroTrustWidget` component:
     ```vue
     <template>
       <v-app>
         <ZeroTrustWidget
           companyName="FinTechSecure Ltd."
           :zeroTrustScore="58.5"
           :metrics="metrics"
           riskCategory="Moderate Risk"
         />
       </v-app>
     </template>

     <script>
     import ZeroTrustWidget from './components/ZeroTrustWidget.vue';

     export default {
       name: 'App',
       components: {
         ZeroTrustWidget
       },
       data() {
         return {
           metrics: {
             "averageShannonEntropyScore": 7.8,
             "firewallDetected": 100,
             "DNSsecEnabled": 100,
             "tlsVersion": 1.2,
             "certificateBitStrength": 2048,
             "openPortsDetected": 12
           }
         }
       }
     }
     </script>
     ```

## Running the Application

1. **Start the Development Server**:
   - In the terminal, navigate to the `zero-trust-widget` directory and run:
     ```bash
     npm run serve
     ```
   - This will start the Vue development server. Open your browser and go to `http://localhost:8080` to see the widget in action.

## Screenshot of the Widget

![Zero-Trust Score Widget Screenshot](path/to/screenshot.png)

## License

This project is licensed under the MIT License.
