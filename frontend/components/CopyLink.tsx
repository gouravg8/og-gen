"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

const CopyLink = () => {
  const pathname = useRouter();
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    const link = `${window.location}`;
    navigator.clipboard.writeText(link).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    });
  };

  return (
    <>
      <button
        onClick={copyToClipboard}
        className="text-sm w-fit border px-3 py-1 border-gray-700 rounded-md"
      >
        Copy Link
      </button>
      {copied && (
        <span className="text-sm px-2 py-1 text-green-600">Link copied!</span>
      )}
    </>
  );
};

export default CopyLink;
