import { Loader } from "lucide-react";

const Loading = () => {
  return (
    <section className="bg-white min-h-screen flex items-center justify-center">
      <Loader className="animate-spin-slow" />
    </section>
  );
};

export default Loading;
