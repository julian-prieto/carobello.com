export default function Button({ className, children, ...props }) {
  return (
    <button
      {...props}
      className={`button p-4 border-2 font-normal text-xs ${
        props.disabled
          ? "bg-gray-300 text-black border-gray-300"
          : "bg-black text-white border-black hover:bg-white hover:text-black"
      } ${className}`}
    >
      {children}
    </button>
  );
}
