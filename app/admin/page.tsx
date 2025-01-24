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
        body: JSON.stringify({ eventName, includeMembers }),
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

    // Add headers
    csvRows.push(
      "Team ID,Team Name,Event Name,Leader ID,Max Size,Member ID,Member Name,Member Email,Phone,Department,Year,Institution"
    );

    // Add data
    Object.values(teams).forEach((team) => {
      if (includeMembers && team.members) {
        team.members.forEach((member) => {
          csvRows.push(
            `"${team.id}","${team.teamName}","${team.eventName}","${team.leaderId}","${team.maxSize}","${member.id}","${member.name}","${member.email}","${member.phone}","${member.department}","${member.year}","${member.institution}"`
          );
        });
      } else {
        csvRows.push(
          `"${team.id}","${team.teamName}","${team.eventName}","${team.leaderId}","${team.maxSize}",,,,,,,`
        );
      }
    });

    // Create a blob and trigger download
    const blob = new Blob([csvRows.join("\n")], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${eventName || "teams"}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>

      <div className="mb-4">
        <label htmlFor="eventName" className="block text-sm font-medium mb-2">
          Event Name
        </label>
        <input
          id="eventName"
          type="text"
          className="border border-gray-300 rounded px-3 py-2 w-full"
          placeholder="Enter event name"
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="includeMembers" className="flex items-center gap-2">
          <input
            id="includeMembers"
            type="checkbox"
            checked={includeMembers}
            onChange={(e) => setIncludeMembers(e.target.checked)}
          />
          Include Members
        </label>
      </div>

      <button
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:opacity-50"
        onClick={fetchTeams}
        disabled={loading}
      >
        {loading ? "Fetching..." : "Fetch Teams"}
      </button>

      {error && <p className="text-red-500 mt-4">{error}</p>}

      {Object.keys(teams).length > 0 && (
        <button
          className="bg-green-500 text-white px-4 py-2 rounded mt-4 hover:bg-green-600"
          onClick={exportToCSV}
        >
          Export to CSV
        </button>
      )}

      <div className="mt-6">
        {Object.keys(teams).length > 0 ? (
          <div>
            <h2 className="text-xl font-bold mb-4">Teams</h2>
            <div className="space-y-6">
              {Object.entries(teams).map(([teamId, team]) => (
                <div
                  key={teamId}
                  className="border border-gray-300 p-4 rounded"
                >
                  <h3 className="text-lg font-semibold">{team.teamName}</h3>
                  <p className="text-sm text-gray-500">
                    Event: {team.eventName}
                  </p>
                  <p className="text-sm text-gray-500">
                    Leader ID: {team.leaderId}
                  </p>
                  <p className="text-sm text-gray-500">
                    Max Size: {team.maxSize}
                  </p>

                  {includeMembers && team.members && (
                    <div className="mt-4">
                      <h4 className="text-md font-semibold mb-2">Members:</h4>
                      <ul className="space-y-2">
                        {team.members.map((member) => (
                          <li
                            key={member.id}
                            className="border border-gray-200 rounded p-2"
                          >
                            <p className="font-medium">{member.name}</p>
                            <p className="text-sm text-gray-500">
                              Email: {member.email}
                            </p>
                            <p className="text-sm text-gray-500">
                              Phone: {member.phone}
                            </p>
                            <p className="text-sm text-gray-500">
                              Department: {member.department}
                            </p>
                            <p className="text-sm text-gray-500">
                              Year: {member.year}
                            </p>
                            <p className="text-sm text-gray-500">
                              Institution: {member.institution}
                            </p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ) : (
          <p className="text-gray-500 mt-4">No teams found.</p>
        )}
      </div>
    </div>
  );
};

export default AdminPanel;
