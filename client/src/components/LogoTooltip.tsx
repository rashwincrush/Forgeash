import React from "react";

interface LogoTooltipProps {
  name: string;
  description?: string;
  status?: string;
}

export const LogoTooltip: React.FC<LogoTooltipProps> = ({ name, description, status }) => (
  <div className="absolute left-1/2 top-full z-50 -translate-x-1/2 mt-3 px-4 py-2 rounded-xl shadow-xl bg-white/90 text-gray-900 text-sm font-semibold border border-gray-200 backdrop-blur-md animate-fade-in min-w-[160px] pointer-events-none select-none">
    <div>{name}</div>
    {description && <div className="text-xs mt-1 opacity-70 font-normal">{description}</div>}
    {status && (
      <span className={`inline-block mt-2 px-2 py-0.5 rounded bg-emerald-100 text-emerald-700 text-xs font-bold tracking-wide shadow-sm border border-emerald-300`}>
        {status}
      </span>
    )}
  </div>
);
