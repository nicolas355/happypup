import React from 'react';

interface TagProps {
  label: string; // Prop para el texto del tag
}

const Tag: React.FC<TagProps> = ({ label }) => {
  return (
    <div className="flex items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-tag"
        width="30"
        height="30"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="#597e8d"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M7.5 7.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
        <path d="M3 6v5.172a2 2 0 0 0 .586 1.414l7.71 7.71a2.41 2.41 0 0 0 3.408 0l5.592 -5.592a2.41 2.41 0 0 0 0 -3.408l-7.71 -7.71a2 2 0 0 0 -1.414 -.586h-5.172a3 3 0 0 0 -3 3z" />
      </svg>
      <span className="ml-2">{label}</span> {/* Muestra el label junto al icono */}
    </div>
  );
};

export default Tag;