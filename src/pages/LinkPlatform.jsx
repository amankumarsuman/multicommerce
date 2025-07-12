// import { useState } from 'react';
// import { FiLink,  FiRefreshCw, FiSettings, FiX } from 'react-icons/fi';
// import { TfiUnlink } from "react-icons/tfi";
// import amazonLogo from "@/assets/img/platforms/Amazon.svg";
// import flipkartLogo from "@/assets/img/platforms/flipkart.svg";

// const PlatformConnection = () => {
//   // State management
//   const [platforms, setPlatforms] = useState([
//     {
//       id: 1,
//       name: 'Amazon',
//       logo: amazonLogo,
//       connected: true,
//       lastSynced: new Date(),
//       products: 142,
//       apiKey: '',
//       secretKey: ''
//     },
//     {
//       id: 2,
//       name: 'Flipkart',
//       logo: flipkartLogo,
//       connected: false,
//       lastSynced: null,
//       products: 0,
//       apiKey: '',
//       secretKey: ''
//     }
//   ]);

//   const [currentPlatform, setCurrentPlatform] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   // Platform actions
//   const handleConnect = (platform) => {
//     setCurrentPlatform(platform);
//     setIsModalOpen(true);
//   };

//   const handleDisconnect = (platformId) => {
//     setPlatforms(platforms.map(p => 
//       p.id === platformId ? {...p, connected: false} : p
//     ));
//   };

//   const handleSubmit = () => {
//     if (currentPlatform) {
//       setPlatforms(platforms.map(p =>
//         p.id === currentPlatform.id ? {...currentPlatform, connected: true} : p
//       ));
//       setIsModalOpen(false);
//     }
//   };

//   // CSS for animations
//   const cardAnimation = {
//     hover: "hover:scale-[1.02] hover:shadow-lg transition-all duration-300",
//     base: "bg-white rounded-lg shadow-md overflow-hidden"
//   };

//   const gridLayout = {
//     container: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8",
//     item: "w-full"
//   };

//   return (
//     <div className="container mx-auto p-4">
//       {/* Platform Cards */}
//       <div className={gridLayout.container}>
//         {platforms.map(platform => (
//           <div key={platform.id} className={gridLayout.item}>
//             <div className={`${cardAnimation.base} ${cardAnimation.hover} h-full`}>
//               <div className="p-4 flex flex-col items-center h-full">
//                 <img 
//                   src={platform.logo} 
//                   alt={platform.name} 
//                   className="w-16 h-16 mb-3 object-contain"
//                 />
//                 <h3 className="text-lg font-medium">{platform.name}</h3>
                
//                 <div className="my-2">
//                   {platform.connected ? (
//                     <span className="px-2 py-1 text-xs font-semibold text-green-800 bg-green-100 rounded-full">
//                       Connected
//                     </span>
//                   ) : (
//                     <span className="px-2 py-1 text-xs font-semibold text-red-800 bg-red-100 rounded-full">
//                       Disconnected
//                     </span>
//                   )}
//                 </div>

//                 <div className="flex space-x-2 mt-3">
//                   <button
//                     className={`flex items-center px-3 py-2 rounded-md ${
//                       platform.connected 
//                         ? "border border-gray-300 hover:bg-gray-50" 
//                         : "bg-blue-500 text-white hover:bg-blue-600"
//                     }`}
//                     onClick={() => handleConnect(platform)}
//                   >
//                     {platform.connected ? (
//                       <>
//                         <FiSettings className="mr-2" />
//                         Manage
//                       </>
//                     ) : (
//                       <>
//                         <FiLink className="mr-2" />
//                         Connect
//                       </>
//                     )}
//                   </button>
                  
//                   {platform.connected && (
//                     <button
//                       className="flex items-center px-3 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
//                       onClick={() => console.log('Sync:', platform.id)}
//                     >
//                       <FiRefreshCw className="mr-2" />
//                       Sync
//                     </button>
//                   )}
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Connection Modal */}
//       {isModalOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white rounded-lg w-full max-w-md animate-fadeIn">
//             <div className="flex justify-between items-center border-b p-4">
//               <h3 className="text-lg font-semibold">
//                 Connect to {currentPlatform?.name}
//               </h3>
//               <button 
//                 onClick={() => setIsModalOpen(false)} 
//                 className="p-1 rounded hover:bg-gray-100"
//               >
//                 <FiX className="w-5 h-5" />
//               </button>
//             </div>
            
//             <div className="p-4 space-y-4">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   API Key
//                 </label>
//                 <input
//                   type="text"
//                   className="w-full px-3 py-2 border rounded-md"
//                   placeholder="Enter API key"
//                   value={currentPlatform?.apiKey || ''}
//                   onChange={(e) => setCurrentPlatform({
//                     ...currentPlatform,
//                     apiKey: e.target.value
//                   })}
//                 />
//               </div>
              
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   Secret Key
//                 </label>
//                 <input
//                   type="password"
//                   className="w-full px-3 py-2 border rounded-md"
//                   placeholder="Enter secret key"
//                   value={currentPlatform?.secretKey || ''}
//                   onChange={(e) => setCurrentPlatform({
//                     ...currentPlatform,
//                     secretKey: e.target.value
//                   })}
//                 />
//               </div>
              
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   Marketplace
//                 </label>
//                 <select className="w-full px-3 py-2 border rounded-md">
//                   <option>India</option>
//                   <option>USA</option>
//                   <option>Europe</option>
//                 </select>
//               </div>
              
//               <div className="flex items-center justify-between">
//                 <label className="text-sm font-medium text-gray-700">
//                   Active Connection
//                 </label>
//                 <div className="relative inline-block w-10 mr-2 align-middle select-none">
//                   <input 
//                     type="checkbox" 
//                     id="toggle" 
//                     className="sr-only"
//                     checked={true}
//                     onChange={() => {}}
//                   />
//                   <div className="block bg-gray-300 w-10 h-6 rounded-full"></div>
//                   <div className="dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition"></div>
//                 </div>
//               </div>
//             </div>
            
//             <div className="border-t p-4 flex justify-end space-x-2">
//               <button
//                 className="px-4 py-2 border rounded-md hover:bg-gray-50"
//                 onClick={() => setIsModalOpen(false)}
//               >
//                 Cancel
//               </button>
//               <button
//                 className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
//                 onClick={handleSubmit}
//               >
//                 Connect
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Connected Platforms Table */}
//       <div className="bg-white rounded-lg shadow-md overflow-hidden mt-8">
//         <div className="overflow-x-auto">
//           <table className="min-w-full divide-y divide-gray-200">
//             <thead className="bg-gray-50">
//               <tr>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Platform
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Status
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Last Synced
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Products
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Actions
//                 </th>
//               </tr>
//             </thead>
//             <tbody className="bg-white divide-y divide-gray-200">
//               {platforms.filter(p => p.connected).map(platform => (
//                 <tr key={platform.id} className="hover:bg-gray-50">
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     <div className="flex items-center">
//                       <img 
//                         src={platform.logo} 
//                         alt={platform.name} 
//                         className="w-8 h-8 mr-2 object-contain"
//                       />
//                       <span>{platform.name}</span>
//                     </div>
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     <span className="px-2 py-1 text-xs font-semibold text-green-800 bg-green-100 rounded-full">
//                       Active
//                     </span>
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     {platform.lastSynced.toLocaleString()}
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     {platform.products}
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     <div className="flex space-x-2">
//                       <button
//                         className="p-2 border rounded-md hover:bg-gray-50"
//                         onClick={() => console.log('Sync:', platform.id)}
//                       >
//                         <FiRefreshCw className="w-4 h-4" />
//                       </button>
//                       <button
//                         className="p-2 border rounded-md hover:bg-gray-50"
//                         onClick={() => handleConnect(platform)}
//                       >
//                         <FiSettings className="w-4 h-4" />
//                       </button>
//                       <button
//                         className="p-2 border rounded-md hover:bg-gray-50"
//                         onClick={() => handleDisconnect(platform.id)}
//                       >
//                         <TfiUnlink className="w-4 h-4" />
//                       </button>
//                     </div>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>

//       {/* Add CSS animations */}
//       <style jsx>{`
//         @keyframes fadeIn {
//           from { opacity: 0; transform: translateY(-10px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//         .animate-fadeIn {
//           animation: fadeIn 0.3s ease-out forwards;
//         }
//         #toggle:checked ~ .dot {
//           transform: translateX(100%);
//           background-color: #3B82F6;
//         }
//         #toggle:checked ~ .block {
//           background-color: #93C5FD;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default PlatformConnection;

import { useContext, useState } from 'react';
import { FiLink, FiRefreshCw, FiSettings, FiX } from 'react-icons/fi';
import { TfiUnlink } from "react-icons/tfi";
import amazonLogo from "@/assets/img/platforms/Amazon.svg";
import flipkartLogo from "@/assets/img/platforms/flipkart.svg";
import { Card, CardBody, WindmillContext } from "@windmill/react-ui";
import { useTranslation } from 'react-i18next';

const PlatformConnection = () => {
  // State management

  const { t } = useTranslation();
    const { mode } = useContext(WindmillContext);
  const [platforms, setPlatforms] = useState([
    {
      id: 1,
      name: 'Amazon',
      logo: amazonLogo,
      connected: true,
      lastSynced: new Date(),
      products: 142,
      apiKey: '',
      secretKey: ''
    },
    {
      id: 2,
      name: 'Flipkart',
      logo: flipkartLogo,
      connected: false,
      lastSynced: null,
      products: 0,
      apiKey: '',
      secretKey: ''
    }
  ]);

  const [currentPlatform, setCurrentPlatform] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Platform actions
  const handleConnect = (platform) => {
    setCurrentPlatform(platform);
    setIsModalOpen(true);
  };

  const handleDisconnect = (platformId) => {
    setPlatforms(platforms.map(p => 
      p.id === platformId ? {...p, connected: false} : p
    ));
  };

  const handleSubmit = () => {
    if (currentPlatform) {
      setPlatforms(platforms.map(p =>
        p.id === currentPlatform.id ? {...currentPlatform, connected: true} : p
      ));
      setIsModalOpen(false);
    }
  };

  // Dark mode classes
  const darkModeClasses = {
    bg: mode === 'dark' ? 'bg-gray-900' : 'bg-white',
    text: mode === 'dark' ? 'text-gray-200' : 'text-gray-800',
    border: mode === 'dark' ? 'border-gray-700' : 'border-gray-200',
    hoverBg: mode === 'dark' ? 'hover:bg-gray-800' : 'hover:bg-gray-50',
    modalBg: mode === 'dark' ? 'bg-gray-800' : 'bg-white',
    tableHeaderBg: mode === 'dark' ? 'bg-gray-700' : 'bg-gray-50',
    tableHeaderText: mode === 'dark' ? 'text-gray-300' : 'text-gray-500',
    tableRowHover: mode === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-gray-50',
    inputBg: mode === 'dark' ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-800',
    buttonPrimary: mode === 'dark' ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600',
    buttonSecondary: mode === 'dark' ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'
  };

  // CSS for animations
  const cardAnimation = {
    hover: "hover:scale-[1.02] hover:shadow-lg transition-all duration-300",
    base: `rounded-lg shadow-md overflow-hidden ${darkModeClasses.bg} ${darkModeClasses.border} border`
  };

  const gridLayout = {
    container: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8",
    item: "w-full"
  };

  return (
    <div className={`container mx-auto p-4 ${darkModeClasses.bg} ${darkModeClasses.text} min-h-screen`}>
      {/* Platform Cards */}
      <div className={gridLayout.container}>
        {platforms.map(platform => (
          <div key={platform.id} className={gridLayout.item}>
            <Card className={`${cardAnimation.base} ${cardAnimation.hover} h-full`}>
              <CardBody className="p-4 flex flex-col items-center h-full">
                <img 
                  src={platform.logo} 
                  alt={platform.name} 
                  className="w-16 h-16 mb-3 object-contain"
                />
                <h3 className="text-lg font-medium">{platform.name}</h3>
                
                <div className="my-2">
                  {platform.connected ? (
                    <span className="px-2 py-1 text-xs font-semibold text-green-800 bg-green-100 rounded-full dark:bg-green-900 dark:text-green-200">
                      Connected
                    </span>
                  ) : (
                    <span className="px-2 py-1 text-xs font-semibold text-red-800 bg-red-100 rounded-full dark:bg-red-900 dark:text-red-200">
                      Disconnected
                    </span>
                  )}
                </div>

                <div className="flex space-x-2 mt-3">
                  <button
                    className={`flex items-center px-3 py-2 rounded-md ${
                      platform.connected 
                        ? `border ${darkModeClasses.border} ${darkModeClasses.hoverBg}`
                        : `${darkModeClasses.buttonPrimary} text-white`
                    }`}
                    onClick={() => handleConnect(platform)}
                  >
                    {platform.connected ? (
                      <>
                        <FiSettings className="mr-2" />
                        Manage
                      </>
                    ) : (
                      <>
                        <FiLink className="mr-2" />
                        Connect
                      </>
                    )}
                  </button>
                  
                  {platform.connected && (
                    <button
                      className={`flex items-center px-3 py-2 border ${darkModeClasses.border} rounded-md ${darkModeClasses.hoverBg}`}
                      onClick={() => console.log('Sync:', platform.id)}
                    >
                      <FiRefreshCw className="mr-2" />
                      Sync
                    </button>
                  )}
                </div>
              </CardBody>
            </Card>
          </div>
        ))}
      </div>

      {/* Connection Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className={`${darkModeClasses.modalBg} rounded-lg w-full max-w-md animate-fadeIn ${darkModeClasses.border} border`}>
            <div className={`flex justify-between items-center border-b ${darkModeClasses.border} p-4`}>
              <h3 className="text-lg font-semibold">
                Connect to {currentPlatform?.name}
              </h3>
              <button 
                onClick={() => setIsModalOpen(false)} 
                className={`p-1 rounded ${darkModeClasses.hoverBg}`}
              >
                <FiX className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-4 space-y-4">
              <div>
                <label className={`block text-sm font-medium mb-1 ${mode === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  API Key
                </label>
                <input
                  type="text"
                  className={`w-full px-3 py-2 rounded-md ${darkModeClasses.inputBg}`}
                  placeholder="Enter API key"
                  value={currentPlatform?.apiKey || ''}
                  onChange={(e) => setCurrentPlatform({
                    ...currentPlatform,
                    apiKey: e.target.value
                  })}
                />
              </div>
              
              <div>
                <label className={`block text-sm font-medium mb-1 ${mode === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  Secret Key
                </label>
                <input
                  type="password"
                  className={`w-full px-3 py-2 rounded-md ${darkModeClasses.inputBg}`}
                  placeholder="Enter secret key"
                  value={currentPlatform?.secretKey || ''}
                  onChange={(e) => setCurrentPlatform({
                    ...currentPlatform,
                    secretKey: e.target.value
                  })}
                />
              </div>
              
              <div>
                <label className={`block text-sm font-medium mb-1 ${mode === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  Marketplace
                </label>
                <select className={`w-full px-3 py-2 rounded-md ${darkModeClasses.inputBg}`}>
                  <option>India</option>
                  <option>USA</option>
                  <option>Europe</option>
                </select>
              </div>
              
              <div className="flex items-center justify-between">
                <label className={`text-sm font-medium ${mode === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  Active Connection
                </label>
                <div className="relative inline-block w-10 mr-2 align-middle select-none">
                  <input 
                    type="checkbox" 
                    id="toggle" 
                    className="sr-only"
                    checked={true}
                    onChange={() => {}}
                  />
                  <div className={`block ${mode === 'dark' ? 'bg-gray-600' : 'bg-gray-300'} w-10 h-6 rounded-full`}></div>
                  <div className="dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition"></div>
                </div>
              </div>
            </div>
            
            <div className={`border-t ${darkModeClasses.border} p-4 flex justify-end space-x-2`}>
              <button
                className={`px-4 py-2 border ${darkModeClasses.border} rounded-md ${darkModeClasses.hoverBg}`}
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </button>
              <button
                className={`px-4 py-2 ${darkModeClasses.buttonPrimary} text-white rounded-md`}
                onClick={handleSubmit}
              >
                Connect
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Connected Platforms Table */}
      <Card className="rounded-lg shadow-md overflow-hidden mt-8">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className={darkModeClasses.tableHeaderBg}>
              <tr>
                <th className={`px-6 py-3 text-left text-xs font-medium ${darkModeClasses.tableHeaderText} uppercase tracking-wider`}>
                  Platform
                </th>
                <th className={`px-6 py-3 text-left text-xs font-medium ${darkModeClasses.tableHeaderText} uppercase tracking-wider`}>
                  Status
                </th>
                <th className={`px-6 py-3 text-left text-xs font-medium ${darkModeClasses.tableHeaderText} uppercase tracking-wider`}>
                  Last Synced
                </th>
                <th className={`px-6 py-3 text-left text-xs font-medium ${darkModeClasses.tableHeaderText} uppercase tracking-wider`}>
                  Products
                </th>
                <th className={`px-6 py-3 text-left text-xs font-medium ${darkModeClasses.tableHeaderText} uppercase tracking-wider`}>
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className={`${darkModeClasses.bg} divide-y ${mode === 'dark' ? 'divide-gray-700' : 'divide-gray-200'}`}>
              {platforms.filter(p => p.connected).map(platform => (
                <tr key={platform.id} className={darkModeClasses.tableRowHover}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <img 
                        src={platform.logo} 
                        alt={platform.name} 
                        className="w-8 h-8 mr-2 object-contain"
                      />
                      <span>{platform.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 text-xs font-semibold text-green-800 bg-green-100 rounded-full dark:bg-green-900 dark:text-green-200">
                      Active
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {platform.lastSynced.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {platform.products}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex space-x-2">
                      <button
                        className={`p-2 border ${darkModeClasses.border} rounded-md ${darkModeClasses.hoverBg}`}
                        onClick={() => console.log('Sync:', platform.id)}
                      >
                        <FiRefreshCw className="w-4 h-4" />
                      </button>
                      <button
                        className={`p-2 border ${darkModeClasses.border} rounded-md ${darkModeClasses.hoverBg}`}
                        onClick={() => handleConnect(platform)}
                      >
                        <FiSettings className="w-4 h-4" />
                      </button>
                      <button
                        className={`p-2 border ${darkModeClasses.border} rounded-md ${darkModeClasses.hoverBg}`}
                        onClick={() => handleDisconnect(platform.id)}
                      >
                        <TfiUnlink className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Add CSS animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
        #toggle:checked ~ .dot {
          transform: translateX(100%);
          background-color: #3B82F6;
        }
        #toggle:checked ~ .block {
          background-color: ${mode === 'dark' ? '#1E40AF' : '#93C5FD'};
        }
      `}</style>
    </div>
  );
};

export default PlatformConnection;