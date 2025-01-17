"use client";

import {
  GaugeContainer,
  GaugeReferenceArc,
  GaugeValueArc,
  useGaugeState,
} from "@mui/x-charts/Gauge";
import React, { useEffect, useState } from "react";

function GaugePointer() {
  const { valueAngle, outerRadius, cx, cy } = useGaugeState();

  if (valueAngle === null) {
    return null;
  }

  const shortenedRadius = outerRadius * 0.7;

  const target = {
    x: cx + shortenedRadius * Math.sin(valueAngle),
    y: cy - shortenedRadius * Math.cos(valueAngle),
  };

  return (
    <g>
      <circle cx={cx} cy={cy} r={5} fill="red" />
      <path
        d={`M ${cx} ${cy} L ${target.x} ${target.y}`}
        stroke="red"
        strokeWidth={3}
      />
    </g>
  );
}

type Props = {
  score: number;
};

const GaugeChart = ({ score }: Props) => {
  const [value, setValue] = useState<number>(0);

  function getHighlightClass(rangeStart: number, rangeEnd: number): string {
    return score / 10 >= rangeStart && score / 10 <= rangeEnd
      ? "text-white"
      : "text-gray-400";
  }

  useEffect(() => {
    let animationFrame: number;
    const step = () => {
      setValue((prev) => {
        if (prev < score) {
          return Math.min(prev + 2, score);
        } else {
          cancelAnimationFrame(animationFrame);
          return prev;
        }
      });
      animationFrame = requestAnimationFrame(step);
    };

    animationFrame = requestAnimationFrame(step);

    return () => cancelAnimationFrame(animationFrame);
  }, [score]);

  return (
    <div className="relative w-[300px] h-[300px] mx-auto flex items-center justify-center">
      {/* Chữ cái */}
      <p
        className={`absolute bottom-[40%] left-[16%] -translate-x-1/2 text-xs origin-bottom -rotate-90 ${getHighlightClass(
          0,
          1.9
        )}`}
      >
        Ad tioc
      </p>
      <p
        className={`absolute top-[32%] left-[23%] transform -translate-x-1/2 text-xs origin-bottom -rotate-45 ${getHighlightClass(
          2,
          3.9
        )}`}
      >
        Estalishing
      </p>
      <p
        className={`absolute top-[23%] left-[40%] transform -translate-y-1/2 text-xs ${getHighlightClass(
          4,
          5.9
        )}`}
      >
        Performing
      </p>
      <p
        className={`absolute top-[32%] right-[4%] transform -translate-x-1/2 text-xs origin-bottom rotate-45 ${getHighlightClass(
          6,
          8.9
        )}`}
      >
        Optimizing
      </p>
      <p
        className={`absolute bottom-[40%] right-[-4%] transform -translate-x-1/2 text-xs origin-bottom rotate-90 ${getHighlightClass(
          8,
          10
        )}`}
      >
        Embedded
      </p>

      {/* Gauge */}
      <GaugeContainer
        width={200}
        height={200}
        startAngle={-110}
        endAngle={110}
        value={value}
      >
        <GaugeReferenceArc />
        <GaugeValueArc />
        <GaugePointer />
      </GaugeContainer>

      <h1 className="absolute bottom-16 mb-2 text-lg">{score / 10}</h1>
      <h1 className="absolute bottom-12">Socre</h1>
    </div>
  );
};

export default GaugeChart;
