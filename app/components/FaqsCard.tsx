'use client';

import { useRef, useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "./Icons";

interface FAQItem {
  q: string;
  a: string;
}

interface Props {
  idx: number;
  item: FAQItem;
}

export default function FaqsCard({ item }: Props) {
  const answerElRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const [answerH, setAnswerH] = useState("0px");

  const handleOpenAnswer = () => {
    if (answerElRef.current) {
      const height = answerElRef.current.scrollHeight;
      setAnswerH(`${height}px`);
      setOpen(!open);
    }
  };

  return (
    <div className="space-y-3 mt-5 overflow-hidden border-b">
      <h4
        className="cursor-pointer pb-5 flex items-center justify-between text-lg text-gray-700 font-medium"
        onClick={handleOpenAnswer}
      >
        {item.q}

        {open ? (
          <ChevronUpIcon />
        ) : (
          <ChevronDownIcon />
        )}
      </h4>

      <div
        ref={answerElRef}
        className="transition-all duration-300"
        style={{ height: open ? answerH : "0px" }}
      >
        <div>
          <p className="text-gray-500">{item.a}</p>
        </div>
      </div>
    </div>
  );
}
