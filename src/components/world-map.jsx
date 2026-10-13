"use client";;
import { useRef } from "react";
import { motion } from "motion/react";
import DottedMap from "dotted-map";

import { useTheme } from "next-themes";

export function WorldMap({
  dots = [],
  lineColor = "#a68a56"
}) {
  const svgRef = useRef(null);
  const map = new DottedMap({ height: 100, grid: "diagonal" });

  const { theme } = useTheme();

  const svgMap = map.getSVG({
    radius: 0.22,
    color: "#0e3b2c80", // Dark green with 80% opacity for better visibility
    shape: "circle",
    backgroundColor: "transparent",
  });

  const projectPoint = (lat, lng) => {
    const x = (lng + 180) * (800 / 360);
    const y = (90 - lat) * (400 / 180);
    return { x, y };
  };

  const createCurvedPath = (
    start,
    end
  ) => {
    const midX = (start.x + end.x) / 2;
    const midY = Math.min(start.y, end.y) - 50;
    return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
  };

  return (
    <div
      className="w-full aspect-2/1 bg-transparent rounded-lg relative font-sans">
      <img
        src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
        className="h-full w-full mask-[linear-gradient(to_bottom,transparent,white_10%,white_90%,transparent)] pointer-events-none select-none"
        alt="world map"
        height="495"
        width="1056"
        draggable={false} />
      <svg
        ref={svgRef}
        viewBox="0 0 800 400"
        className="w-full h-full absolute inset-0 pointer-events-none select-none">
        {dots.map((dot, i) => {
          const startPoint = projectPoint(dot.start.lat, dot.start.lng);
          const endPoint = projectPoint(dot.end.lat, dot.end.lng);
          return (
            <g key={`path-group-${i}`}>
              <motion.path
                d={createCurvedPath(startPoint, endPoint)}
                fill="none"
                stroke="url(#path-gradient)"
                strokeWidth="1"
                initial={{
                  pathLength: 0,
                }}
                animate={{
                  pathLength: 1,
                }}
                transition={{
                  duration: 1.5,
                  delay: 0.5 * i,
                  ease: "easeOut",
                  repeat: Infinity,
                  repeatType: "loop",
                  repeatDelay: 1.5
                }}
                key={`start-upper-${i}`}></motion.path>
            </g>
          );
        })}

        <defs>
          <linearGradient id="path-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="5%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="95%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>

        {dots.map((dot, i) => (
          <g key={`points-group-${i}`}>
            <g key={`start-${i}`}>
              <circle
                cx={projectPoint(dot.start.lat, dot.start.lng).x}
                cy={projectPoint(dot.start.lat, dot.start.lng).y}
                r="2"
                fill={lineColor} />
              <circle
                cx={projectPoint(dot.start.lat, dot.start.lng).x}
                cy={projectPoint(dot.start.lat, dot.start.lng).y}
                r="2"
                fill={lineColor}
                opacity="0.5">
                <animate
                  attributeName="r"
                  from="2"
                  to="8"
                  dur="1.5s"
                  begin="0s"
                  repeatCount="indefinite" />
                <animate
                  attributeName="opacity"
                  from="0.5"
                  to="0"
                  dur="1.5s"
                  begin="0s"
                  repeatCount="indefinite" />
              </circle>
            </g>
            <g key={`end-${i}`}>
              <circle
                cx={projectPoint(dot.end.lat, dot.end.lng).x}
                cy={projectPoint(dot.end.lat, dot.end.lng).y}
                r="2"
                fill={lineColor} />
              <circle
                cx={projectPoint(dot.end.lat, dot.end.lng).x}
                cy={projectPoint(dot.end.lat, dot.end.lng).y}
                r="2"
                fill={lineColor}
                opacity="0.5">
                <animate
                  attributeName="r"
                  from="2"
                  to="8"
                  dur="1.5s"
                  begin="0s"
                  repeatCount="indefinite" />
                <animate
                  attributeName="opacity"
                  from="0.5"
                  to="0"
                  dur="1.5s"
                  begin="0s"
                  repeatCount="indefinite" />
              </circle>
            </g>
          </g>
        ))}
      </svg>

      {/* HTML Overlay for Labels and India Highlight */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        {dots.length > 0 && (
          <>
            {/* India Base Highlight */}
            <div 
              className="absolute -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
              style={{
                left: `${(projectPoint(dots[0].start.lat, dots[0].start.lng).x / 800) * 100}%`,
                top: `${(projectPoint(dots[0].start.lat, dots[0].start.lng).y / 400) * 100}%`,
              }}
            >
              <motion.div 
                className="w-16 h-16 rounded-full bg-[#a68a56]/20 blur-xl absolute"
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div 
                className="w-8 h-8 rounded-full bg-[#0e3b2c]/40 blur-md absolute"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
            
            {/* Destination Labels */}
            {dots.map((dot, i) => {
              if (!dot.label) return null;
              const endPoint = projectPoint(dot.end.lat, dot.end.lng);
              const isLeftAligned = dot.end.lng < dots[0].start.lng;
              
              return (
                <motion.div
                  key={`label-${i}`}
                  className={`absolute flex items-center gap-1 sm:gap-1.5 md:gap-2 bg-[#103728] text-white px-1.5 py-0.5 sm:px-2.5 sm:py-1 md:px-3 md:py-1.5 rounded-full shadow-lg border border-[#a68a56]/20 ${
                    isLeftAligned
                      ? '-translate-x-[calc(100%+4px)] sm:-translate-x-[calc(100%+8px)] md:-translate-x-[calc(100%+12px)] -translate-y-1/2'
                      : 'translate-x-1 sm:translate-x-2.5 md:translate-x-4.5 -translate-y-1/2'
                  }`}
                  style={{
                    left: `${(endPoint.x / 800) * 100}%`,
                    top: `${(endPoint.y / 400) * 100}%`,
                  }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: (0.5 * i) + 1.2,
                    ease: "backOut"
                  }}
                >
                  {dot.flag && (
                    <span className="text-[10px] sm:text-xs md:text-sm bg-white/10 rounded-full w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 flex items-center justify-center -ml-0.5 sm:-ml-1 leading-none pb-0.5">
                      {dot.flag}
                    </span>
                  )}
                  <span className="font-playfair text-[9px] sm:text-[11px] md:text-[15px] lg:text-[18px] tracking-wide whitespace-nowrap pt-0.5">
                    {dot.label}
                  </span>
                </motion.div>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
}
