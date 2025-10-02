import React from 'react';
import { ArrowLeftIcon, HomeIcon, SettingsIcon } from 'lucide-react';
import { StatsCard } from './StatsCard';
import { ActivitiesTable } from './ActivitiesTable';
export function Dashboard() {
  return <div className="flex-1 overflow-auto">
      <header className="px-6 py-4 flex justify-between items-center border-b border-gray-200">
        <div className="flex items-center">
          <button className="mr-4 text-black">
            <ArrowLeftIcon size={20} />
          </button>
          <div className="flex items-center text-sm text-gray-500">
            <HomeIcon size={16} className="mr-1" />
            <span>Hunter</span>
            <span className="mx-1">›</span>
            <span>Dashboard</span>
          </div>
        </div>
        <div className="flex items-center">
          <div className="text-right mr-3">
            <div className="font-bold text-black ">Welcome back,</div>
            <div className="font-bold text-gray-600">Joe</div>
          </div>
          <div className="w-10 h-10 rounded-full bg-cover bg-center" style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80')`
        }}></div>
        </div>
      </header>
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6 text-black">Dashboard</h1>
        <div className="grid grid-cols-3 gap-6 mb-8 text-black">
          <StatsCard title="Total Jobs Found" value="2,970" progress={75} color="" />
          <StatsCard title="Total Connections" value="1,798" progress={65} color="" />
          <StatsCard title="Plan" value="Premium" icon={<SettingsIcon className="text-purple-500" size={24} />} color="purple" />
        </div>
        <div className="mb-8">
          <h2 className="text-lg font-bold mb-4 text-black">RECENT ACTIVITIES</h2>
          <ActivitiesTable />
        </div>
        <div className="text-center text-gray-400 text-sm">see more ...</div>
      </div>
    </div>;
}