// Runtime override for deployed static builds.
// Update API_BASE_URL without rebuilding the frontend.
window.__EDUAPP_CONFIG__ = {
  API_BASE_URL: "http://localhost:8000/api/v1",
};
