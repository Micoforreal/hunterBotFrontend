import React from 'react';
const activities = [{
  job: 'Software Development',
  connection: 'Connected',
  company: 'HiWhiz Tech Firm'
}, {
  job: 'Community Manager',
  connection: 'Connected',
  company: 'Mystery Droplet'
}, {
  job: 'Community Manager',
  connection: 'Connected',
  company: 'Mystery Droplet'
}, {
  job: 'Community Manager',
  connection: 'Connected',
  company: 'Mystery Droplet'
}, {
  job: 'Community Manager',
  connection: 'Connected',
  company: 'Mystery Droplet'
}, {
  job: 'Community Manager',
  connection: 'Connected',
  company: 'Mystery Droplet'
}];
export function ActivitiesTable() {
  return <div className="bg-gray-200 rounded-lg overflow-hidden text-black">
      <table className="w-full">
        <thead>
          <tr className="border-b border-gray-300">
            <th className="py-4 px-6 text-left font-bold">JOBS</th>
            <th className="py-4 px-6 text-left font-bold">CONNECTION</th>
            <th className="py-4 px-6 text-left font-bold">Company</th>
          </tr>
        </thead>
        <tbody>
          {activities.map((activity, index) => <tr key={index} className="border-b border-gray-300 last:border-b-0">
              <td className="py-4 px-6">{activity.job}</td>
              <td className="py-4 px-6">{activity.connection}</td>
              <td className="py-4 px-6">{activity.company}</td>
            </tr>)}
        </tbody>
      </table>
    </div>;
}