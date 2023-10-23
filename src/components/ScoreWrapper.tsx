import React from "react";

interface IProps {
  title: string;
  children: React.ReactNode;
}
export function ScoreWrapper({ title, children }: IProps) {
  return (
    <div
      style={{
        marginTop: "12px",
        fontFamily: "Arial",
      }}
    >
      <div
        style={{
          fontSize: "16px",
          fontWeight: "700",
          lineHeight: "18px",
          letterSpacing: "-0.04em",
          textAlign: "center",
          color: "#454A54",
        }}
      >
        <div
          style={{
            marginBottom: "12px",
          }}
        >
          {title}
        </div>
        {children}
      </div>
    </div>
  );
}
