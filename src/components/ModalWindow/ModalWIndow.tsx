export const ModalWindow = ({ closeFunc, child }) => {
  return (
    <div
      className="absolute w-full h-full top-0 left-0 bg-white/50 select-none z-10"
      onClick={() => closeFunc(false)}
    >
      {child}
    </div>
  );
};
