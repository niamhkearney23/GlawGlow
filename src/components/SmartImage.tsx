"use client";

import { useEffect, useRef, useState } from "react";

type SmartImageProps = {
  src: string;
  label: string; // shown in the placeholder until a real photo exists
  alt?: string;
  /** classes for the outer frame (size, position, rounding, etc.) */
  className?: string;
  /** classes for the <img> itself (e.g. ken-burns animation) */
  imgClassName?: string;
};

/**
 * Renders a local image from /public/images. If the file isn't there yet,
 * it falls back to an intentional cocoa→bronze gradient placeholder with a
 * cream uppercase label — never a broken-image icon, never external stock.
 *
 * The frame's position/size comes entirely from `className`, so callers can
 * make it absolute-fill (hero) or a sized block (gallery tile) without the
 * component fighting their layout.
 */
export default function SmartImage({
  src,
  label,
  alt = "",
  className = "",
  imgClassName = "",
}: SmartImageProps) {
  const [failed, setFailed] = useState(false);
  const ref = useRef<HTMLImageElement>(null);

  // If the image already failed to load before hydration attached the onError
  // handler, the error event was missed — catch that case here on mount.
  useEffect(() => {
    const img = ref.current;
    if (img && img.complete && img.naturalWidth === 0) {
      setFailed(true);
    }
  }, []);

  return (
    <div className={`overflow-hidden ${className}`}>
      {!failed ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          ref={ref}
          src={src}
          alt={alt}
          onError={() => setFailed(true)}
          onLoad={(e) => {
            if (e.currentTarget.naturalWidth === 0) setFailed(true);
          }}
          className={`h-full w-full object-cover ${imgClassName}`}
        />
      ) : (
        <div className="img-placeholder h-full w-full">
          <span>{label}</span>
        </div>
      )}
    </div>
  );
}
