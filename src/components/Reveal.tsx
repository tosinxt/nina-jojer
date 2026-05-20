'use client';

import { CSSProperties, ElementType, ReactNode } from 'react';
import { useReveal } from '@/hooks/useReveal';

interface RevealProps {
  children: ReactNode;
  as?: ElementType;
  delay?: number;      // ms
  threshold?: number;
  className?: string;
  style?: CSSProperties;
}

export default function Reveal({
  children,
  as: Tag = 'div',
  delay = 0,
  threshold = 0.12,
  className,
  style,
}: RevealProps) {
  const { ref, visible } = useReveal(threshold);

  return (
    <Tag
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ref={ref as any}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        filter: visible ? 'blur(0px)' : 'blur(8px)',
        transform: visible ? 'translateY(0)' : 'translateY(18px)',
        transition: `opacity 0.75s ease ${delay}ms, filter 0.75s ease ${delay}ms, transform 0.75s ease ${delay}ms`,
        willChange: 'opacity, filter, transform',
        ...style,
      }}
    >
      {children}
    </Tag>
  );
}
