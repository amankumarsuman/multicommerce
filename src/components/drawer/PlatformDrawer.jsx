// import {
//   Button,
//   Input,
//   Label,
//   Select,
//   Textarea,
//   ToggleSwitch,
// } from "@windmill/react-ui";
// import { useContext, useEffect, useState } from "react";
// import { useTranslation } from "react-i18next";
// import { FiX, FiSave, FiTrash2 } from "react-icons/fi";

// // Internal imports
// import Drawer from "@/components/drawer/Drawer";
// import { SidebarContext } from "@/context/SidebarContext";
// import PlatformServices from "@/services/PlatformServices";
// import { notifySuccess, notifyError } from "@/utils/toast";

// const PlatformDrawer = () => {
//   const { isDrawerOpen, closeDrawer, drawerData } = useContext(SidebarContext);
//   const { t } = useTranslation();
//   const [platform, setPlatform] = useState({
//     name: "",
//     apiKey: "",
//     secretKey: "",
//     marketplace: "IN",
//     isActive: true,
//     syncFrequency: "daily",
//     additionalSettings: {},
//   });

//   useEffect(() => {
//     if (drawerData?.platform) {
//       setPlatform(drawerData.platform);
//     } else {
//       resetForm();
//     }
//   }, [drawerData]);

//   const resetForm = () => {
//     setPlatform({
//       name: "",
//       apiKey: "",
//       secretKey: "",
//       marketplace: "IN",
//       isActive: true,
//       syncFrequency: "daily",
//       additionalSettings: {},
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       if (platform._id) {
//         // Update existing platform
//         await PlatformServices.updatePlatform(platform._id, platform);
//         notifySuccess("Platform updated successfully");
//       } else {
//         // Create new platform connection
//         await PlatformServices.createPlatform(platform);
//         notifySuccess("Platform connected successfully");
//       }
//       closeDrawer();
//     } catch (err) {
//       notifyError(err.message);
//     }
//   };

//   const handleDelete = async () => {
//     try {
//       await PlatformServices.deletePlatform(platform._id);
//       notifySuccess("Platform disconnected successfully");
//       closeDrawer();
//     } catch (err) {
//       notifyError(err.message);
//     }
//   };

//   return (
//     <Drawer isOpen={isDrawerOpen} onClose={closeDrawer}>
//       <div className="flex flex-col h-full">
//         <div className="flex justify-between items-center p-4 border-b">
//           <h2 className="text-lg font-semibold">
//             {platform._id ? "Edit Platform" : "Connect New Platform"}
//           </h2>
//           <button onClick={closeDrawer} className="p-1 rounded-lg hover:bg-gray-100">
//             <FiX className="w-5 h-5" />
//           </button>
//         </div>

//         <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-4">
//           <div className="space-y-4">
//             <Label>
//               <span>Platform</span>
//               <Select
//                 className="mt-1"
//                 value={platform.name}
//                 onChange={(e) => setPlatform({ ...platform, name: e.target.value })}
//                 disabled={!!platform._id}
//               >
//                 <option value="">Select Platform</option>
//                 <option value="Amazon">Amazon</option>
//                 <option value="Flipkart">Flipkart</option>
//                 <option value="Myntra">Myntra</option>
//                 <option value="Meesho">Meesho</option>
//                 <option value="JioMart">JioMart</option>
//                 <option value="Shopify">Shopify</option>
//               </Select>
//             </Label>

//             <Label>
//               <span>API Key</span>
//               <Input
//                 className="mt-1"
//                 type="text"
//                 value={platform.apiKey}
//                 onChange={(e) => setPlatform({ ...platform, apiKey: e.target.value })}
//                 placeholder="Enter platform API key"
//               />
//             </Label>

//             <Label>
//               <span>Secret Key</span>
//               <Input
//                 className="mt-1"
//                 type="password"
//                 value={platform.secretKey}
//                 onChange={(e) => setPlatform({ ...platform, secretKey: e.target.value })}
//                 placeholder="Enter platform secret key"
//               />
//             </Label>

//             <Label>
//               <span>Marketplace</span>
//               <Select
//                 className="mt-1"
//                 value={platform.marketplace}
//                 onChange={(e) => setPlatform({ ...platform, marketplace: e.target.value })}
//               >
//                 <option value="IN">India</option>
//                 <option value="US">United States</option>
//                 <option value="EU">Europe</option>
//                 <option value="AE">Middle East</option>
//               </Select>
//             </Label>

//             <Label className="flex items-center justify-between">
//               <span>Active Connection</span>
//               <ToggleSwitch
//                 checked={platform.isActive}
//                 onChange={() => setPlatform({ ...platform, isActive: !platform.isActive })}
//               />
//             </Label>

//             <Label>
//               <span>Sync Frequency</span>
//               <Select
//                 className="mt-1"
//                 value={platform.syncFrequency}
//                 onChange={(e) => setPlatform({ ...platform, syncFrequency: e.target.value })}
//               >
//                 <option value="hourly">Hourly</option>
//                 <option value="daily">Daily</option>
//                 <option value="weekly">Weekly</option>
//                 <option value="manual">Manual Only</option>
//               </Select>
//             </Label>

//             <Label>
//               <span>Additional Settings (JSON)</span>
//               <Textarea
//                 className="mt-1 font-mono text-sm"
//                 rows={4}
//                 value={JSON.stringify(platform.additionalSettings, null, 2)}
//                 onChange={(e) => {
//                   try {
//                     setPlatform({
//                       ...platform,
//                       additionalSettings: JSON.parse(e.target.value),
//                     });
//                   } catch (err) {
//                     // Invalid JSON - keep previous value
//                   }
//                 }}
//                 placeholder='{"key": "value"}'
//               />
//             </Label>
//           </div>
//         </form>

//         <div className="flex justify-between p-4 border-t">
//           {platform._id && (
//             <Button
//               layout="outline"
//               onClick={handleDelete}
//               className="text-red-600 border-red-600 hover:bg-red-50"
//             >
//               <FiTrash2 className="mr-2" />
//               Disconnect
//             </Button>
//           )}
//           <div className="flex space-x-2 ml-auto">
//             <Button layout="outline" onClick={closeDrawer}>
//               Cancel
//             </Button>
//             <Button onClick={handleSubmit} iconRight={FiSave}>
//               {platform._id ? "Update" : "Connect"}
//             </Button>
//           </div>
//         </div>
//       </div>
//     </Drawer>
//   );
// };

// export default PlatformDrawer;