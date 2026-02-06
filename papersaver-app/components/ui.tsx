"use client"; // Necessary for the counter logic
import React, { useState } from "react";

export const Container = ({ children }: { children: React.ReactNode }) => (
  <div className="ledger-container">{children}</div>
);

// Pilled Single Select
export const PillSelect = ({
  label,
  name,
  options,
}: {
  label: string;
  name: string;
  options: string[];
}) => (
  <div style={{ marginBottom: "20px" }}>
    <label className="ledger-label">{label}</label>
    <div className="pill-group">
      {options.map((opt) => (
        <label key={opt}>
          <input
            type="radio"
            name={name}
            value={opt}
            className="pill-input"
            required
          />
          <div className="pill-button">{opt.toUpperCase()}</div>
        </label>
      ))}
    </div>
  </div>
);

// Stepper / Integer Input
export const Counter = ({ label, name }: { label: string; name: string }) => {
  const [val, setVal] = useState(0);
  return (
    <div style={{ marginBottom: "20px" }}>
      <label className="ledger-label">{label}</label>
      <div className="counter-wrapper">
        <button
          type="button"
          className="counter-btn"
          onClick={() => setVal(val - 1)}
        >
          -
        </button>
        <input
          type="number"
          name={name}
          value={val}
          readOnly
          className="counter-input"
        />
        <button
          type="button"
          className="counter-btn"
          onClick={() => setVal(val + 1)}
        >
          +
        </button>
      </div>
    </div>
  );
};

export const Button = ({
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button className="ledger-button" {...props}>
    {children}
  </button>
);
