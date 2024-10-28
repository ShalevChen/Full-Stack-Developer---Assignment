<template>
  <v-container>
    <h1>{{ companyName }}'s Zero-Trust Score</h1>
    <v-progress-linear :value="zeroTrustScore" height="20" color="blue">
      <template v-slot:default>
        <span>{{ zeroTrustScore }}%</span>
      </template>
    </v-progress-linear>
    
    <v-divider></v-divider>
    
    <h2>Metrics</h2>
    <v-list>
      <v-list-item-group>
        <v-list-item v-for="(value, key) in metrics" :key="key">
          <v-list-item-content>
            <v-list-item-title>{{ key }}</v-list-item-title>
            <v-list-item-subtitle>{{ value }}</v-list-item-subtitle>
            <v-progress-linear :value="value" height="10" color="green"></v-progress-linear>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>

    <v-divider></v-divider>
    
    <h2>Risk Category</h2>
    <v-alert :type="getRiskCategoryColor()" border="left" colored-border>
      {{ riskCategory }}
    </v-alert>
  </v-container>
</template>

<script>
export default {
  name: 'ZeroTrustWidget',
  props: {
    companyName: {
      type: String,
      required: true
    },
    zeroTrustScore: {
      type: Number,
      required: true
    },
    metrics: {
      type: Object,
      required: true
    },
    riskCategory: {
      type: String,
      required: true
    }
  },
  methods: {
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
