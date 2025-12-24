"use client";

import { useState, useMemo } from "react";
import {
  Mail,
  Search,
  Bell,
  MoreHorizontal,
  Eye,
  Trash2,
  LayoutDashboard,
  LogOut,
  TrendingUp,
  Clock,
  CheckCircle,
  ArrowRight,
  X
} from "lucide-react";

// === Seed Data ===
interface Submission {
  id: number;
  customerName: string;
  email: string;
  inquiryType: string;
  message: string;
  status: "New" | "In Progress" | "Resolved";
  submittedAt: string;
  method: string;
}

const initialSubmissions: Submission[] = [
  {
    id: 101,
    customerName: "Alice Johnson",
    email: "alice.j@example.com",
    inquiryType: "Service Inquiry",
    message: "I am interested in your wealth management services. Can you provide more details about the minimum investment required?",
    status: "New",
    submittedAt: "2024-05-10T09:30:00Z",
    method: "POST"
  },
  {
    id: 102,
    customerName: "Michael Smith",
    email: "m.smith88@test.com",
    inquiryType: "General Question",
    message: "Do you offer consultations for international clients?",
    status: "In Progress",
    submittedAt: "2024-05-09T14:15:00Z",
    method: "POST"
  },
  {
    id: 103,
    customerName: "Sarah Davis",
    email: "sdavis@workmail.com",
    inquiryType: "Bug Report",
    message: "I found a typo on your services page under the 'Market Analysis' section.",
    status: "Resolved",
    submittedAt: "2024-05-08T11:00:00Z",
    method: "POST"
  },
  {
    id: 104,
    customerName: "James Wilson",
    email: "jwilson_invest@gmail.com",
    inquiryType: "Service Inquiry",
    message: "Looking to diversify my portfolio with crypto assets. Do you have experts in this field?",
    status: "New",
    submittedAt: "2024-05-10T16:45:00Z",
    method: "POST"
  },
  {
    id: 105,
    customerName: "Emma Brown",
    email: "emma.b@studio.design",
    inquiryType: "General Question",
    message: "Hi, I'm reaching out to see if you have any partnership opportunities for design agencies.",
    status: "New",
    submittedAt: "2024-05-11T08:20:00Z",
    method: "POST"
  },
  {
    id: 106,
    customerName: "Robert Taylor",
    email: "robert.t@techcorp.io",
    inquiryType: "Bug Report",
    message: "The contact form submit button didn't show a loading state on my mobile device (iPhone 13).",
    status: "In Progress",
    submittedAt: "2024-05-11T10:05:00Z",
    method: "POST"
  },
  {
    id: 107,
    customerName: "Linda Martinez",
    email: "linda.m@family.net",
    inquiryType: "Service Inquiry",
    message: "We are looking for estate planning advice for our family trust.",
    status: "Resolved",
    submittedAt: "2024-05-07T13:40:00Z",
    method: "POST"
  }
];

export default function AdminDashboard() {
  const [submissions, setSubmissions] = useState<Submission[]>(initialSubmissions);
  const [selectedSubmission, setSelectedSubmission] = useState<Submission | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  // Search Filter
  const filteredSubmissions = useMemo(() => {
    if (!searchQuery.trim()) return submissions;
    const query = searchQuery.toLowerCase();
    return submissions.filter(
      (s) =>
        s.customerName.toLowerCase().includes(query) ||
        s.email.toLowerCase().includes(query)
    );
  }, [submissions, searchQuery]);

  // Status Cycle: New -> In Progress -> Resolved
  const cycleStatus = (id: number) => {
    setSubmissions((prev) =>
      prev.map((s) => {
        if (s.id !== id) return s;
        const next: Record<Submission["status"], Submission["status"]> = {
          "New": "In Progress",
          "In Progress": "Resolved",
          "Resolved": "New",
        };
        return { ...s, status: next[s.status] };
      })
    );
  };

  // Calculate Stats
  const totalQueries = submissions.length;
  const newQueries = submissions.filter((s) => s.status === "New").length;
  const resolvedQueries = submissions.filter((s) => s.status === "Resolved").length;

  return (
    <div className="flex h-screen bg-gray-950 font-sans text-gray-100 overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 border-r border-gray-800 hidden md:flex flex-col">
        <div className="p-6 border-b border-gray-800">
          <h1 className="text-xl font-bold tracking-wider text-white flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">A</span>
            </div>
            ADMIN
          </h1>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <a
            href="#"
            className="flex items-center gap-3 px-4 py-3 bg-gray-800 text-white rounded-xl transition-colors"
          >
            <LayoutDashboard size={20} />
            <span className="font-medium">Dashboard</span>
          </a>
        </nav>
        <div className="p-4 border-t border-gray-800">
          <a
            href="#"
            className="flex items-center gap-3 px-4 py-3 text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-xl transition-colors"
          >
            <LogOut size={20} />
            <span className="font-medium">Logout</span>
          </a>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden relative">
        {/* Header */}
        <header className="h-20 bg-gray-900/50 backdrop-blur-md border-b border-gray-800 flex items-center justify-between px-8 z-10">
          <h2 className="text-xl font-semibold text-white">Contact Queries</h2>
          <div className="flex items-center gap-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
              <input
                type="text"
                placeholder="Search by name or email..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-gray-800 border-none rounded-full py-2 pl-10 pr-4 text-sm text-white focus:ring-2 focus:ring-blue-500 focus:outline-none w-72"
              />
            </div>
            <button className="relative text-gray-400 hover:text-white transition-colors">
              <Bell size={20} />
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <div className="w-10 h-10 bg-gray-700 rounded-full border-2 border-gray-600"></div>
          </div>
        </header>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-auto p-8">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gray-900 border border-gray-800 p-6 rounded-2xl flex items-center gap-4 hover:border-gray-700 transition-colors">
              <div className="w-12 h-12 bg-blue-500/20 text-blue-400 rounded-xl flex items-center justify-center">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-gray-400 text-sm font-medium">Total Queries</p>
                <h3 className="text-3xl font-bold text-white mt-1">{totalQueries}</h3>
              </div>
            </div>
            <div className="bg-gray-900 border border-gray-800 p-6 rounded-2xl flex items-center gap-4 hover:border-gray-700 transition-colors">
              <div className="w-12 h-12 bg-emerald-500/20 text-emerald-400 rounded-xl flex items-center justify-center">
                <TrendingUp size={24} />
              </div>
              <div>
                <p className="text-gray-400 text-sm font-medium">New</p>
                <h3 className="text-3xl font-bold text-white mt-1">{newQueries}</h3>
              </div>
            </div>
            <div className="bg-gray-900 border border-gray-800 p-6 rounded-2xl flex items-center gap-4 hover:border-gray-700 transition-colors">
              <div className="w-12 h-12 bg-purple-500/20 text-purple-400 rounded-xl flex items-center justify-center">
                <CheckCircle size={24} />
              </div>
              <div>
                <p className="text-gray-400 text-sm font-medium">Resolved</p>
                <h3 className="text-3xl font-bold text-white mt-1">{resolvedQueries}</h3>
              </div>
            </div>
          </div>

          {/* Table Card */}
          <div className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden shadow-xl">
            <div className="p-6 border-b border-gray-800 flex justify-between items-center bg-gray-900/50">
              <div>
                <h3 className="text-lg font-bold text-white">Recent Submissions</h3>
                <p className="text-gray-500 text-sm mt-1">
                  {filteredSubmissions.length} of {submissions.length} queries
                </p>
              </div>
              <button className="text-gray-400 hover:text-white transition-colors">
                <MoreHorizontal size={20} />
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-800/50 text-gray-400 text-xs uppercase tracking-wider">
                    <th className="p-5 font-medium border-b border-gray-800">ID</th>
                    <th className="p-5 font-medium border-b border-gray-800">Customer</th>
                    <th className="p-5 font-medium border-b border-gray-800">Type</th>
                    <th className="p-5 font-medium border-b border-gray-800">Status</th>
                    <th className="p-5 font-medium border-b border-gray-800">Date</th>
                    <th className="p-5 font-medium border-b border-gray-800 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="text-sm divide-y divide-gray-800">
                  {filteredSubmissions.map((submission) => (
                    <tr key={submission.id} className="hover:bg-gray-800/30 transition-colors group">
                      <td className="p-5 text-gray-500 font-mono">#{submission.id}</td>
                      <td className="p-5">
                        <div className="flex flex-col">
                          <span className="font-medium text-white">{submission.customerName}</span>
                          <span className="text-gray-500 text-xs">{submission.email}</span>
                        </div>
                      </td>
                      <td className="p-5 text-gray-300">{submission.inquiryType}</td>
                      <td className="p-5">
                        <button
                          onClick={() => cycleStatus(submission.id)}
                          className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium transition-all hover:scale-105 cursor-pointer
                            ${submission.status === "New" ? "bg-blue-500/10 text-blue-400 border border-blue-500/20" : ""}
                            ${submission.status === "In Progress" ? "bg-amber-500/10 text-amber-400 border border-amber-500/20" : ""}
                            ${submission.status === "Resolved" ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20" : ""}
                          `}
                          title="Click to update status"
                        >
                          {submission.status === "New" && (
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span>
                          )}
                          {submission.status}
                          <ArrowRight size={12} className="opacity-50" />
                        </button>
                      </td>
                      <td className="p-5 text-gray-500 whitespace-nowrap">
                        {new Date(submission.submittedAt).toLocaleDateString()}
                      </td>
                      <td className="p-5 text-right">
                        <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button
                            onClick={() => setSelectedSubmission(submission)}
                            className="p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded-lg transition-colors"
                            title="View Details"
                          >
                            <Eye size={18} />
                          </button>
                          <button
                            className="p-2 text-gray-400 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-colors"
                            title="Delete"
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                  {filteredSubmissions.length === 0 && (
                    <tr>
                      <td colSpan={6} className="p-10 text-center text-gray-500">
                        No matching submissions found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>

      {/* Details Modal */}
      {selectedSubmission && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-gray-900 border border-gray-800 w-full max-w-2xl rounded-2xl shadow-2xl p-6 md:p-8 relative animate-in zoom-in-95 duration-200">
            <button
              onClick={() => setSelectedSubmission(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white hover:bg-gray-800 p-2 rounded-full transition-colors"
            >
              <X size={20} />
            </button>

            <div className="mb-6 border-b border-gray-800 pb-4">
              <span
                className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium mb-4
                  ${selectedSubmission.status === "New" ? "bg-blue-500/10 text-blue-400" : ""}
                  ${selectedSubmission.status === "In Progress" ? "bg-amber-500/10 text-amber-400" : ""}
                  ${selectedSubmission.status === "Resolved" ? "bg-emerald-500/10 text-emerald-400" : ""}
                `}
              >
                {selectedSubmission.status}
              </span>
              <h2 className="text-2xl font-bold text-white">{selectedSubmission.inquiryType}</h2>
              <p className="text-gray-400 text-sm mt-1">
                Submitted by{" "}
                <span className="text-white font-medium">{selectedSubmission.customerName}</span> (
                {selectedSubmission.email})
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="text-xs uppercase tracking-wider text-gray-500 font-semibold mb-2">
                  Message
                </h4>
                <div className="bg-gray-950 p-4 rounded-xl border border-gray-800 text-gray-200 leading-relaxed text-sm md:text-base">
                  {selectedSubmission.message}
                </div>
              </div>

              <div className="flex items-center justify-between pt-2">
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-gray-500 font-semibold mb-1">
                    Time
                  </h4>
                  <div className="flex items-center gap-2 text-gray-300 text-sm">
                    <Clock size={14} />
                    {new Date(selectedSubmission.submittedAt).toLocaleString()}
                  </div>
                </div>
                <div className="text-right">
                  <h4 className="text-xs uppercase tracking-wider text-gray-500 font-semibold mb-1">
                    Method
                  </h4>
                  <div className="inline-flex items-center px-3 py-1 rounded-md bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-mono font-bold">
                    {selectedSubmission.method}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-800 flex justify-end gap-3">
              <button
                onClick={() => setSelectedSubmission(null)}
                className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg text-sm font-medium transition-colors"
              >
                Close
              </button>
              <button className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-sm font-medium transition-colors">
                Reply to Inquiry
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
