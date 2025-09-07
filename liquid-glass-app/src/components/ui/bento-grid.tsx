"use client";

import React from "react";

// Types
interface BentoCardProps {
  title: string;
  description?: string;
  icon?: React.ReactNode;
  className?: string;
  children?: React.ReactNode;
  gradient?: string;
  onClick?: () => void;
}

interface BentoGridProps {
  children: React.ReactNode;
  className?: string;
}

// Individual Bento Card Component
const BentoCard: React.FC<BentoCardProps> = ({
  title,
  description,
  icon,
  className = "",
  children,
  gradient = "from-blue-500/10 to-purple-500/10",
  onClick,
}) => {
  return (
    <div
      className={`
        relative overflow-hidden rounded-3xl border border-gray-200/20 
        bg-gradient-to-br ${gradient} backdrop-blur-sm
        hover:border-gray-200/40 transition-all duration-500 
        hover:scale-[1.02] cursor-pointer group
        ${className}
      `}
      onClick={onClick}
    >
      <div className="relative h-full p-6 flex flex-col">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          {icon && (
            <div className="p-2 rounded-xl bg-white/10 backdrop-blur-sm">
              {icon}
            </div>
          )}
          <div>
            <h3 className="text-lg font-semibold text-white">{title}</h3>
            {description && (
              <p className="text-sm text-gray-300">{description}</p>
            )}
          </div>
        </div>

        {/* Content */}
        {children && <div className="flex-1">{children}</div>}

        {/* Hover effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </div>
  );
};

// Main Bento Grid Container
const BentoGrid: React.FC<BentoGridProps> = ({
  children,
  className = "",
}) => {
  return (
    <div className={`grid gap-4 ${className}`}>
      {children}
    </div>
  );
};

// Stats Component for cards
const StatsCard: React.FC<{ label: string; value: string; trend?: string }> = ({
  label,
  value,
  trend,
}) => (
  <div className="text-center">
    <div className="text-2xl font-bold text-white mb-1">{value}</div>
    <div className="text-sm text-gray-400">{label}</div>
    {trend && (
      <div className="text-xs text-green-400 mt-1">↗ {trend}</div>
    )}
  </div>
);

// Chart placeholder component
const MiniChart: React.FC = () => (
  <div className="h-20 flex items-end justify-between gap-1">
    {[40, 60, 35, 80, 45, 70, 55, 90, 65].map((height, i) => (
      <div
        key={i}
        className="bg-gradient-to-t from-blue-400 to-purple-400 rounded-sm flex-1"
        style={{ height: `${height}%` }}
      />
    ))}
  </div>
);

// Avatar Group Component
const AvatarGroup: React.FC<{ avatars: string[] }> = ({ avatars }) => (
  <div className="flex -space-x-3">
    {avatars.map((avatar, i) => (
      <img
        key={i}
        src={avatar}
        alt={`Avatar ${i + 1}`}
        className="w-10 h-10 rounded-full border-2 border-white/20"
      />
    ))}
    <div className="w-10 h-10 rounded-full border-2 border-white/20 bg-gray-600/50 flex items-center justify-center text-xs text-white">
      +5
    </div>
  </div>
);

// Main Component
export const Component = () => {
  const avatars = [
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1494790108755-2616b812c7d4?w=40&h=40&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=40&h=40&fit=crop&crop=face"
  ];

  return (
    <div
      className="min-h-screen p-8 flex items-center justify-center"
      style={{
        background: `url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop") center center`,
        backgroundSize: "cover",
      }}
    >
      <div className="max-w-6xl w-full">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-2">Dashboard</h1>
          <p className="text-gray-300">Modern bento grid interface</p>
        </div>

        <BentoGrid className="grid-cols-1 md:grid-cols-4 lg:grid-cols-6 auto-rows-[180px]">
          {/* Welcome Card - Large */}
          <BentoCard
            title="Welcome Back!"
            description="Ready to start your day"
            gradient="from-indigo-500/20 to-purple-600/20"
            className="md:col-span-2 lg:col-span-3 md:row-span-2"
            icon={
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            }
          >
            <div className="space-y-4">
              <p className="text-gray-300">
                You have 3 tasks pending and 2 meetings scheduled for today.
              </p>
              <button className="px-4 py-2 bg-white/10 rounded-xl text-white hover:bg-white/20 transition-colors">
                View Schedule
              </button>
            </div>
          </BentoCard>

          {/* Stats Cards */}
          <BentoCard
            title="Revenue"
            gradient="from-green-500/20 to-emerald-600/20"
            className="md:col-span-1 lg:col-span-1"
            icon={
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
              </svg>
            }
          >
            <StatsCard label="This month" value="$24.5K" trend="+12%" />
          </BentoCard>

          <BentoCard
            title="Users"
            gradient="from-blue-500/20 to-cyan-600/20"
            className="md:col-span-1 lg:col-span-1"
            icon={
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
              </svg>
            }
          >
            <StatsCard label="Active now" value="1.2K" trend="+5%" />
          </BentoCard>

          <BentoCard
            title="Performance"
            gradient="from-purple-500/20 to-pink-600/20"
            className="md:col-span-1 lg:col-span-1"
            icon={
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
              </svg>
            }
          >
            <StatsCard label="Uptime" value="99.9%" trend="+0.1%" />
          </BentoCard>

          {/* Chart Card */}
          <BentoCard
            title="Analytics"
            description="Weekly overview"
            gradient="from-orange-500/20 to-red-600/20"
            className="md:col-span-2 lg:col-span-2"
            icon={
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
              </svg>
            }
          >
            <MiniChart />
          </BentoCard>

          {/* Team Card */}
          <BentoCard
            title="Team"
            description="Online members"
            gradient="from-teal-500/20 to-green-600/20"
            className="md:col-span-2 lg:col-span-2"
            icon={
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
              </svg>
            }
          >
            <div className="space-y-3">
              <AvatarGroup avatars={avatars} />
              <p className="text-sm text-gray-300">12 members online</p>
            </div>
          </BentoCard>

          {/* Quick Actions */}
          <BentoCard
            title="Quick Actions"
            gradient="from-pink-500/20 to-rose-600/20"
            className="md:col-span-2 lg:col-span-2"
            icon={
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
              </svg>
            }
          >
            <div className="grid grid-cols-2 gap-2">
              <button className="p-3 bg-white/5 rounded-xl text-sm text-white hover:bg-white/10 transition-colors">
                New Project
              </button>
              <button className="p-3 bg-white/5 rounded-xl text-sm text-white hover:bg-white/10 transition-colors">
                Invite Team
              </button>
              <button className="p-3 bg-white/5 rounded-xl text-sm text-white hover:bg-white/10 transition-colors">
                Export Data
              </button>
              <button className="p-3 bg-white/5 rounded-xl text-sm text-white hover:bg-white/10 transition-colors">
                Settings
              </button>
            </div>
          </BentoCard>
        </BentoGrid>
      </div>
    </div>
  );
};