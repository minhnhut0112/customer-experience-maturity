"use client";
import { ShareModal } from "@/app/(maturity)/result/share";
import { Download, ExternalLink, RotateCcw } from "lucide-react";
import { useState } from "react";

export const ButtonAction = ({ url }: { url: string }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onOpen = () => {
    setIsOpen(true);
  };

  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button
        onClick={onOpen}
        className="bg-blue-500 p-2 absolute top-[34%] right-[-29%] origin-bottom -rotate-90 flex text-white items-center justify-center gap-1"
      >
        <ExternalLink className="size-4" /> Chia sẻ
      </button>
      <button className="bg-white p-3 text-black absolute top-[52%] right-[-42px]">
        <Download className="text-blue-500 size-4" />
      </button>
      <button className="bg-white p-3 text-black absolute top-[61%] right-[-42px]">
        <RotateCcw className="text-blue-500 size-4" />
      </button>

      {/* Modal */}
      {isOpen && <ShareModal onClose={onClose} url={url} />}
    </div>
  );
};
