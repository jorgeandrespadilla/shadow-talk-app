import { useState } from "react";

export function useClipboard() {
    const [copied, setCopied] = useState(false);

    const copyToClipboard = (value: string) => {
        navigator.clipboard.writeText(value);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return { copied, copyToClipboard };
}