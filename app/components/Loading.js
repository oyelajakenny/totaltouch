"use client";
import { Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const Loading = () => {
  return (
    <div className="fixed min-h-screen w-full bg-white left-0 top-0 flex items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-1">
        <Image src="/Logo.png" alt="Logo" width={200} height={200} />

        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="flex items-center space-x-2 text-green-800"
        >
          <Loader2 />
          <span className="font-semibold tracking-wide">UpSkill Pro</span>
        </motion.div>
      </div>
    </div>
  );
};

export default Loading;
