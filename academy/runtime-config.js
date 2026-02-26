// Runtime Configuration for EduApp Frontend
// Update API_BASE_URL based on your deployment environment

window.__EDUAPP_CONFIG__ = {
  // Production (Cloud Run Backend)
  API_BASE_URL: "https://eduapp-backend-644996578018.us-central1.run.app/api/v1",

  // Domain Information (optional, for analytics/logging)
  DOMAIN: "privateneuron.com",
  ENVIRONMENT: "production",
};
