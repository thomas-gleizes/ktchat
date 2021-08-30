import { useRef } from "react";

const useScrollBottom = () => {
  const ref = useRef();
  const scrollBottom = () => ref.current.scrollIntoView({ behavior: "smooth" });

  return [ref, scrollBottom];
};

export default useScrollBottom;
