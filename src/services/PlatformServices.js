// // import http from '@/utils/http';
// // import { notifyError, notifySuccess } from '@/utils/toast';

// // class PlatformServices {
// //   static async getAllPlatforms() {
// //     try {
// //       const { data } = await http.get('/platforms');
// //       return data;
// //     } catch (err) {
// //       notifyError(err.response?.data?.message || 'Failed to fetch platforms');
// //       throw err;
// //     }
// //   }

// //   static async connectPlatform(platformData) {
// //     try {
// //       const { data } = await http.post('/platforms/connect', platformData);
// //       notifySuccess(`${platformData.name} connected successfully`);
// //       return data;
// //     } catch (err) {
// //       notifyError(err.response?.data?.message || 'Connection failed');
// //       throw err;
// //     }
// //   }

// //   static async refreshPlatform(platformId) {
// //     try {
// //       const { data } = await http.post(`/platforms/${platformId}/refresh`);
// //       notifySuccess('Platform data refreshed successfully');
// //       return data;
// //     } catch (err) {
// //       notifyError(err.response?.data?.message || 'Refresh failed');
// //       throw err;
// //     }
// //   }

// //   static async updatePlatform(platformId, updateData) {
// //     try {
// //       const { data } = await http.put(`/platforms/${platformId}`, updateData);
// //       notifySuccess('Platform updated successfully');
// //       return data;
// //     } catch (err) {
// //       notifyError(err.response?.data?.message || 'Update failed');
// //       throw err;
// //     }
// //   }

// //   static async disconnectPlatform(platformId) {
// //     try {
// //       const { data } = await http.delete(`/platforms/${platformId}`);
// //       notifySuccess('Platform disconnected successfully');
// //       return data;
// //     } catch (err) {
// //       notifyError(err.response?.data?.message || 'Disconnection failed');
// //       throw err;
// //     }
// //   }

// //   static async getPlatformDetails(platformId) {
// //     try {
// //       const { data } = await http.get(`/platforms/${platformId}`);
// //       return data;
// //     } catch (err) {
// //       notifyError(err.response?.data?.message || 'Failed to get platform details');
// //       throw err;
// //     }
// //   }

// //   // Platform-specific methods
// //   static async connectAmazonSeller(credentials) {
// //     try {
// //       const { data } = await http.post('/platforms/amazon/connect', credentials);
// //       notifySuccess('Amazon Seller account connected');
// //       return data;
// //     } catch (err) {
// //       notifyError(err.response?.data?.message || 'Amazon connection failed');
// //       throw err;
// //     }
// //   }

// //   static async connectFlipkartSeller(credentials) {
// //     try {
// //       const { data } = await http.post('/platforms/flipkart/connect', credentials);
// //       notifySuccess('Flipkart Seller account connected');
// //       return data;
// //     } catch (err) {
// //       notifyError(err.response?.data?.message || 'Flipkart connection failed');
// //       throw err;
// //     }
// //   }
// // }

// // export default PlatformServices;

// import requests from "./httpService";

// const PlatformServices = {
//   getAllPlatforms: async ({
//     page = 1,
//     limit = 10,
//     status = "",
//     search = "",
//     sort = "name",
//     order = "asc",
//   }) => {
//     return requests.get(
//       `/platforms?page=${page}&limit=${limit}&status=${status}&search=${search}&sort=${sort}&order=${order}`
//     );
//   },

//   connectPlatform: async (body, headers) => {
//     return requests.post("/platforms/connect", body, headers);
//   },

//   refreshPlatform: async (platformId, body = {}) => {
//     return requests.post(`/platforms/${platformId}/refresh`, body);
//   },

//   updatePlatform: async (platformId, body, headers) => {
//     return requests.put(`/platforms/${platformId}`, body, headers);
//   },

//   disconnectPlatform: async (platformId) => {
//     return requests.delete(`/platforms/${platformId}`);
//   },

//   getPlatformDetails: async (platformId) => {
//     return requests.get(`/platforms/${platformId}`);
//   },

//   // Platform-specific methods
//   connectAmazonSeller: async (body, headers) => {
//     return requests.post("/platforms/amazon/connect", body, headers);
//   },

//   connectFlipkartSeller: async (body, headers) => {
//     return requests.post("/platforms/flipkart/connect", body, headers);
//   },

//   connectMyntraSeller: async (body, headers) => {
//     return requests.post("/platforms/myntra/connect", body, headers);
//   },

//   connectMeeshoSeller: async (body, headers) => {
//     return requests.post("/platforms/meesho/connect", body, headers);
//   },

//   // Dashboard methods
//   getPlatformStats: async () => {
//     return requests.get("/platforms/stats");
//   },

//   getSyncStatus: async (platformId) => {
//     return requests.get(`/platforms/${platformId}/sync-status`);
//   },

//   getProductCounts: async (platformId) => {
//     return requests.get(`/platforms/${platformId}/product-counts`);
//   },

//   // Bulk operations
//   bulkSyncPlatforms: async (platformIds = []) => {
//     return requests.post("/platforms/bulk-sync", { platformIds });
//   },

//   // Test connection
//   testConnection: async (platformType, body) => {
//     return requests.post(`/platforms/${platformType}/test-connection`, body);
//   },
// };

// export default PlatformServices;