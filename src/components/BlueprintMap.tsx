import React, { useState } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import {
    ComposableMap,
    Geographies,
    Geography,
    Marker,
    ZoomableGroup
} from "react-simple-maps";
import indiaTopo from "../assets/india.topo.json";

/* ─────────────────────────────────────────────────────────────
   BlueprintMap
   Uses react-simple-maps with actual TopoJSON data for India.
   Renders a dark-navy India map with glowing cyan state
   lines, Gujarat highlighted, and an animated Rajkot marker.
────────────────────────────────────────────────────────────── */

interface BlueprintMapProps {
    height?: number | string;
    width?: number | string;
    className?: string;
}

const RAJKOT_COORDS: [number, number] = [70.8022, 22.3039];

interface HoveredRegion {
    name: string;
    lon: number;
    lat: number;
}

const BlueprintMap: React.FC<BlueprintMapProps> = ({
    height = "100%",
    width = "100%",
    className,
}) => {
    const [hoveredRegion, setHoveredRegion] = useState<HoveredRegion | null>(null);
    const [position, setPosition] = useState({ coordinates: [79, 22.5] as [number, number], zoom: 1 });

    const handleZoomIn = () => {
        if (position.zoom >= 4) return;
        setPosition((pos) => ({ ...pos, zoom: pos.zoom * 1.5 }));
    };

    const handleZoomOut = () => {
        if (position.zoom <= 1) return;
        setPosition((pos) => ({ ...pos, zoom: pos.zoom / 1.5 }));
    };

    const handleMoveEnd = (newPosition: { coordinates: [number, number]; zoom: number }) => {
        setPosition(newPosition);
    };

    return (
        <Box
            className={className}
            sx={{
                width,
                height,
                position: "relative",
                borderRadius: "inherit",
                overflow: "hidden",
                bgcolor: "#38a3a5",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }}
        >
            {/* Keyframes */}
            <style>{`
                @keyframes radarPulse {
                    0%   { transform: scale(1);   opacity: 0.9; }
                    100% { transform: scale(4.5); opacity: 0; }
                }
                @keyframes markerBlink {
                    0%, 100% { opacity: 1; }
                    50%      { opacity: 0.4; }
                }
                @keyframes scanLine {
                    0%   { opacity: 0; top: 0%; }
                    10%  { opacity: 0.6; }
                    90%  { opacity: 0.4; }
                    100% { opacity: 0; top: 100%; }
                }
            `}</style>

            <svg style={{ position: "absolute", width: 0, height: 0 }}>
                <defs>
                    <filter id="glowMap" x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur stdDeviation="1.5" result="blur" />
                        <feMerge>
                            <feMergeNode in="blur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>
            </svg>

            {/* ── Background Gradient & Grid ───────────────── */}
            <Box
                sx={{
                    position: "absolute",
                    inset: 0,
                    bgcolor: "#38a3a5",
                    zIndex: 0,
                }}
            />
            <Box
                sx={{
                    position: "absolute",
                    inset: 0,
                    backgroundImage: `linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px),
                                      linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)`,
                    backgroundSize: "24px 24px",
                    zIndex: 1,
                }}
            />
            {/* Scan line overlay */}
            <Box
                sx={{
                    position: "absolute",
                    top: 0, left: 0, right: 0, height: "3px",
                    bgcolor: "rgba(77,208,225,0.25)",
                    animation: "scanLine 4s linear infinite",
                    zIndex: 2,
                }}
            />

            {/* ── Map ──────────────────────────────────────── */}
            <Box sx={{ width: "100%", height: "100%", zIndex: 10, position: "relative" }}>
                <ComposableMap
                    projection="geoMercator"
                    projectionConfig={{
                        scale: 1100,
                        center: [79, 22.5]
                    }}
                    style={{ width: "100%", height: "100%" }}
                >
                    <ZoomableGroup 
                        zoom={position.zoom}
                        center={position.coordinates}
                        onMoveEnd={handleMoveEnd}
                        minZoom={1} 
                        maxZoom={4}
                    >
                        <Geographies geography={indiaTopo}>
                            {({ geographies }) =>
                                geographies.map((geo) => {
                                    const isGujarat = geo.properties.name === "Gujarat";
                                    return (
                                        <Geography
                                            key={geo.rsmKey}
                                            geography={geo}
                                            onMouseEnter={() => {
                                                const lon = geo.properties["hc-middle-lon"];
                                                const lat = geo.properties["hc-middle-lat"];
                                                if (lon && lat) {
                                                    setHoveredRegion({ name: geo.properties.name, lon, lat });
                                                }
                                            }}
                                            onMouseLeave={() => setHoveredRegion(null)}
                                            fill={isGujarat ? "transparent" : "rgba(0,0,0,0.04)"}
                                            stroke={isGujarat ? "#a5f3f3" : "rgba(0,0,0,0.12)"}
                                            strokeWidth={isGujarat ? 1.5 : 0.6}
                                            style={{
                                                default: {
                                                    outline: "none",
                                                    filter: isGujarat ? "url(#glowMap)" : "none"
                                                },
                                                hover: {
                                                    fill: "rgba(255,255,255,0.1)",
                                                    stroke: "#a5f3f3",
                                                    strokeWidth: 1.5,
                                                    outline: "none",
                                                    filter: "url(#glowMap)",
                                                    cursor: "pointer"
                                                },
                                                pressed: { outline: "none" }
                                            }}
                                        />
                                    );
                                })
                            }
                        </Geographies>

                        {/* ── Rajkot marker ───────────────────────── */}
                        <Marker coordinates={RAJKOT_COORDS}>
                            <g 
                                filter="url(#glowMap)"
                                onMouseEnter={() => setHoveredRegion({ name: "Rajkot, Gujarat", lon: RAJKOT_COORDS[0], lat: RAJKOT_COORDS[1] })}
                                onMouseLeave={() => setHoveredRegion(null)}
                                style={{ cursor: "pointer" }}
                            >
                                {/* Radar pulse rings */}
                                <circle
                                    cx={0} cy={0} r="4"
                                    fill="none" stroke="#a5f3f3" strokeWidth="1.2"
                                    style={{ animation: "radarPulse 2s ease-out infinite" }}
                                />
                                <circle
                                    cx={0} cy={0} r="4"
                                    fill="none" stroke="#a5f3f3" strokeWidth="0.8"
                                    style={{ animation: "radarPulse 2s 0.6s ease-out infinite" }}
                                />
                                <circle
                                    cx={0} cy={0} r="4"
                                    fill="none" stroke="#a5f3f3" strokeWidth="0.6"
                                    style={{ animation: "radarPulse 2s 1.2s ease-out infinite" }}
                                />
                                {/* Core dot */}
                                <circle
                                    cx={0} cy={0} r="2.5"
                                    fill="#a5f3f3"
                                    style={{ animation: "markerBlink 1.8s ease-in-out infinite" }}
                                />
                                <circle cx={0} cy={0} r={1} fill="#ffffff" />
                            </g>
                        </Marker>

                        {/* ── Dynamic Hover Callout ───────────────── */}
                        {hoveredRegion && (
                            <Marker coordinates={[hoveredRegion.lon, hoveredRegion.lat]}>
                                <g style={{ pointerEvents: "none" }} filter="url(#glowMap)">
                                    {/* Callout connecting line */}
                                    <path 
                                        d="M 0 0 L 12 -12 L 24 -12" 
                                        fill="none" 
                                        stroke="#141f28" 
                                        strokeWidth="2.5" 
                                    />
                                    <path 
                                        d="M 0 0 L 12 -12 L 24 -12" 
                                        fill="none" 
                                        stroke="#a5f3f3" 
                                        strokeWidth="1" 
                                    />
                                    
                                    {/* Callout Box */}
                                    <rect 
                                        x={24} y={-22} 
                                        width={hoveredRegion.name.length * 4.2 + 16} 
                                        height={20} 
                                        fill="#141f28" 
                                        stroke="#a5f3f3" 
                                        strokeWidth="1.2"
                                    />
                                    
                                    {/* Callout Text */}
                                    <text 
                                        x={24 + (hoveredRegion.name.length * 4.2 + 16) / 2} 
                                        y={-10} 
                                        fill="#a5f3f3" 
                                        fontSize="6.5" 
                                        fontFamily="'JetBrains Mono', monospace" 
                                        fontWeight="bold"
                                        textAnchor="middle"
                                        letterSpacing="0.05em"
                                    >
                                        {hoveredRegion.name.toUpperCase()}
                                    </text>
                                </g>
                            </Marker>
                        )}
                    </ZoomableGroup>
                </ComposableMap>
            </Box>

            {/* ── Corner HUD elements ──────────────────── */}
            {/* Top-left bracket */}
            <Box sx={{ position: "absolute", top: 12, left: 12, width: 24, height: 24, borderTop: "1px solid #4dd0e1", borderLeft: "1px solid #4dd0e1", opacity: 0.5, zIndex: 11 }} />
            {/* Bottom-right bracket */}
            <Box sx={{ position: "absolute", bottom: 12, right: 12, width: 24, height: 24, borderBottom: "1px solid #4dd0e1", borderRight: "1px solid #4dd0e1", opacity: 0.5, zIndex: 11 }} />

            {/* Coordinate label bottom-left */}
            <Typography
                sx={{
                    position: "absolute",
                    bottom: 12, left: 12,
                    color: "#4dd0e1",
                    fontSize: "0.55rem",
                    fontFamily: "'JetBrains Mono', monospace",
                    opacity: 0.45,
                    letterSpacing: "0.08em",
                    zIndex: 11,
                    pointerEvents: "none"
                }}
            >
                22.3039°N  70.8022°E
            </Typography>

            {/* Top-right label */}
            <Typography
                sx={{
                    position: "absolute",
                    top: 12, right: 12,
                    color: "#4dd0e1",
                    fontSize: "0.55rem",
                    fontFamily: "'JetBrains Mono', monospace",
                    opacity: 0.45,
                    letterSpacing: "0.08em",
                    zIndex: 11,
                    pointerEvents: "none"
                }}
            >
                IND · REGION
            </Typography>

            {/* ── Zoom Controls ──────────────────── */}
            <Box
                sx={{
                    position: "absolute",
                    bottom: 24,
                    right: 24,
                    display: "flex",
                    flexDirection: "column",
                    gap: 1,
                    zIndex: 12,
                }}
            >
                <IconButton 
                    onClick={handleZoomIn}
                    disabled={position.zoom >= 4}
                    sx={{ 
                        bgcolor: "rgba(20,31,40,0.8)", 
                        color: "#a5f3f3",
                        border: "1px solid rgba(165,243,243,0.3)",
                        "&:hover": { bgcolor: "rgba(20,31,40,1)", borderColor: "#a5f3f3" },
                        "&.Mui-disabled": { opacity: 0.4 }
                    }}
                >
                    <AddIcon fontSize="small" />
                </IconButton>
                <IconButton 
                    onClick={handleZoomOut}
                    disabled={position.zoom <= 1}
                    sx={{ 
                        bgcolor: "rgba(20,31,40,0.8)", 
                        color: "#a5f3f3",
                        border: "1px solid rgba(165,243,243,0.3)",
                        "&:hover": { bgcolor: "rgba(20,31,40,1)", borderColor: "#a5f3f3" },
                        "&.Mui-disabled": { opacity: 0.4 }
                    }}
                >
                    <RemoveIcon fontSize="small" />
                </IconButton>
            </Box>

            {/* Overlay badge (Top-Left Pill) */}

        </Box>
    );
};

export default BlueprintMap;
