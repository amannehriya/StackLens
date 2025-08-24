import { useState, useEffect } from "react";

export default function useBufferImage(
  logo
) {
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    if (!logo) return;

    const uint8Array = new Uint8Array(logo.data.data);

    // Convert Uint8Array → binary string
    let binary = "";
    uint8Array.forEach((byte) => {
      binary += String.fromCharCode(byte);
    });

    // Encode → base64
    const base64String = window.btoa(binary);

    // Create data URL
    setImageUrl(`data:${logo.contentType};base64,${base64String}`);
  }, [logo]);

  return imageUrl;
}
