"use client";

import React from "react";

interface AuroraBackgroundProps {
    children?: React.ReactNode;
    className?: string;
}

/**
 * AuroraBackground
 * ----------------
 * Reusable full-screen white aurora background with animated blobs.
 * Wrap any page content inside this component.
 *
 * Usage:
 *   <AuroraBackground>
 *     <YourPageContent />
 *   </AuroraBackground>
 */
const AuroraBackground: React.FC<AuroraBackgroundProps> = ({
    children,
    className = "",
}) => {
    return (
        <>
            <style>{`
        @keyframes aurora-drift-1 {
          0%   { transform: translate(0%, 0%)   scale(1);   }
          25%  { transform: translate(18%, -18%) scale(1.15); }
          50%  { transform: translate(-15%, 20%) scale(0.85); }
          75%  { transform: translate(8%, -12%)  scale(1.1);  }
          100% { transform: translate(0%, 0%)   scale(1);   }
        }
        @keyframes aurora-drift-2 {
          0%   { transform: translate(0%, 0%)    scale(1);   }
          25%  { transform: translate(-18%, 18%) scale(1.1); }
          50%  { transform: translate(18%, -18%) scale(0.9); }
          75%  { transform: translate(-10%, 12%) scale(1.2); }
          100% { transform: translate(0%, 0%)    scale(1);   }
        }
        @keyframes aurora-drift-3 {
          0%   { transform: translate(0%, 0%)    scale(1.05); }
          33%  { transform: translate(-12%, 14%) scale(0.9);  }
          66%  { transform: translate(14%, -10%) scale(1.15); }
          100% { transform: translate(0%, 0%)    scale(1.05); }
        }
        @keyframes aurora-drift-4 {
          0%   { transform: translate(0%, 0%)   scale(0.95); }
          40%  { transform: translate(16%, 16%) scale(1.1);  }
          80%  { transform: translate(-8%, -8%) scale(1.0);  }
          100% { transform: translate(0%, 0%)   scale(0.95); }
        }

        .aurora-blob-1 {
          position: absolute;
          top: -12%;
          left: 18%;
          width: 520px;
          height: 520px;
          border-radius: 50%;
          background: #3b82f6;
          filter: blur(90px);
          opacity: 0.18;
          animation: aurora-drift-1 24s ease-in-out infinite;
        }
        .aurora-blob-2 {
          position: absolute;
          bottom: -15%;
          right: 12%;
          width: 460px;
          height: 460px;
          border-radius: 50%;
          background: #64748b;
          filter: blur(100px);
          opacity: 0.14;
          animation: aurora-drift-2 20s ease-in-out infinite;
        }
        .aurora-blob-3 {
          position: absolute;
          top: 35%;
          left: -8%;
          width: 380px;
          height: 380px;
          border-radius: 50%;
          background: #6366f1;
          filter: blur(80px);
          opacity: 0.12;
          animation: aurora-drift-3 28s ease-in-out infinite;
        }
        .aurora-blob-4 {
          position: absolute;
          top: 20%;
          right: -5%;
          width: 300px;
          height: 300px;
          border-radius: 50%;
          background: #0ea5e9;
          filter: blur(70px);
          opacity: 0.10;
          animation: aurora-drift-4 32s ease-in-out infinite;
        }
        .aurora-root {
          position: relative;
          width: 100%;
          min-height: 100vh;
          background: #ffffff;
          overflow: hidden;
        }
        .aurora-blobs {
          position: absolute;
          inset: 0;
          z-index: 0;
          overflow: hidden;
        }
        .aurora-content {
          position: relative;
          z-index: 10;
        }
      `}</style>

            <div className={`aurora-root ${className}`}>
                {/* Animated aurora blobs */}
                <div className="aurora-blobs">
                    <div className="aurora-blob-1" />
                    <div className="aurora-blob-2" />
                    <div className="aurora-blob-3" />
                    <div className="aurora-blob-4" />
                </div>

                {/* Page content */}
                <div className="aurora-content">{children}</div>
            </div>
        </>
    );
};

export default AuroraBackground;