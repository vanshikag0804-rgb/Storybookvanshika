import React, { useState, useEffect } from 'react';
import './RevenueGraph.css';

export interface RevenueGraphProps {
  /** Variant parameter from Figma: Range */
  Range?: '7D' | '30D' | '90D' | '1Y';
  title?: string;
  onRangeChange?: (range: '7D' | '30D' | '90D' | '1Y') => void;
  className?: string;
  style?: React.CSSProperties;
  [key: string]: any;
}

const DATA_BY_RANGE = {
  '7D': {
    title: 'Revenue in last 7 Days',
    labels: ['12 May', '13 May', '14 May', '15 May', '16 May', '17 May', '18 May', '19 May'],
    primaryPath: 'M 10 110 Q 50 140 100 80 T 190 60 T 270 110 T 350 30',
    secondaryPath: 'M 10 130 Q 50 110 100 120 T 190 90 T 270 120 T 350 80',
  },
  '30D': {
    title: 'Revenue in last 30 Days',
    labels: ['12 May', '13 May', '14 May', '15 May', '16 May', '17 May', '18 May', '19 May'],
    primaryPath: 'M 10 120 Q 50 40 100 90 T 190 40 T 270 80 T 350 20',
    secondaryPath: 'M 10 140 Q 50 100 100 110 T 190 80 T 270 100 T 350 60',
  },
  '90D': {
    title: 'Revenue in last 90 Days',
    labels: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    primaryPath: 'M 10 90 Q 50 130 100 50 T 190 70 T 270 40 T 350 15',
    secondaryPath: 'M 10 120 Q 50 110 100 90 T 190 100 T 270 70 T 350 45',
  },
  '1Y': {
    title: 'Revenue in last 1 Year',
    labels: ['Q1', 'Q2', 'Q3', 'Q4', 'Q1', 'Q2', 'Q3', 'Q4'],
    primaryPath: 'M 10 130 Q 50 70 100 100 T 190 30 T 270 60 T 350 10',
    secondaryPath: 'M 10 145 Q 50 120 100 115 T 190 75 T 270 90 T 350 50',
  },
};

/**
 * **Revenue Graph** React Component
 * Synchronized with Figma Design System (Node 254:10426).
 */
export const RevenueGraph: React.FC<RevenueGraphProps> = ({
  Range = '7D',
  title,
  onRangeChange,
  className = '',
  style,
  ...props
}) => {
  const [activeRange, setActiveRange] = useState<'7D' | '30D' | '90D' | '1Y'>(Range);

  useEffect(() => {
    setActiveRange(Range);
  }, [Range]);

  const handleTabClick = (range: '7D' | '30D' | '90D' | '1Y') => {
    setActiveRange(range);
    if (onRangeChange) onRangeChange(range);
  };

  const currentData = DATA_BY_RANGE[activeRange] || DATA_BY_RANGE['7D'];
  const displayTitle = title || currentData.title;

  return (
    <div
      className={`uedp-revenuegraph uedp-revenuegraph--${activeRange.toLowerCase()} ${className}`}
      style={style}
      {...props}
    >
      {/* Header Frame 2147225032 (370px x 30px) */}
      <div className="uedp-revenuegraph-header">
        <div className="uedp-revenuegraph-header-info">
          <h3 className="uedp-revenuegraph-title">{displayTitle}</h3>
          
          {/* Legend Row Frame 2147225031 */}
          <div className="uedp-revenuegraph-legend">
            <div className="uedp-revenuegraph-legend-item">
              <span className="uedp-revenuegraph-dot uedp-revenuegraph-dot--primary" />
              <span className="uedp-revenuegraph-legend-text">Walk in sales</span>
            </div>
            <div className="uedp-revenuegraph-legend-item">
              <span className="uedp-revenuegraph-dot uedp-revenuegraph-dot--secondary" />
              <span className="uedp-revenuegraph-legend-text">Online sales</span>
            </div>
          </div>
        </div>

        {/* Range Selector Segmented Tabs Frame 2147225029 */}
        <div className="uedp-revenuegraph-tabs">
          {(['7D', '30D', '90D', '1Y'] as const).map((r) => {
            const isActive = activeRange === r;
            return (
              <button
                key={r}
                type="button"
                className={`uedp-revenuegraph-tab ${isActive ? 'uedp-revenuegraph-tab--active' : ''}`}
                onClick={() => handleTabClick(r)}
              >
                {r}
              </button>
            );
          })}
        </div>
      </div>

      {/* Graph Body Frame 2147225044 (370px x 155px) */}
      <div className="uedp-revenuegraph-chart">
        {/* Y-Axis Grid Lines & Numbers */}
        <div className="uedp-revenuegraph-grid">
          {[5, 4, 3, 2, 1].map((val) => (
            <div key={val} className="uedp-revenuegraph-grid-row">
              <span className="uedp-revenuegraph-y-label">{val}</span>
              <div className="uedp-revenuegraph-grid-line" />
            </div>
          ))}
        </div>

        {/* Trend Lines Overlay SVG */}
        <svg
          className="uedp-revenuegraph-svg"
          viewBox="0 0 360 145"
          preserveAspectRatio="none"
        >
          {/* Secondary Trend Line */}
          <path
            d={currentData.secondaryPath}
            fill="none"
            stroke="#91B6DB"
            strokeWidth="3"
            strokeLinecap="round"
          />
          {/* Primary Trend Line */}
          <path
            d={currentData.primaryPath}
            fill="none"
            stroke="#246FB8"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* X-Axis Date Labels Frame 2147225052 (370px x 15px) */}
      <div className="uedp-revenuegraph-xaxis">
        {currentData.labels.map((lbl, idx) => (
          <span key={idx} className="uedp-revenuegraph-x-label">
            {lbl}
          </span>
        ))}
      </div>
    </div>
  );
};
