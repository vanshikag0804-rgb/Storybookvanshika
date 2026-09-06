import React, { useState, useEffect, useRef } from 'react';
import './RangeSlider.css';

export interface RangeSliderProps {
  /** Variant parameter from Figma: State */
  State?: 'Default' | 'Disabled' | 'Focused';
  /** Minimum range value. Default 0 */
  min?: number;
  /** Maximum range value. Default 100 */
  max?: number;
  /** Dual range value tuple [minVal, maxVal]. Default [20, 80] */
  value?: [number, number];
  /** Enable Dark Mode state */
  darkMode?: boolean;
  onChange?: (val: [number, number]) => void;
  className?: string;
  style?: React.CSSProperties;
  [key: string]: any;
}

/**
 * **Range Slider** React Component
 * Synchronized with Figma Design System (Node 94:149).
 */
export const RangeSlider: React.FC<RangeSliderProps> = ({
  State = 'Default',
  min = 0,
  max = 100,
  value = [20, 80],
  darkMode = false,
  onChange,
  className = '',
  style,
  ...props
}) => {
  const [range, setRange] = useState<[number, number]>(value);
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeThumb, setActiveThumb] = useState<'left' | 'right' | null>(null);

  useEffect(() => {
    setRange(value);
  }, [value]);

  const isDisabled = State === 'Disabled';
  const isFocused = State === 'Focused';

  const leftPercent = Math.min(100, Math.max(0, ((range[0] - min) / (max - min)) * 100));
  const rightPercent = Math.min(100, Math.max(0, ((range[1] - min) / (max - min)) * 100));

  const handleLeftChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isDisabled) return;
    const newVal = Math.min(Number(e.target.value), range[1]);
    const updated: [number, number] = [newVal, range[1]];
    setRange(updated);
    if (onChange) onChange(updated);
  };

  const handleRightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isDisabled) return;
    const newVal = Math.max(Number(e.target.value), range[0]);
    const updated: [number, number] = [range[0], newVal];
    setRange(updated);
    if (onChange) onChange(updated);
  };

  const stateClass = `uedp-rangeslider--${State.toLowerCase()}`;

  return (
    <div
      className={`uedp-rangeslider ${stateClass} ${darkMode ? 'uedp-dark' : ''} ${className}`}
      data-theme={darkMode ? 'dark' : undefined}
      style={style}
      {...props}
    >
      <div className="uedp-rangeslider-container" ref={trackRef}>
        {/* Background Track Frame 8 (267px x 4px) */}
        <div className="uedp-rangeslider-track-bg">
          {/* Active Range Fill Frame 9 (Height 4px) */}
          <div
            className="uedp-rangeslider-track-fill"
            style={{
              left: `${leftPercent}%`,
              width: `${Math.max(0, rightPercent - leftPercent)}%`,
            }}
          />
        </div>

        {/* Dual Input Range Sliders */}
        <input
          type="range"
          min={min}
          max={max}
          value={range[0]}
          disabled={isDisabled}
          aria-disabled={isDisabled}
          aria-label="Minimum Range Value"
          aria-valuenow={range[0]}
          aria-valuemin={min}
          aria-valuemax={max}
          onChange={handleLeftChange}
          onFocus={() => setActiveThumb('left')}
          onBlur={() => setActiveThumb(null)}
          className="uedp-rangeslider-input uedp-rangeslider-input--left"
        />
        <input
          type="range"
          min={min}
          max={max}
          value={range[1]}
          disabled={isDisabled}
          aria-disabled={isDisabled}
          aria-label="Maximum Range Value"
          aria-valuenow={range[1]}
          aria-valuemin={min}
          aria-valuemax={max}
          onChange={handleRightChange}
          onFocus={() => setActiveThumb('right')}
          onBlur={() => setActiveThumb(null)}
          className="uedp-rangeslider-input uedp-rangeslider-input--right"
        />

        {/* Left Thumb Disc (24px x 24px) */}
        <div
          className={`uedp-rangeslider-thumb uedp-rangeslider-thumb--left ${
            activeThumb === 'left' ? 'uedp-rangeslider-thumb--active' : ''
          }`}
          style={{ left: `calc(${leftPercent}% - 12px)` }}
        >
          {isFocused && <div className="uedp-rangeslider-thumb-dot" />}
        </div>

        {/* Right Thumb Disc (24px x 24px) */}
        <div
          className={`uedp-rangeslider-thumb uedp-rangeslider-thumb--right ${
            activeThumb === 'right' ? 'uedp-rangeslider-thumb--active' : ''
          }`}
          style={{ left: `calc(${rightPercent}% - 12px)` }}
        >
          {isFocused && <div className="uedp-rangeslider-thumb-dot" />}
        </div>
      </div>
    </div>
  );
};
