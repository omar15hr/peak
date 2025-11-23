import { CloseIcon, CheckIcon } from "./Icons";

export function DiagnosisItem({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-4 bg-white p-4 rounded-xl shadow-sm">
      <div className="shrink-0 mt-0.5 w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-500">
        <CloseIcon />
      </div>
      <p className="text-gray-600 text-sm sm:text-base pt-1">{text}</p>
    </div>
  );
}

export function SolutionItem({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-4 bg-white p-4 rounded-xl shadow-sm">
      <div className="shrink-0 mt-0.5 w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-[#00c48c]">
        <CheckIcon />
      </div>
      <p className="text-gray-600 text-sm sm:text-base pt-1">{text}</p>
    </div>
  );
}
