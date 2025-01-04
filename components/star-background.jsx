"use client";

import { useEffect, useRef } from "react";

const StarBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    // Create stars
    const stars = Array.from({ length: 200 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 2 + 0.5, // Ensure stars aren't too small
      speedX: (Math.random() - 0.5) * 0.4, // Increased speedX
      speedY: (Math.random() - 0.5) * 0.4, // Increased speedY
      color: Math.random() > 0.5 ? "#7D75E4" : "rgba(255, 255, 255, 0.8)", // Randomly assign color
      opacity: Math.random() * 0.5 + 0.5, // Random initial opacity
      opacitySpeed: Math.random() * 0.02 + 0.01, // Speed of opacity oscillation
    }));

    // Animation function
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      stars.forEach((star) => {
        // Update position
        star.x += star.speedX;
        star.y += star.speedY;

        // Wrap around screen
        if (star.x < 0) star.x = canvas.width;
        if (star.x > canvas.width) star.x = 0;
        if (star.y < 0) star.y = canvas.height;
        if (star.y > canvas.height) star.y = 0;

        // Update opacity for twinkling effect
        star.opacity += star.opacitySpeed;
        if (star.opacity <= 0.5 || star.opacity >= 1) {
          star.opacitySpeed *= -1; // Reverse opacity direction
        }

        // Draw star
        ctx.fillStyle = star.color.replace(
          /0\.\d+/,
          `${star.opacity.toFixed(2)}`
        ); // Adjust opacity
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", setCanvasSize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ background: "transparent" }}
    />
  );
};

export default StarBackground;
