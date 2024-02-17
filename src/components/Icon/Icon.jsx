"use client"

import { icons } from 'lucide-react';

function Icon({ name, color, size, className }) {
    const LucideIcon = icons[name] || name;

    return <span className={className}><LucideIcon color={color} size={size} absoluteStrokeWidth /></span>;
};

export default Icon;