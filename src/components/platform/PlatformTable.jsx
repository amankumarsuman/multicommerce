// import {
//   Badge,
//   Button,
//   Table,
//   TableBody,
//   TableCell,
//   TableRow,
// } from "@windmill/react-ui";
// import { FiRefreshCw, FiSettings, FiUnlink } from "react-icons/fi";
// import { useTranslation } from "react-i18next";

// const PlatformTable = ({ platforms, onRefresh, onDisconnect, onConfigure }) => {
//   const { t } = useTranslation();

//   const getStatusBadge = (status) => {
//     switch (status) {
//       case "active":
//         return <Badge type="success">Active</Badge>;
//       case "inactive":
//         return <Badge type="danger">Inactive</Badge>;
//       case "syncing":
//         return <Badge type="primary">Syncing</Badge>;
//       default:
//         return <Badge type="neutral">Unknown</Badge>;
//     }
//   };

//   const formatLastSynced = (dateString) => {
//     if (!dateString) return "Never";
//     return new Date(dateString).toLocaleString();
//   };

//   return (
//     <TableBody>
//       {platforms.map((platform) => (
//         <TableRow key={platform.id}>
//           <TableCell>
//             <div className="flex items-center">
//               <img
//                 src={platform.logo}
//                 alt={platform.name}
//                 className="w-8 h-8 mr-3 object-contain"
//               />
//               <span className="font-medium">{platform.name}</span>
//             </div>
//           </TableCell>
//           <TableCell>
//             {getStatusBadge(platform.status)}
//           </TableCell>
//           <TableCell>
//             {formatLastSynced(platform.lastSynced)}
//           </TableCell>
//           <TableCell>
//             <span className="font-semibold">{platform.products}</span>
//           </TableCell>
//           <TableCell>
//             <div className="flex justify-center space-x-2">
//               <Button
//                 icon={FiRefreshCw}
//                 layout="outline"
//                 size="small"
//                 onClick={() => onRefresh(platform.id)}
//                 aria-label={`Refresh ${platform.name}`}
//               />
//               <Button
//                 icon={FiSettings}
//                 layout="outline"
//                 size="small"
//                 onClick={() => onConfigure(platform.id)}
//                 aria-label={`Configure ${platform.name}`}
//               />
//               <Button
//                 icon={FiUnlink}
//                 layout="outline"
//                 size="small"
//                 onClick={() => onDisconnect(platform.id)}
//                 aria-label={`Disconnect ${platform.name}`}
//                 className="text-red-600 border-red-600 hover:bg-red-50"
//               />
//             </div>
//           </TableCell>
//         </TableRow>
//       ))}
//     </TableBody>
//   );
// };

// export default PlatformTable;