"use client";
import { useState } from "react";

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
  members?: Member[]; // Optional if includeMembers is false
  createdAt: string;
}

const AdminPanel = () => {
  const [eventName, setEventName] = useState<string>("");
  const [includeMembers, setIncludeMembers] = useState<boolean>(false);
  const [teams, setTeams] = useState<Record<string, Team>>({});
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

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
      // Add headers for full member details
      csvRows.push(
        "Team Name,Event Name,Member Name,Member Email,Phone,Department,Year,Institution"
      );

      // Add data for all members
      Object.values(teams).forEach((team) => {
        team.members?.forEach((member) => {
          csvRows.push(
            `"${team.teamName}","${team.eventName}","${member.name}","${member.email}","${member.phone}","${member.department}","${member.year}","${member.institution}"`
          );
        });
      });
    } else {
      // Add headers for leader-only details
      csvRows.push("Team Name,Event Name,Leader Name,Leader Email,Phone");

      // Add data for leaders only
      Object.values(teams).forEach((team) => {
        const leader = team.members?.find(
          (member) => member.id === team.leaderId
        );
        if (leader) {
          csvRows.push(
            `"${team.teamName}","${team.eventName}","${leader.name}","${leader.email}","${leader.phone}"`
          );
        } else {
          // Fallback in case leader details are not available
          csvRows.push(`"${team.teamName}","${team.eventName}",,,`);
        }
      });
    }

    // Create a blob and trigger download
    const blob = new Blob([csvRows.join("\n")], { type: "text/csv" });
    const url = URL.createObjectURL(blob);

    // Generate a timestamp for the filename
    const now = new Date();
    const timestamp = now.toISOString().replace(/[:.-]/g, "_"); // Format the date and time safely
    const a = document.createElement("a");
    a.href = url;
    a.download = `${eventName || "teams"}_${timestamp}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="bg-gray-800 min-h-screen w-full">
      <div className="p-6 max-w-4xl mx-auto bg-gray-800 text-gray-200 border-x">
        <h1 className="text-2xl font-bold mb-4 text-white">Admin Panel</h1>

        <div className="mb-4">
          <label
            htmlFor="eventName"
            className="block text-sm font-medium mb-2 text-gray-300"
          >
            Event Name
          </label>
          <select
            id="eventName"
            className="border border-gray-600 rounded px-3 py-2 w-full bg-gray-700 text-gray-200"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
          >
            <option value="">Select an event</option>
            <option value="sparkhack">sparkhack</option>
            <option value="decisia">decisia</option>
            <option value="aboltabol">aboltabol</option>
            <option value="circuistics">circuistics</option>
            <option value="eureka">eureka</option>
            <option value="frames">frames</option>
            <option value="inquizzitive">inquizzitive</option>
            <option value="algomaniac">algomaniac</option>
            <option value="jutalks">jutalks</option>
          </select>
        </div>

        <div className="mb-4">
          <label
            htmlFor="includeMembers"
            className="flex items-center gap-2 text-gray-300"
          >
            <input
              id="includeMembers"
              type="checkbox"
              checked={includeMembers}
              onChange={(e) => setIncludeMembers(e.target.checked)}
              className="bg-gray-700"
            />
            Include Members
          </label>
        </div>

        <button
          className="bg-blue-600 text-white px-4 py-2 mr-4 rounded hover:bg-blue-700 disabled:opacity-50"
          onClick={fetchTeams}
          disabled={loading}
        >
          {loading ? "Fetching..." : "Fetch Teams"}
        </button>

        {error && <p className="text-red-400 mt-4">{error}</p>}

        {Object.keys(teams).length > 0 && (
          <button
            className="bg-green-600 text-white px-4 py-2 rounded mt-4 hover:bg-green-700"
            onClick={exportToCSV}
          >
            Export to CSV
          </button>
        )}

        <div className="mt-6">
          {Object.keys(teams).length > 0 ? (
            <div>
              <h2 className="text-xl font-bold mb-4 text-white">Teams</h2>
              <div className="overflow-x-auto">
                {Object.entries(teams).map(([teamId, team]) => (
                  <div
                    key={teamId}
                    className="border border-gray-600 p-4 rounded mb-6 bg-gray-700 overflow-auto"
                  >
                    <h3 className="text-lg font-semibold mb-2 text-gray-200">
                      {team.teamName}
                    </h3>
                    <p className="text-sm text-gray-400 mb-2">
                      Event: {team.eventName}
                    </p>
                    <table className="w-full border-collapse border border-gray-600 text-left text-sm text-gray-200">
                      <thead>
                        <tr className="bg-gray-600">
                          <th className="border border-gray-500 px-4 py-2">
                            Name
                          </th>
                          <th className="border border-gray-500 px-4 py-2">
                            Email
                          </th>
                          <th className="border border-gray-500 px-4 py-2">
                            Phone
                          </th>
                          <th className="border border-gray-500 px-4 py-2">
                            Department
                          </th>
                          <th className="border border-gray-500 px-4 py-2">
                            Year
                          </th>
                          <th className="border border-gray-500 px-4 py-2">
                            Institution
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {team.members
                          ?.filter((member) =>
                            includeMembers ? true : member.id === team.leaderId
                          )
                          .map((member) => (
                            <tr
                              key={member.id}
                              className={`${
                                member.id === team.leaderId
                                  ? "bg-green-800 font-bold"
                                  : "bg-gray-800"
                              }`}
                            >
                              <td className="border border-gray-500 px-4 py-2">
                                {member.name}
                              </td>
                              <td className="border border-gray-500 px-4 py-2">
                                {member.email}
                              </td>
                              <td className="border border-gray-500 px-4 py-2">
                                {member.phone}
                              </td>
                              <td className="border border-gray-500 px-4 py-2">
                                {member.department}
                              </td>
                              <td className="border border-gray-500 px-4 py-2">
                                {member.year}
                              </td>
                              <td className="border border-gray-500 px-4 py-2">
                                {member.institution}
                              </td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <p className="text-gray-400 mt-4">No teams found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
