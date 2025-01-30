"use client";

import React, { useEffect, useState } from "react";
import { LuUsers } from "react-icons/lu";
import { LuActivity } from "react-icons/lu";
import { LuLoader } from "react-icons/lu";
import { LuChartBar } from "react-icons/lu";

interface UsersPerEvent {
  eventName: string;
  _count: {
    _all: number;
  };
}

function SuperAdmin() {
  const [totalUsers, setTotalUsers] = useState<number>(0);
  const [usersPerEvent, setUsersPerEvent] = useState<UsersPerEvent[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/superadmin");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setTotalUsers(data.totalUsers);
        setUsersPerEvent(data.usersPerEvent);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="flex items-center gap-2 text-slate-400">
          <LuLoader className="w-6 h-6 animate-spin" />
          <span className="text-lg font-medium">Loading dashboard...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-slate-950 p-8 flex items-center justify-center">
        <div className="bg-red-950/50 text-red-400 p-4 rounded-lg max-w-md text-center border border-red-900/50">
          <p className="font-medium">{error}</p>
        </div>
      </div>
    );
  }

  const getGradientColor = (index: number, total: number) => {
    const hue = (index / total) * 180 + 200; // Range from 200 to 380 (blue to purple)
    return `hsl(${hue}, 70%, 15%)`; // Darker version for dark mode
  };

  return (
    <div className="min-h-screen bg-slate-950">
      <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
        <div className="flex items-center gap-3 mb-8">
          <LuChartBar className="w-8 h-8 text-indigo-400" />
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-200">
            Superadmin Dashboard
          </h1>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
          {/* Total Users Card */}
          <div className="bg-slate-900/50 rounded-xl shadow-lg border border-slate-800/50 p-6 backdrop-blur-sm">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-indigo-950/50 rounded-lg border border-indigo-900/50">
                <LuUsers className="w-6 h-6 text-indigo-400" />
              </div>
              <h2 className="text-lg font-semibold text-slate-200">
                Total Users
              </h2>
            </div>
            <p className="text-4xl font-bold text-slate-100">
              {totalUsers.toLocaleString()}
            </p>
          </div>

          {/* Event Cards */}
          {usersPerEvent.map((event, index) => (
            <div
              key={event.eventName}
              className="bg-slate-900/50 rounded-xl shadow-lg border border-slate-800/50 overflow-hidden group hover:shadow-xl hover:shadow-slate-900/50 transition-all duration-200 backdrop-blur-sm"
            >
              <div
                className="h-2"
                style={{
                  backgroundColor: getGradientColor(
                    index,
                    usersPerEvent.length
                  ),
                }}
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 bg-slate-800/50 rounded-lg border border-slate-700/50">
                    <LuActivity className="w-5 h-5 text-slate-300" />
                  </div>
                  <span className="text-sm font-medium text-slate-400">
                    {((event._count._all / totalUsers) * 100).toFixed(1)}% of
                    total
                  </span>
                </div>
                <h3 className="font-semibold text-slate-200 mb-2">
                  {event.eventName}
                </h3>
                <p className="text-3xl font-bold text-slate-100">
                  {event._count._all.toLocaleString()}
                </p>
                <p className="text-sm text-slate-400 mt-1">users</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SuperAdmin;
