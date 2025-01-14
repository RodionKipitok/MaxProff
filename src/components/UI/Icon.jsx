const Icon = ({ name, width = 24, height = 24, className = '' }) => {
  return (
    <svg width={width} height={height} className={className}>
      <use href={`/sprite.svg#${name}`}></use>
    </svg>
  );
};

export default Icon;
