export default function Button({ className, type, children, ...props }) {
  return (
    <button
      {...props}
      className={`button p-4 border-2 font-normal text-xs focus:outline-none ${
        props.disabled
          ? "bg-gray-300 text-black border-gray-300 cursor-default opacity-80"
          : type === "secondary"
          ? "bg-white text-black border-black hover:bg-black hover:text-white"
          : "bg-black text-white border-black hover:bg-white hover:text-black"
      } ${className}`}
    >
      {children}
    </button>
  );
}
