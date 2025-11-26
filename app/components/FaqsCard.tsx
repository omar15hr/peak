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
    <div className="space-y-3 overflow-hidden">
      <h4
        className="cursor-pointer pb-6 flex items-center justify-between text-2xl text-[#191715] font-bold border-b border-[#D9D9D9] pt-10"
        onClick={handleOpenAnswer}
      >
        {item.q}

        {open ? (
          <span className="bg-[#F9F8F6] p-2 rounded-full"><ChevronUpIcon /></span>
        ) : (
          <span className="bg-[#F9F8F6] p-2 rounded-full"><ChevronDownIcon /></span>
        )}
      </h4>

      <div
        ref={answerElRef}
        className="transition-all duration-300"
        style={{ height: open ? answerH : "0px" }}
      >
        <div>
          <p className="text-[#666464]">{item.a}</p>
        </div>
      </div>
    </div>
  );
}
