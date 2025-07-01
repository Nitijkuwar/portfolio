import React, { useEffect, useState } from "react";

const MouseFollower = () => {
  const [innerPos, setInnerPos] = useState({ x: 0, y: 0 });
  const [outerPos, setOuterPos] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const moveCursor = (e) => {
      // Check if cursor is in an element that should use default cursor
      const isInDefaultArea = e.target.closest(".cursor-default-area");

      setIsVisible(!isInDefaultArea); // Hide custom cursor if inside default area
      setInnerPos({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener("mousemove", moveCursor);
    return () => document.removeEventListener("mousemove", moveCursor);
  }, []);

  // Smooth follow effect for outer circle
  useEffect(() => {
    let animationFrameId;

    const follow = () => {
      setOuterPos((prev) => {
        const dx = innerPos.x - prev.x;
        const dy = innerPos.y - prev.y;
        return {
          x: prev.x + dx * 0.05,
          y: prev.y + dy * 0.08,
        };
      });
      animationFrameId = requestAnimationFrame(follow);
    };

    follow();
    return () => cancelAnimationFrame(animationFrameId);
  }, [innerPos]);

  return (
    <>
      {/* Outer circle */}
      <div
        className={`fixed w-[50px] h-[50px] rounded-full border-2 border-gray-400 bg-gray-300/70 pointer-events-none -translate-x-1/2 -translate-y-1/2 z-[9999] transition-opacity duration-200 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{ top: outerPos.y, left: outerPos.x }}
      ></div>

      {/* Inner dot */}
      <div
        className={`fixed w-[8px] h-[8px] rounded-full bg-slate-700 pointer-events-none -translate-x-1/2 -translate-y-1/2 z-[9999] transition-opacity duration-200 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{ top: innerPos.y, left: innerPos.x }}
      ></div>
    </>
  );
};

export default MouseFollower;
