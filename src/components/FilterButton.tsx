'use client';

import { forwardRef } from 'react';

interface Props {
  onClick?: () => void;
  'aria-label'?: string;
  active?: boolean;
}

const FilterButton = forwardRef<HTMLButtonElement, Props>(
  ({ onClick, 'aria-label': ariaLabel = 'Filter', active = false }, ref) => (
    <button
      ref={ref}
      onClick={onClick}
      aria-label={ariaLabel}
      aria-pressed={active}
      style={{
        background: active ? '#1e1e1e' : 'none',
        border: 'none',
        padding: 0,
        cursor: 'pointer',
        display: 'flex',
        flexShrink: 0,
        borderRadius: '50%',
        transition: 'background 0.2s cubic-bezier(0.4,0,0.2,1)',
      }}
    >
      <svg width="45" height="44" viewBox="0 0 45 44" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect width="45" height="44" rx="22" fill={active ? '#1e1e1e' : 'white'} style={{ transition: 'fill 0.2s cubic-bezier(0.4,0,0.2,1)' }} />
        <path
          d="M29.5807 15.625H15.4141L21.0807 22.3258V26.9583L23.9141 28.375V22.3258L29.5807 15.625Z"
          stroke={active ? '#fff' : '#1E1E1E'}
          strokeWidth="1.41667"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ transition: 'stroke 0.2s cubic-bezier(0.4,0,0.2,1)' }}
        />
      </svg>
    </button>
  )
);

FilterButton.displayName = 'FilterButton';

export default FilterButton;
