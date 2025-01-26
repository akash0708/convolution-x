// "use client";
// import { useState } from "react";

// interface Member {
//   id: string;
//   name: string;
//   email: string;
//   phone: string;
//   department: string;
//   year: string;
//   institution: string;
// }

// interface Team {
//   id: string;
//   teamName: string;
//   eventName: string;
//   leaderId: string;
//   maxSize: number;
//   members?: Member[]; // Optional if includeMembers is false
//   createdAt: string;
// }

// const AdminPanel = () => {
//   const [eventName, setEventName] = useState<string>("");
//   const [includeMembers, setIncludeMembers] = useState<boolean>(false);
//   const [teams, setTeams] = useState<Record<string, Team>>({});
//   const [loading, setLoading] = useState<boolean>(false);
//   const [error, setError] = useState<string | null>(null);

//   const fetchTeams = async () => {
//     if (!eventName) {
//       setError("Please enter an event name.");
//       return;
//     }

//     setLoading(true);
//     setError(null);

//     try {
//       const response = await fetch("/api/admin/teams", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ eventName, includeMembers: true }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         setTeams(data.teams || {});
//         console.log(data.teams);
//       } else {
//         setError(data.error || "Failed to fetch teams.");
//       }
//     } catch (err: any) {
//       console.log(err);
//       setError("An error occurred. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const exportToCSV = () => {
//     const csvRows: string[] = [];

//     if (includeMembers) {
//       // Add headers for full member details
//       csvRows.push(
//         "Team Name,Event Name,Member Name,Member Email,Phone,Department,Year,Institution"
//       );

//       // Add data for all members
//       Object.values(teams).forEach((team) => {
//         team.members?.forEach((member) => {
//           csvRows.push(
//             `"${team.teamName}","${team.eventName}","${member.name}","${member.email}","${member.phone}","${member.department}","${member.year}","${member.institution}"`
//           );
//         });
//       });
//     } else {
//       // Add headers for leader-only details
//       csvRows.push("Team Name,Event Name,Leader Name,Leader Email,Phone");

//       // Add data for leaders only
//       Object.values(teams).forEach((team) => {
//         const leader = team.members?.find(
//           (member) => member.id === team.leaderId
//         );
//         if (leader) {
//           csvRows.push(
//             `"${team.teamName}","${team.eventName}","${leader.name}","${leader.email}","${leader.phone}"`
//           );
//         } else {
//           // Fallback in case leader details are not available
//           csvRows.push(`"${team.teamName}","${team.eventName}",,,`);
//         }
//       });
//     }

//     // Create a blob and trigger download
//     const blob = new Blob([csvRows.join("\n")], { type: "text/csv" });
//     const url = URL.createObjectURL(blob);

//     // Generate a timestamp for the filename
//     const now = new Date();
//     const timestamp = now.toISOString().replace(/[:.-]/g, "_"); // Format the date and time safely
//     const a = document.createElement("a");
//     a.href = url;
//     a.download = `${eventName || "teams"}_${timestamp}.csv`;
//     a.click();
//     URL.revokeObjectURL(url);
//   };

//   return (
//     <div className="bg-gray-800 min-h-screen w-full">
//       <div className="p-6 max-w-4xl mx-auto bg-gray-800 text-gray-200 border-x">
//         <h1 className="text-2xl font-bold mb-4 text-white">Admin Panel</h1>

//         <div className="mb-4">
//           <label
//             htmlFor="eventName"
//             className="block text-sm font-medium mb-2 text-gray-300"
//           >
//             Event Name
//           </label>
//           <select
//             id="eventName"
//             className="border border-gray-600 rounded px-3 py-2 w-full bg-gray-700 text-gray-200"
//             value={eventName}
//             onChange={(e) => setEventName(e.target.value)}
//           >
//             <option value="">Select an event</option>
//             <option value="sparkhack">sparkhack</option>
//             <option value="decisia">decisia</option>
//             <option value="aboltabol">aboltabol</option>
//             <option value="circuistics">circuistics</option>
//             <option value="eureka">eureka</option>
//             <option value="frames">frames</option>
//             <option value="inquizzitive">inquizzitive</option>
//             <option value="algomaniac">algomaniac</option>
//             <option value="jutalks">jutalks</option>
//           </select>
//         </div>

//         <div className="mb-4">
//           <label
//             htmlFor="includeMembers"
//             className="flex items-center gap-2 text-gray-300"
//           >
//             <input
//               id="includeMembers"
//               type="checkbox"
//               checked={includeMembers}
//               onChange={(e) => setIncludeMembers(e.target.checked)}
//               className="bg-gray-700"
//             />
//             Include Members
//           </label>
//         </div>

//         <button
//           className="bg-blue-600 text-white px-4 py-2 mr-4 rounded hover:bg-blue-700 disabled:opacity-50"
//           onClick={fetchTeams}
//           disabled={loading}
//         >
//           {loading ? "Fetching..." : "Fetch Teams"}
//         </button>

//         {error && <p className="text-red-400 mt-4">{error}</p>}

//         {Object.keys(teams).length > 0 && (
//           <button
//             className="bg-green-600 text-white px-4 py-2 rounded mt-4 hover:bg-green-700"
//             onClick={exportToCSV}
//           >
//             Export to CSV
//           </button>
//         )}

//         <div className="mt-6">
//           {Object.keys(teams).length > 0 ? (
//             <div>
//               <h2 className="text-xl font-bold mb-4 text-white">Teams</h2>
//               <div className="overflow-x-auto">
//                 {Object.entries(teams).map(([teamId, team]) => (
//                   <div
//                     key={teamId}
//                     className="border border-gray-600 p-4 rounded mb-6 bg-gray-700 overflow-auto"
//                   >
//                     <h3 className="text-lg font-semibold mb-2 text-gray-200">
//                       {team.teamName}
//                     </h3>
//                     <p className="text-sm text-gray-400 mb-2">
//                       Event: {team.eventName}
//                     </p>
//                     <table className="w-full border-collapse border border-gray-600 text-left text-sm text-gray-200">
//                       <thead>
//                         <tr className="bg-gray-600">
//                           <th className="border border-gray-500 px-4 py-2">
//                             Name
//                           </th>
//                           <th className="border border-gray-500 px-4 py-2">
//                             Email
//                           </th>
//                           <th className="border border-gray-500 px-4 py-2">
//                             Phone
//                           </th>
//                           <th className="border border-gray-500 px-4 py-2">
//                             Department
//                           </th>
//                           <th className="border border-gray-500 px-4 py-2">
//                             Year
//                           </th>
//                           <th className="border border-gray-500 px-4 py-2">
//                             Institution
//                           </th>
//                         </tr>
//                       </thead>
//                       <tbody>
//                         {team.members
//                           ?.filter((member) =>
//                             includeMembers ? true : member.id === team.leaderId
//                           )
//                           .map((member) => (
//                             <tr
//                               key={member.id}
//                               className={`${
//                                 member.id === team.leaderId
//                                   ? "bg-green-800 font-bold"
//                                   : "bg-gray-800"
//                               }`}
//                             >
//                               <td className="border border-gray-500 px-4 py-2">
//                                 {member.name}
//                               </td>
//                               <td className="border border-gray-500 px-4 py-2">
//                                 {member.email}
//                               </td>
//                               <td className="border border-gray-500 px-4 py-2">
//                                 {member.phone}
//                               </td>
//                               <td className="border border-gray-500 px-4 py-2">
//                                 {member.department}
//                               </td>
//                               <td className="border border-gray-500 px-4 py-2">
//                                 {member.year}
//                               </td>
//                               <td className="border border-gray-500 px-4 py-2">
//                                 {member.institution}
//                               </td>
//                             </tr>
//                           ))}
//                       </tbody>
//                     </table>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           ) : (
//             <p className="text-gray-400 mt-4">No teams found.</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminPanel;
"use client";

import React, { useState } from "react";
import { LuDownload } from "react-icons/lu";
import { LuUsers } from "react-icons/lu";
import { LuChevronDown } from "react-icons/lu";
import { LuSearch } from "react-icons/lu";
import { LuCircleAlert } from "react-icons/lu";
import { LuX } from "react-icons/lu";

interface Member {
  id: string;
  name: string;
  email: string;
  phone: string;
  department: string;
  year: string;
  institution: string;
}

interface Team {
  id: string;
  teamName: string;
  eventName: string;
  leaderId: string;
  maxSize: number;
  members?: Member[];
  createdAt: string;
}

function Admin() {
  const [eventName, setEventName] = useState<string>("");
  const [includeMembers, setIncludeMembers] = useState<boolean>(false);
  const [teams, setTeams] = useState<Record<string, Team>>({});
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const fetchTeams = async () => {
    if (!eventName) {
      setError("Please enter an event name.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/admin/teams", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ eventName, includeMembers: true }),
      });

      const data = await response.json();

      if (response.ok) {
        setTeams(data.teams || {});
        console.log(data.teams);
      } else {
        setError(data.error || "Failed to fetch teams.");
      }
    } catch (err: any) {
      console.log(err);
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const exportToCSV = () => {
    const csvRows: string[] = [];

    if (includeMembers) {
      csvRows.push(
        "Team Name,Event Name,Member Name,Member Email,Phone,Department,Year,Institution"
      );

      Object.values(teams).forEach((team) => {
        team.members?.forEach((member) => {
          csvRows.push(
            `"${team.teamName}","${team.eventName}","${member.name}","${member.email}","${member.phone}","${member.department}","${member.year}","${member.institution}"`
          );
        });
      });
    } else {
      csvRows.push("Team Name,Event Name,Leader Name,Leader Email,Phone");

      Object.values(teams).forEach((team) => {
        const leader = team.members?.find(
          (member) => member.id === team.leaderId
        );
        if (leader) {
          csvRows.push(
            `"${team.teamName}","${team.eventName}","${leader.name}","${leader.email}","${leader.phone}"`
          );
        } else {
          csvRows.push(`"${team.teamName}","${team.eventName}",,,`);
        }
      });
    }

    const blob = new Blob([csvRows.join("\n")], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const now = new Date();
    const timestamp = now.toISOString().replace(/[:.-]/g, "_");
    const a = document.createElement("a");
    a.href = url;
    a.download = `${eventName || "teams"}_${timestamp}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const filteredTeams = Object.entries(teams).filter(([_, team]) =>
    team.teamName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white">Admin Dashboard</h1>
          </div>
          <div className="flex items-center space-x-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-900 text-blue-200">
              <LuUsers className="w-4 h-4 mr-2" />
              {Object.keys(teams).length} Teams
            </span>
          </div>
        </div>

        <div className="bg-gray-800 rounded-xl shadow-xl p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Event Name
              </label>
              <div className="relative">
                <select
                  className="appearance-none block w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 pr-8 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  value={eventName}
                  onChange={(e) => setEventName(e.target.value)}
                >
                  <option value="">Select an event</option>
                  <option value="sparkhack">Sparkhack</option>
                  <option value="decisia">Decisia</option>
                  <option value="aboltabol">Aboltabol</option>
                  <option value="circuistics">Circuistics</option>
                  <option value="eureka">Eureka</option>
                  <option value="frames">Frames</option>
                  <option value="inquizzitive">Inquizzitive</option>
                  <option value="algomaniac">Algomaniac</option>
                  <option value="jutalks">Jutalks</option>
                </select>
                <LuChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
              </div>
            </div>

            <div className="flex items-center">
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={includeMembers}
                  onChange={(e) => setIncludeMembers(e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-800 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                <span className="ms-3 text-sm font-medium text-gray-300">
                  Include All Members
                </span>
              </label>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-4">
            <button
              className={`inline-flex items-center px-6 py-3 rounded-lg font-medium shadow-lg transition-all ${
                loading
                  ? "bg-gray-700 text-gray-400 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700 text-white hover:shadow-blue-500/25 hover:shadow-xl active:transform active:scale-95"
              }`}
              onClick={fetchTeams}
              disabled={loading}
            >
              <LuSearch className="w-5 h-5 mr-2" />
              {loading ? "Fetching..." : "Fetch Teams"}
            </button>

            {Object.keys(teams).length > 0 && (
              <button
                className="inline-flex items-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium shadow-lg transition-all hover:shadow-green-500/25 hover:shadow-xl active:transform active:scale-95"
                onClick={exportToCSV}
              >
                <LuDownload className="w-5 h-5 mr-2" />
                Export to CSV
              </button>
            )}
          </div>

          {error && (
            <div className="mt-4 p-4 bg-red-900/50 border border-red-700 rounded-lg flex items-center text-red-200">
              <LuCircleAlert className="w-5 h-5 mr-2 flex-shrink-0" />
              {error}
            </div>
          )}
        </div>

        {Object.keys(teams).length > 0 && (
          <div className="mb-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Search teams..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-gray-700 border border-gray-600 rounded-lg pl-10 pr-10 py-3 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
              />
              <LuSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-300 transition-colors"
                >
                  <LuX className="w-5 h-5" />
                </button>
              )}
            </div>
          </div>
        )}

        {Object.keys(teams).length > 0 ? (
          <div className="space-y-6">
            {filteredTeams.map(([teamId, team]) => (
              <div
                key={teamId}
                className="bg-gray-800 rounded-xl shadow-xl overflow-hidden"
              >
                <div className="p-6 border-b border-gray-700">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-white">
                        {team.teamName}
                      </h3>
                      <p className="text-gray-400 mt-1">
                        Event: {team.eventName}
                      </p>
                    </div>
                    <span className="px-3 py-1 rounded-full text-sm font-medium bg-gray-700 text-gray-300">
                      {team.members?.length || 0} Members
                    </span>
                  </div>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gray-900/50">
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                          Name
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                          Email
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                          Phone
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                          Department
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                          Year
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                          Institution
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-700">
                      {team.members
                        ?.filter((member) =>
                          includeMembers ? true : member.id === team.leaderId
                        )
                        .map((member) => (
                          <tr
                            key={member.id}
                            className={`${
                              member.id === team.leaderId
                                ? "bg-blue-900/20"
                                : "hover:bg-gray-700/50"
                            } transition-colors`}
                          >
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">
                              {member.name}
                              {member.id === team.leaderId && (
                                <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-900 text-blue-200">
                                  Leader
                                </span>
                              )}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                              {member.email}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                              {member.phone}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                              {member.department}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                              {member.year}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                              {member.institution}
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <LuUsers className="mx-auto h-12 w-12 text-gray-400" />
            <h3 className="mt-2 text-sm font-medium text-gray-300">No teams</h3>
            <p className="mt-1 text-sm text-gray-400">
              Select an event and fetch teams to get started
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Admin;
