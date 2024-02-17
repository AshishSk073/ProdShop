"use client"

export function formatAsCurrency(value) {
    const formattedValue = `$${value.toFixed(2)}`;
    return formattedValue;
}
