// src/components/ui/Loader.tsx
import Lottie from "lottie-react";
import loader from "@/assets/lottifiles/loader.json";

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen">
        <Lottie animationData={loader} loop={true} />;
    </div>
  );
};

export default Loader;
