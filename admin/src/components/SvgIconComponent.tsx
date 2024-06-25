// SvgIconComponent.tsx
import React from 'react';
import { ReactSVG } from 'react-svg';

const SvgIconComponent: React.FC<{ src: string, width?: number, height?: number }> = ({ src, width, height }) => {
  return (
    <div style={{ width, height }}>
      <ReactSVG src={src} />
    </div>
  );
};

export default SvgIconComponent;
