<template>
  <v-container>
    <h1>{{ companyName }}'s Zero-Trust Score</h1>
    <v-progress-linear :value="zeroTrustScore" height="20" color="blue">
      <template v-slot:default>
        <span>{{ zeroTrustScore }}%</span>
      </template>
    </v-progress-linear>
    
    <v-divider></v-divider>
    
    <h2>Risk Category</h2>
    <v-alert :type="getRiskCategoryColor()" border="left" colored-border>
      {{ riskCategory }}
    </v-alert>
    
    <v-divider></v-divider>
    
    <h2>Detailed Metrics</h2>
    <div>
      <div>averageShannonEntropyScore: {{ metrics.averageShannonEntropyScore }}</div>
      <div>firewallDetected: {{ metrics.firewallDetected }}</div>
      <div>DNSsecEnabled: {{ metrics.DNSsecEnabled }}</div>
      <div>tlsVersion: {{ metrics.tlsVersion }}</div>
      <div>certificateBitStrength: {{ metrics.certificateBitStrength }}</div>
      <div>openPortsDetected: {{ metrics.openPortsDetected }}</div>
    </div>
  </v-container>
</template>

<script>
export default {
  name: 'ZeroTrustWidget',
  data() {
    return {
      companyName: '',
      zeroTrustScore: 0,
      metrics: {},
      riskCategory: '',
      loading: true  // Added a loading variable
    };
  },
  async created() {
    await this.loadData();
  },
  methods: {
    // Loads data from the JSON file
    async loadData() {
      const response = await fetch('/data.json'); // Loads the JSON file
      const data = await response.json();
      this.companyName = data.companyName;
      this.zeroTrustScore = data.ZeroTrustScore;
      this.metrics = data.metrics;
      this.riskCategory = data.riskCategory;
      this.loading = false;  // Update loading state
    },
    // Function to get the color based on the risk category
    getRiskCategoryColor() {
      if (this.riskCategory === 'Low Risk') {
        return 'success';
      } else if (this.riskCategory === 'Moderate Risk') {
        return 'warning';
      } else {
        return 'error';
      }
    }
  }
}
</script>

<style scoped>
h1 {
  margin-bottom: 20px;
}
h2 {
  margin-top: 20px;
}
</style>
