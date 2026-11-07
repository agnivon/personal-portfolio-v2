import React from "react";

const OpenGraphImage = ({
  width = 1200,
  height = 630,
}: {
  width?: number;
  height?: number;
}) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width,
        height,
        backgroundColor: "#09090b",
        color: "#fafafa",
        padding: "60px 80px",
        fontFamily: "sans-serif",
        position: "relative",
      }}
    >
      {/* Background Ambient Glow */}
      <div
        style={{
          position: "absolute",
          top: "-120px",
          right: "-120px",
          width: "550px",
          height: "550px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(6, 182, 212, 0.28) 0%, rgba(9, 9, 11, 0) 70%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-140px",
          left: "-140px",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(6, 182, 212, 0.16) 0%, rgba(9, 9, 11, 0) 70%)",
        }}
      />

      {/* Top Header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          zIndex: 1,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            backgroundColor: "rgba(24, 24, 27, 0.8)",
            border: "1px solid #27272a",
            padding: "10px 22px",
            borderRadius: "9999px",
          }}
        >
          <div
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              backgroundColor: "#06b6d4",
            }}
          />
          <span
            style={{
              fontSize: "20px",
              fontWeight: 700,
              color: "#e4e4e7",
              letterSpacing: "0.04em",
            }}
          >
            agnivon.dev
          </span>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: "18px",
            color: "#71717a",
            fontWeight: 500,
          }}
        >
          Portfolio & Engineering Showcase
        </div>
      </div>

      {/* Center Body */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "14px",
          zIndex: 1,
        }}
      >
        <h1
          style={{
            fontSize: "76px",
            fontWeight: 800,
            letterSpacing: "-0.03em",
            margin: 0,
            lineHeight: 1.1,
            color: "#ffffff",
          }}
        >
          Agnivo Neogi
        </h1>
        <p
          style={{
            fontSize: "30px",
            color: "#06b6d4",
            fontWeight: 600,
            margin: 0,
            letterSpacing: "-0.01em",
          }}
        >
          Full-Stack Developer & Software Engineer
        </p>
        <p
          style={{
            fontSize: "22px",
            color: "#a1a1aa",
            margin: 0,
            maxWidth: "920px",
            lineHeight: 1.4,
          }}
        >
          Building modern, scalable web applications, thoughtful user interfaces,
          and intelligent cloud architectures.
        </p>
      </div>

      {/* Bottom Footer: Tech Stack Chips */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          zIndex: 1,
        }}
      >
        {["Next.js", "TypeScript", "React", "Node.js", "AI Agents", "Cloud"].map(
          (tech) => (
            <div
              key={tech}
              style={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "rgba(39, 39, 42, 0.65)",
                border: "1px solid #3f3f46",
                padding: "8px 18px",
                borderRadius: "8px",
                fontSize: "16px",
                fontWeight: 600,
                color: "#e4e4e7",
              }}
            >
              {tech}
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default OpenGraphImage;
