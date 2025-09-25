import React from 'react';

// Remove TypeScript interface and convert to JSDoc for props documentation
/**
 * @param {Object} props
 * @param {string} props.title
 * @param {string} props.value
 * @param {number} [props.progress]
 * @param {string} [props.color='purple']
 * @param {React.ReactNode} [props.icon]
 */
export function StatsCard({
  title,
  value,
  progress,
  color = 'purple',
  icon
}) {
  return (
    <div className="bg-gray-200 rounded-lg p-6">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-sm font-medium mb-2">{title}</h3>
          <div className="text-3xl font-bold">{value}</div>
        </div>
        {progress !== undefined ? (
          <div className="w-16 h-16 relative">
            <svg className="w-full h-full" viewBox="0 0 36 36">
              <path
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="#444"
                strokeWidth="3"
                strokeDasharray="100, 100"
                opacity="0.2"
              />
              <path
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke={color === 'purple' ? '#d8b4fe' : '#60a5fa'}
                strokeWidth="3"
                strokeDasharray={`${progress}, 100`}
              />
            </svg>
          </div>
        ) : icon ? (
          icon
        ) : null}
      </div>
    </div>
  );
}