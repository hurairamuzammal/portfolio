import React, { useEffect, useRef } from 'react';

interface Particle {
    x: number;
    y: number;
    radius: number;
    color: string;
    speed: number;
    alpha: number;
    glow: number;
    twinkleDir: number;
    twinkleSpeed: number;
}

interface Comet {
    x: number;
    y: number;
    length: number;
    speed: number;
    angle: number;
    color: string;
    opacity: number;
    fadeSpeed: number;
}

interface Planet {
    x: number;
    y: number;
    radius: number;
    color: string;
    angle: number;
    rotationSpeed: number;
    orbitRadius: number;
    orbitX: number;
    orbitY: number;
    orbitSpeed: number;
    craterPositions: { x: number, y: number, r: number }[];
    type: string;
    parallaxSpeed: number;
}

interface UniverseProps {
    mousePosition: { x: number; y: number };
}

export const UniverseBackground: React.FC<UniverseProps> = ({ mousePosition }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const mouseRef = useRef(mousePosition);

    useEffect(() => {
        mouseRef.current = mousePosition;
    }, [mousePosition]);

    useEffect(() => {
        const container = containerRef.current;
        const canvas = canvasRef.current;
        if (!container || !canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let width = container.clientWidth;
        let height = container.clientHeight;

        // Scale for retina displays
        const dpr = window.devicePixelRatio || 1;
        canvas.width = width * dpr;
        canvas.height = height * dpr;
        ctx.scale(dpr, dpr);
        canvas.style.width = width + 'px';
        canvas.style.height = height + 'px';

        let stars: Particle[] = [];
        let comets: Comet[] = [];
        let planets: Planet[] = [];

        const initBackground = () => {
            stars = [];
            const numStars = Math.floor((width * height) / 8000); // Increased regular stars to fill the universe
            for (let i = 0; i < numStars; i++) {
                stars.push({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    radius: Math.random() * 1.5,
                    color: `rgba(255, 255, 255, ${Math.random()})`,
                    speed: Math.random() * 0.15 + 0.05,
                    alpha: Math.random(),
                    glow: Math.random() * 5,
                    twinkleDir: Math.random() > 0.5 ? 1 : -1,
                    twinkleSpeed: Math.random() * 0.02 + 0.005
                });
            }

            planets = [
                // --- TOP PORTION ---
                { // Saturn (Pale yellow/gold with a large distinct ring)
                    x: width * 0.75, y: height * 0.15, radius: 55,
                    color: '#e2bf7d', angle: Math.PI / 6, rotationSpeed: 0.0008,
                    orbitRadius: 0, orbitX: width * 0.75, orbitY: height * 0.15, orbitSpeed: 0,
                    craterPositions: Array(6).fill(0).map(() => ({ x: (Math.random() - 0.5) * 2, y: (Math.random() - 0.5) * 2, r: Math.random() * 8 + 2 })),
                    type: 'saturn', parallaxSpeed: 0.1
                },
                { // Earth (Blue/green, vibrant)
                    x: width * 0.1, y: height * 0.25, radius: 65,
                    color: '#1a5b9c', angle: 0, rotationSpeed: 0.0005,
                    orbitRadius: 0, orbitX: width * 0.1, orbitY: height * 0.25, orbitSpeed: 0,
                    craterPositions: Array(12).fill(0).map(() => ({ x: (Math.random() - 0.5) * 2, y: (Math.random() - 0.5) * 2, r: Math.random() * 15 + 3 })),
                    type: 'earth', parallaxSpeed: 0.15
                },
                { // Hubble Telescope (Small, highly detailed, rotating very slowly)
                    x: width * 0.3, y: height * 0.8, radius: 20,
                    color: '#c0c0c0', angle: -Math.PI / 4, rotationSpeed: 0.0002,
                    orbitRadius: 0, orbitX: width * 0.3, orbitY: height * 0.8, orbitSpeed: 0,
                    craterPositions: [],
                    type: 'hubble', parallaxSpeed: 0.05
                },
                // --- BOTTOM PORTION (Scroll Down to see) ---
                { // Mars (Red/orange, small, fast rotation)
                    x: width * 0.8, y: height * 1.1, radius: 35,
                    color: '#c1440e', angle: 0, rotationSpeed: 0.001,
                    orbitRadius: 0, orbitX: width * 0.8, orbitY: height * 1.1, orbitSpeed: 0,
                    craterPositions: Array(8).fill(0).map(() => ({ x: (Math.random() - 0.5) * 2, y: (Math.random() - 0.5) * 2, r: Math.random() * 6 + 2 })),
                    type: 'mars', parallaxSpeed: 0.3
                },
                { // Jupiter (Giant, orange/brown, rings effect simulated by crater bands)
                    x: width * 0.2, y: height * 1.8, radius: 150,
                    color: '#cb8b51', angle: 0, rotationSpeed: 0.00015,
                    orbitRadius: 0, orbitX: width * 0.2, orbitY: height * 1.8, orbitSpeed: 0,
                    craterPositions: Array(15).fill(0).map(() => ({ x: (Math.random() - 0.5) * 2, y: (Math.random() - 0.5) * 1, r: Math.random() * 30 + 10 })),
                    type: 'jupiter', parallaxSpeed: 0.4
                },
                { // Pluto (very distant, tiny, gray)
                    x: width * 0.85, y: height * 2.8, radius: 12,
                    color: '#7a8087', angle: 0, rotationSpeed: 0.0025,
                    orbitRadius: 0, orbitX: width * 0.85, orbitY: height * 2.8, orbitSpeed: 0,
                    craterPositions: Array(2).fill(0).map(() => ({ x: (Math.random() - 0.5) * 2, y: (Math.random() - 0.5) * 2, r: Math.random() * 2 + 1 })),
                    type: 'pluto', parallaxSpeed: 0.45
                },
                { // Neptune (Deep icy blue gas giant)
                    x: width * 0.15, y: height * 3.3, radius: 75,
                    color: '#2c4c82', angle: 0, rotationSpeed: 0.0006,
                    orbitRadius: 0, orbitX: width * 0.15, orbitY: height * 3.3, orbitSpeed: 0,
                    craterPositions: Array(10).fill(0).map(() => ({ x: (Math.random() - 0.5) * 2, y: (Math.random() - 0.5) * 1.5, r: Math.random() * 10 + 2 })),
                    type: 'neptune', parallaxSpeed: 0.5
                }
            ];
        };

        const handleResize = () => {
            if (!container) return;
            width = container.clientWidth;
            height = container.clientHeight;
            canvas.width = width * dpr;
            canvas.height = height * dpr;
            ctx.scale(dpr, dpr);
            canvas.style.width = width + 'px';
            canvas.style.height = height + 'px';
            initBackground();
        };

        const resizeObserver = new ResizeObserver(handleResize);
        resizeObserver.observe(container);
        window.addEventListener('resize', handleResize);

        // Track scroll position for dynamic parallax translation
        let currentScrollY = window.scrollY;
        const handleScroll = () => {
            currentScrollY = window.scrollY;
        };
        window.addEventListener('scroll', handleScroll, { passive: true });

        const cometColors = [
            'rgba(0, 255, 255, ',   // Neon Cyan
            'rgba(255, 0, 255, ',   // Neon Magenta
            'rgba(255, 230, 0, ',   // Solar Yellow
            'rgba(0, 255, 100, ',   // Toxic Green
            'rgba(255, 80, 0, ',    // Flame Orange
            'rgba(150, 50, 255, '   // Deep Purple
        ];

        const addComet = () => {
            // Increase frequency of shooting stars slightly so they are visible below
            if (Math.random() > 0.94) {
                const startX = Math.random() * width * 1.5;
                const startY = -50;
                const chosenColor = cometColors[Math.floor(Math.random() * cometColors.length)];
                comets.push({
                    x: startX,
                    y: startY,
                    length: Math.random() * 120 + 60,
                    speed: Math.random() * 15 + 15,
                    angle: Math.PI / 4 + (Math.random() * 0.3 - 0.15),
                    color: chosenColor,
                    opacity: 1,
                    fadeSpeed: Math.random() * 0.015 + 0.005
                });
            }
        };

        let animationFrameId: number;

        const render = () => {
            // Extremely dark pure black/deep-space background
            ctx.clearRect(0, 0, width, height);

            const mouseXOffset = (mouseRef.current.x - width / 2) * 0.02;
            const mouseYOffset = (mouseRef.current.y - height / 2) * 0.02;

            // The multiplier for scroll movement to simulate flying
            const scrollOffset = currentScrollY;

            // Draw Planets
            planets.forEach(p => {
                // Rotation increases as you scroll + passive rotation
                p.angle += p.rotationSpeed + (currentScrollY * 0.00001);

                let currentX = p.x;
                let currentY = p.y;

                // Parallax 3D depth perspective based on scroll & mouse (using individual parallax speeds)
                currentX = p.orbitX - mouseXOffset * (150 / p.radius);
                currentY = p.orbitY - mouseYOffset * (150 / p.radius) - (scrollOffset * p.parallaxSpeed);

                ctx.save();
                ctx.translate(currentX, currentY);
                ctx.rotate(p.angle);

                // Handle special rendering for Hubble Telescope
                if (p.type === 'hubble') {
                    // Main Body Tube (Silver)
                    ctx.fillStyle = '#b0b0b0';
                    ctx.fillRect(-15, -10, 30, 20);
                    // Light reflection on tube
                    ctx.fillStyle = '#ffffff';
                    ctx.fillRect(-15, -8, 30, 3);

                    // Front Aperture Door (Darker grey, open)
                    ctx.fillStyle = '#4a4a4a';
                    ctx.beginPath();
                    ctx.moveTo(15, -10);
                    ctx.lineTo(25, -20);
                    ctx.lineTo(25, -15);
                    ctx.lineTo(15, -5);
                    ctx.fill();

                    // Primary Mirror inside tube (Dark deep end)
                    ctx.fillStyle = '#05051a';
                    ctx.fillRect(10, -8, 5, 16);

                    // Aft shroud (Equipment section, golden foil color)
                    ctx.fillStyle = '#d4af37';
                    ctx.fillRect(-22, -12, 7, 24);
                    // Foil crinkle details
                    ctx.fillStyle = '#aa8010';
                    ctx.fillRect(-21, -10, 2, 20);
                    ctx.fillRect(-18, -10, 2, 20);

                    // Dark end cap
                    ctx.fillStyle = '#222';
                    ctx.fillRect(-24, -8, 2, 16);

                    // Solar Array Panels (Blue with grid lines)
                    ctx.fillStyle = '#1e3a8a';
                    // Top Panel
                    ctx.fillRect(-5, -45, 10, 35);
                    // Bottom Panel
                    ctx.fillRect(-5, 10, 10, 35);

                    // Solar panel grid lines (Silver)
                    ctx.strokeStyle = '#8ca8d9';
                    ctx.lineWidth = 0.5;
                    ctx.beginPath();
                    for (let i = 0; i < 3; i++) {
                        // Top lines
                        ctx.moveTo(-5, -40 + i * 10); ctx.lineTo(5, -40 + i * 10);
                        // Bottom lines
                        ctx.moveTo(-5, 15 + i * 10); ctx.lineTo(5, 15 + i * 10);
                    }
                    ctx.stroke();

                    // Communications Antenna (Dish on the side)
                    ctx.beginPath();
                    ctx.strokeStyle = '#fff';
                    ctx.lineWidth = 1;
                    ctx.moveTo(-10, 12);
                    ctx.lineTo(-25, 25);
                    ctx.stroke();
                    ctx.fillStyle = '#fff';
                    ctx.beginPath();
                    ctx.arc(-25, 25, 3, 0, Math.PI * 2);
                    ctx.fill();

                    ctx.restore();
                    return; // Skip standard planet drawing
                }

                // If Saturn, draw the back half of the ring FIRST (behind the planet)
                if (p.type === 'saturn') {
                    ctx.save();
                    ctx.scale(1, 0.3); // Flatten the ring
                    ctx.beginPath();
                    // Draw only the top half of the ellipse (back side of ring)
                    ctx.arc(0, 0, p.radius * 2.2, Math.PI, Math.PI * 2);
                    ctx.strokeStyle = 'rgba(215, 195, 155, 0.4)'; // Thicker back ring
                    ctx.lineWidth = p.radius * 0.6;
                    ctx.stroke();

                    ctx.beginPath();
                    ctx.arc(0, 0, p.radius * 2.2, Math.PI, Math.PI * 2);
                    ctx.strokeStyle = 'rgba(180, 160, 125, 0.6)'; // Thicker inner darker ring
                    ctx.lineWidth = p.radius * 0.2;
                    ctx.stroke();
                    ctx.restore();
                }

                // Standard Planet body gradient
                ctx.beginPath();
                const grad = ctx.createLinearGradient(-p.radius, -p.radius, p.radius, p.radius);
                grad.addColorStop(0, p.color);
                if (p.type === 'jupiter') {
                    grad.addColorStop(0.3, '#b87c4c');
                    grad.addColorStop(0.7, '#8f5c35');
                } else if (p.type === 'earth') {
                    grad.addColorStop(0.3, '#3182ce');
                    grad.addColorStop(0.7, '#082c57');
                } else if (p.type === 'saturn') {
                    grad.addColorStop(0.3, '#c9ad73');
                    grad.addColorStop(0.7, '#a8894d');
                }
                grad.addColorStop(1, '#000000'); // Shadow side
                ctx.fillStyle = grad;
                ctx.arc(0, 0, p.radius, 0, Math.PI * 2);
                ctx.fill();

                // Features depending on type (e.g. Earth continents, Saturn bands, Jupiter bands)
                if (p.type === 'earth') {
                    ctx.fillStyle = 'rgba(72, 187, 120, 0.6)'; // Green continents
                } else if (p.type === 'jupiter') {
                    ctx.fillStyle = 'rgba(168, 114, 74, 0.4)'; // Darker bands
                } else if (p.type === 'saturn') {
                    ctx.fillStyle = 'rgba(180, 150, 100, 0.5)'; // Darker bands for saturn
                } else if (p.type === 'neptune') {
                    ctx.fillStyle = 'rgba(100, 150, 255, 0.3)'; // Wintry high-speed winds
                } else {
                    ctx.fillStyle = 'rgba(0, 0, 0, 0.3)'; // Default craters
                }

                p.craterPositions.forEach(c => {
                    let cx, cy;
                    if (p.type === 'jupiter' || p.type === 'saturn' || p.type === 'neptune') {
                        // stretch craters to look like bands for gas giants
                        cx = c.x * (p.radius * 0.8);
                        cy = c.y * (p.radius * 0.8);
                        ctx.beginPath();
                        ctx.ellipse(cx, cy, c.r * 2, c.r * 0.3, 0, 0, Math.PI * 2);
                        ctx.fill();
                    } else if (p.type !== 'hubble') {
                        cx = c.x * (p.radius * 0.6);
                        cy = c.y * (p.radius * 0.6);
                        ctx.beginPath();
                        ctx.arc(cx, cy, c.r, 0, Math.PI * 2);
                        ctx.fill();
                    }
                });

                // If Saturn, draw the front half of the ring OVER the planet
                if (p.type === 'saturn') {
                    ctx.save();
                    ctx.scale(1, 0.3); // Flatten the ring
                    ctx.beginPath();
                    // Draw only the bottom half of the ellipse (front side of ring)
                    ctx.arc(0, 0, p.radius * 2.2, 0, Math.PI);
                    ctx.strokeStyle = 'rgba(215, 195, 155, 0.7)'; // Bright thick front ring
                    ctx.lineWidth = p.radius * 0.6;
                    ctx.stroke();

                    // Inner dark division line (front only)
                    ctx.beginPath();
                    ctx.arc(0, 0, p.radius * 2.2, 0, Math.PI);
                    ctx.strokeStyle = 'rgba(180, 160, 125, 0.8)';
                    ctx.lineWidth = p.radius * 0.2;
                    ctx.stroke();
                    ctx.restore();

                    // Planet shadow cast onto the back ring (drawn over the ring partially)
                    ctx.fillStyle = 'rgba(0,0,0,0.6)';
                    ctx.beginPath();
                    ctx.arc(p.radius * 0.8, -p.radius * 0.2, p.radius, 0, Math.PI * 2);
                    // We only want the shadow to appear on the ring, not floating in space, but a simple circle works ok for this aesthetic
                }

                // Atmosphere glow based on planet type
                let atmosphereColor;
                if (p.type === 'earth') atmosphereColor = 'rgba(96, 165, 250, 0.15)';
                else if (p.type === 'mars') atmosphereColor = 'rgba(239, 68, 68, 0.1)';
                else if (p.type === 'jupiter') atmosphereColor = 'rgba(251, 146, 60, 0.08)';
                else atmosphereColor = 'rgba(255, 255, 255, 0.05)';

                ctx.beginPath();
                ctx.arc(0, 0, p.radius + 8, 0, Math.PI * 2);
                ctx.strokeStyle = atmosphereColor;
                ctx.lineWidth = 12;
                ctx.stroke();

                ctx.restore();
            });

            // Draw Stars
            stars.forEach(star => {
                // Star movement
                star.y -= star.speed;
                if (star.y < 0) {
                    star.y = height;
                    star.x = Math.random() * width;
                }

                star.alpha += star.twinkleSpeed * star.twinkleDir;
                if (star.alpha > 1) {
                    star.alpha = 1;
                    star.twinkleDir = -1;
                } else if (star.alpha < 0.1) {
                    star.alpha = 0.1;
                    star.twinkleDir = 1;
                }

                const xPos = star.x - mouseXOffset * star.speed * 2;

                // Stars move up as we scroll down to simulate falling through space
                let yPos = star.y - mouseYOffset * star.speed * 2 - (scrollOffset * star.speed);
                // Wrap stars infinitely
                yPos = ((yPos % height) + height) % height;

                ctx.beginPath();
                ctx.arc(xPos, yPos, star.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;

                if (star.glow > 2) {
                    ctx.shadowBlur = star.glow;
                    ctx.shadowColor = 'white';
                } else {
                    ctx.shadowBlur = 0;
                }
                ctx.fill();
            });
            ctx.shadowBlur = 0;

            // Comets
            addComet();
            for (let i = comets.length - 1; i >= 0; i--) {
                const c = comets[i];

                ctx.beginPath();
                const endX = c.x - Math.cos(c.angle) * c.length;
                const endY = c.y - Math.sin(c.angle) * c.length;

                const grad = ctx.createLinearGradient(c.x, c.y, endX, endY);
                grad.addColorStop(0, `${c.color}${c.opacity * 2})`); // head
                grad.addColorStop(0.2, `${c.color}${c.opacity})`);
                grad.addColorStop(1, `rgba(0,0,0,0)`); // tail end

                ctx.strokeStyle = grad;
                ctx.lineWidth = 3;
                ctx.lineCap = "round";
                ctx.moveTo(c.x, c.y);
                ctx.lineTo(endX, endY);
                // glowing head
                ctx.shadowBlur = 10;
                ctx.shadowColor = c.color.replace(', ', ', 1)').replace('rgba', 'rgb');
                ctx.stroke();
                ctx.shadowBlur = 0;

                // Move comet
                c.x += Math.cos(c.angle) * c.speed;
                c.y += Math.sin(c.angle) * c.speed;
                c.opacity -= c.fadeSpeed;

                if (c.opacity <= 0 || c.x > width + 200 || c.y > height + 200) {
                    comets.splice(i, 1);
                }
            }

            animationFrameId = requestAnimationFrame(render);
        };

        initBackground();
        render();

        return () => {
            resizeObserver.disconnect();
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('scroll', handleScroll);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div ref={containerRef} className="fixed inset-0 z-0 bg-[#000000] overflow-hidden pointer-events-none">
            <canvas ref={canvasRef} className="w-full h-full block" />
        </div>
    );
};
