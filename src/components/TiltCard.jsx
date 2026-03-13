import React, { useRef, useState } from 'react';

/**
 * TiltCard ΓÇô wraps any content with a realistic mouse-tracking 3D perspective tilt.
 * Drop it in place of any wrapper div. The children are rendered in a preserve-3d layer
 * so inner elements can themselves use translateZ for depth.
 */
const TiltCard = ({ children, className = '', intensity = 6 }) => {
    const ref = useRef(null);
    const [style, setStyle] = useState({});

    const handleMouseMove = (e) => {
        const card = ref.current;
        if (!card) return;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const cx = rect.width / 2;
        const cy = rect.height / 2;
        const rotX = ((y - cy) / cy) * -intensity;
        const rotY = ((x - cx) / cx) * intensity;
        setStyle({
            transform: `perspective(900px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale3d(1.03, 1.03, 1.03)`,
            transition: 'transform 0.08s linear',
        });
    };

    const handleMouseLeave = () => {
        setStyle({
            transform: 'perspective(900px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
            transition: 'transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)',
        });
    };

    return (
        <div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ ...style, transformStyle: 'preserve-3d', willChange: 'transform' }}
            className={className}
        >
            {children}
        </div>
    );
};

export default TiltCard;
