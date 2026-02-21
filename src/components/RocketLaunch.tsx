import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

export const RocketLaunch: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    // Track scroll progress within a very tall 400vh container
    const { scrollYProgress: rawProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Apply physics spring to smooth out erratic mouse wheel inputs
    const scrollYProgress = useSpring(rawProgress, {
        stiffness: 80,
        damping: 20,
        restDelta: 0.001
    });

    // We will break the scroll range (0 to 1) into distinct cinematic phases:
    // 0.00 - 0.20 : Pan down the massive rocket (Camera moves up, so rocket moves down visually)
    // 0.20 - 0.40 : Pause at the base, engines ignite, smoke builds.
    // 0.40 - 0.50 : Full thrust builds, violently shaking.
    // 0.50 - 1.00 : Blast off! The rocket shoots way up and past the screen.

    // Background Darkening (Dim the universe behind the rocket during focus)
    const overlayOpacity = useTransform(scrollYProgress,
        [0, 0.2, 0.8, 1],
        [0, 0.4, 0.4, 0]
    );

    // Camera Pan (Controls the position of the entire rocket + moon container)
    // Starts high up on the ship, pans down to the engines, then flies up.
    const sceneY = useTransform(scrollYProgress,
        [0, 0.2, 0.4, 0.5, 0.9, 1],
        ["50%", "-10%", "-10%", "-10%", "-250%", "-350%"]
    );

    // Violent Rocket Shake during ignition & lift off
    const shakeX = useTransform(scrollYProgress,
        [0.2, 0.25, 0.3, 0.35, 0.4, 0.45, 0.5, 0.6, 0.7, 1],
        ["0px", "-8px", "10px", "-12px", "14px", "-15px", "18px", "-10px", "0px", "0px"]
    );
    const shakeY = useTransform(scrollYProgress,
        [0.2, 0.25, 0.3, 0.35, 0.4, 0.45, 0.5, 0.6, 0.7, 1],
        ["0px", "6px", "-8px", "10px", "-12px", "15px", "-18px", "10px", "0px", "0px"]
    );

    // Main Engine Ignition Light (Blinding White/Blue glow)
    const ignitionScale = useTransform(scrollYProgress,
        [0.2, 0.3, 0.5, 0.8],
        [0, 1.5, 3, 0]
    );
    const ignitionOpacity = useTransform(scrollYProgress,
        [0.2, 0.3, 0.5, 0.8],
        [0, 1, 1, 0]
    );

    // Massive Plume / Exhaust Fire
    const plumeHeight = useTransform(scrollYProgress,
        [0.25, 0.4, 0.8],
        ["0vh", "80vh", "300vh"]
    );
    const plumeOpacity = useTransform(scrollYProgress,
        [0.25, 0.3, 0.8, 1],
        [0, 1, 1, 0]
    );

    // Smoke effect billowing outwards
    const smokeScale = useTransform(scrollYProgress,
        [0.2, 0.5, 0.8],
        [0.5, 2.5, 4]
    );
    const smokeOpacity = useTransform(scrollYProgress,
        [0.2, 0.4, 0.7, 1],
        [0, 0.8, 0.2, 0]
    );

    // Moon surface fades away rapidly as we blast off
    const moonOpacity = useTransform(scrollYProgress,
        [0.5, 0.7],
        [1, 0]
    );

    return (
        // The mighty 400vh scrolling container to hold the sequence
        <div ref={containerRef} className="relative w-full h-[400vh] z-20">
            {/* The Sticky "Camera" Viewport */}
            <div className="sticky top-0 w-full h-screen overflow-hidden flex flex-col items-center justify-center">

                {/* Cinematic Focus Overlay */}
                <motion.div
                    className="absolute inset-0 bg-[#000000] z-0 pointer-events-none"
                    style={{ opacity: overlayOpacity }}
                />

                {/* The Main Scene (Moves to simulate panning and flying) */}
                <motion.div
                    className="relative z-10 w-full h-full flex flex-col items-center justify-end"
                    style={{ y: sceneY }}
                >

                    {/* The Massive Realistic Rocket */}
                    <motion.div
                        className="relative flex flex-col items-center z-30"
                        style={{ x: shakeX, y: shakeY }}
                    >
                        {/* High Fidelity Starship Structure */}
                        <div className="relative w-[180px] h-[700px] md:w-[240px] md:h-[900px] flex flex-col items-center" style={{ willChange: "transform" }}>

                            {/* Nose Cone */}
                            <div className="w-full h-[30%] bg-gradient-to-b from-[#e2e8f0] via-[#94a3b8] to-[#475569] rounded-[50%_50%_0_0/100%_100%_0_0] relative overflow-hidden border-b-2 border-[#1e293b]">
                                {/* Metallic Sheen / Highlight */}
                                <div className="absolute top-0 left-[15%] w-[10%] h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12"></div>
                                {/* Heat Shield Tiles (Dark Side) */}
                                <div className="absolute top-0 right-0 w-[45%] h-full bg-[#0f172a] opacity-90 rounded-bl-[100%] shadow-[inset_20px_0_30px_rgba(0,0,0,0.8)]"></div>
                            </div>

                            {/* Main Body Cylinders */}
                            <div className="w-full h-[55%] bg-gradient-to-r from-[#334155] via-[#94a3b8] to-[#1e293b] flex flex-col justify-evenly border-x-2 border-[#0f172a] relative overflow-hidden">
                                {/* Panels / Seams */}
                                {[...Array(8)].map((_, i) => (
                                    <div key={i} className="w-full h-[1px] bg-[#0f172a]/80 shadow-[0_1px_0_rgba(255,255,255,0.2)]"></div>
                                ))}
                                {/* Vertical Weld Line */}
                                <div className="absolute top-0 left-[30%] w-[2px] h-full bg-[#0f172a]/50"></div>

                                {/* Specular Metallic Highlight */}
                                <div className="absolute top-0 left-[10%] w-[15%] h-full bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

                                {/* SpaceX Style Heat Shield Half */}
                                <div className="absolute top-0 right-0 w-[45%] h-full bg-[#020617] opacity-95 shadow-[inset_30px_0_50px_rgba(0,0,0,0.9)] flex flex-wrap content-start">
                                    {/* Faux Hex Tiles Pattern */}
                                    <div className="w-full h-full opacity-10 bg-[radial-gradient(circle_at_center,_#ffffff_1px,_transparent_1px)] bg-[size:10px_10px]"></div>
                                </div>
                            </div>

                            {/* Engine Bay / Aft Section */}
                            <div className="w-[105%] h-[15%] bg-gradient-to-b from-[#1e293b] to-[#020617] rounded-b-3xl relative flex justify-center items-end pb-4 border-2 border-t-0 border-[#0f172a] shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
                                {/* Flaps */}
                                <div className="absolute bottom-[20%] -left-[15%] w-[25%] h-[60%] bg-gradient-to-r from-[#334155] to-[#1e293b] rounded-l-full shadow-lg transform -skew-y-12"></div>
                                <div className="absolute bottom-[20%] -right-[15%] w-[25%] h-[60%] bg-gradient-to-l from-[#0f172a] to-[#020617] rounded-r-full shadow-lg transform skew-y-12"></div>

                                {/* Raptor Engines (3 Visibile) */}
                                <div className="flex gap-4 z-10">
                                    <div className="w-[30px] h-[40px] md:w-[40px] md:h-[50px] bg-gradient-to-b from-[#475569] to-[#0f172a] rounded-[20%] border border-[#334155]"></div>
                                    <div className="w-[35px] h-[45px] md:w-[45px] md:h-[55px] bg-gradient-to-b from-[#475569] to-[#020617] rounded-[20%] border border-[#334155] transform translate-y-2"></div>
                                    <div className="w-[30px] h-[40px] md:w-[40px] md:h-[50px] bg-gradient-to-b from-[#1e293b] to-[#020617] rounded-[20%] border border-[#0f172a]"></div>
                                </div>
                            </div>
                        </div>

                        {/* =======================================================
                            MASSIVE EXHAUST & FIRE SYSTEM (Hardware Accelerated)
                        ======================================================= */}
                        <motion.div className="absolute top-[95%] flex flex-col items-center justify-start w-full z-0 origin-top pointer-events-none" style={{ willChange: "transform" }}>

                            {/* 1. Blinding Ignition Flash (SVG-like pure CSS radial gradient) */}
                            <motion.div
                                className="absolute top-[-50px] w-[500px] h-[500px] rounded-full"
                                style={{
                                    scale: ignitionScale,
                                    opacity: ignitionOpacity,
                                    willChange: "transform, opacity",
                                    background: 'radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(56, 189, 248, 0.6) 30%, transparent 70%)'
                                }}
                            />

                            {/* 2. The Mach Diamond Core (White/Cyan Hot Plasma) */}
                            <motion.div
                                className="absolute top-0 w-[100px] md:w-[140px] rounded-t-full"
                                style={{
                                    height: plumeHeight,
                                    opacity: plumeOpacity,
                                    willChange: "height, opacity",
                                    background: 'linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(56, 189, 248, 0.8) 20%, transparent 100%)'
                                }}
                            />

                            {/* 3. The Massive Orange/Red Outer Plume */}
                            <motion.div
                                className="absolute top-10 w-[250px] md:w-[350px] rounded-t-full mt-[-10px]"
                                style={{
                                    height: plumeHeight,
                                    opacity: plumeOpacity,
                                    willChange: "height, opacity",
                                    background: 'linear-gradient(to bottom, rgba(249, 115, 22, 0.9) 0%, rgba(220, 38, 38, 0.7) 30%, transparent 100%)'
                                }}
                            />

                            {/* 4. Billowing Base Smoke & Shockwaves */}
                            <motion.div
                                className="absolute top-[50%] w-[600px] h-[600px] rounded-full"
                                style={{
                                    scale: smokeScale,
                                    opacity: smokeOpacity,
                                    willChange: "transform, opacity",
                                    background: 'radial-gradient(circle, rgba(148,163,184,0.4) 0%, transparent 60%)'
                                }}
                            />
                            <motion.div
                                className="absolute top-[80%] w-[800px] h-[800px] rounded-full"
                                style={{
                                    scale: smokeScale,
                                    opacity: smokeOpacity,
                                    willChange: "transform, opacity",
                                    background: 'radial-gradient(circle, rgba(15,23,42,0.8) 0%, transparent 60%)'
                                }}
                            />

                        </motion.div>
                    </motion.div>

                    {/* Massive Moon/Launchpad Surface Base */}
                    <motion.div
                        className="absolute bottom-[-20%] w-[300%] md:w-[200%] h-[40vh] bg-gradient-to-b from-[#0f172a] to-[#020617] rounded-[100%] border-t-[8px] border-[#334155] shadow-[0_-50px_100px_rgba(0,0,0,1)] flex-shrink-0 z-0"
                        style={{ opacity: moonOpacity }}
                    >
                        {/* Launch Pad Structure */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[40px] bg-[#1e293b] rounded-[100%] shadow-[inset_0_-10px_20px_rgba(0,0,0,0.8)] border-t border-[#475569] flex justify-center items-end pb-2">
                            {/* Support brackets */}
                            <div className="w-[20px] h-[100px] bg-[#0f172a] absolute -left-10 bottom-0 transform -rotate-12"></div>
                            <div className="w-[20px] h-[100px] bg-[#0f172a] absolute -right-10 bottom-0 transform rotate-12"></div>
                        </div>

                        {/* Ambient base glow from rocket exhaust illuminating the pad */}
                        <motion.div
                            className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-orange-500/20 blur-[80px] rounded-full pointer-events-none"
                            style={{ opacity: ignitionOpacity }}
                        />

                        {/* Base Craters / Texture */}
                        <div className="absolute top-[20%] left-[30%] w-[200px] h-[40px] bg-[#020617] rounded-[100%] opacity-60 shadow-[inset_0_8px_15px_rgba(0,0,0,0.9)]"></div>
                        <div className="absolute top-[10%] left-[65%] w-[350px] h-[80px] bg-[#020617] rounded-[100%] opacity-40 shadow-[inset_0_10px_30px_rgba(0,0,0,0.9)]"></div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};
