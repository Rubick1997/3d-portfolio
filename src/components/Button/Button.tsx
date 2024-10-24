function Button({ name, isBeam = false, containerClassName }: Props) {
  return (
    <button className={`btn ${containerClassName}`}>
      {isBeam && (
        <span className="relative flex h-3 w-3">
          <span className="btn-ping" />
          <span className="btn-ping_dot" />
        </span>
      )}
      {name}
    </button>
  );
}

export default Button;

type Props = {
  name: string;
  containerClassName: string;
  isBeam: boolean;
};
