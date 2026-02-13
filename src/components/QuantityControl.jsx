import { Minus, Plus } from "lucide-react";

export default function QuantityControl({
  quantity = 1,
  onIncrease,
  onDecrease,
  size = "md"
}) {
  const sizes = {
    sm: "h-7 w-7 text-xs",
    md: "h-9 w-9 text-sm",
    lg: "h-11 w-11 text-base"
  };

  return (
    <div className="flex items-center gap-2">
      {/* Bouton - */}
      <button
        onClick={onDecrease}
        disabled={quantity <= 1}
        className={`
          flex items-center justify-center rounded-md border
          ${sizes[size]}
          ${
            quantity <= 1
              ? "opacity-40 cursor-not-allowed"
              : "hover:bg-gray-100"
          }
        `}
      >
        <Minus size={14} />
      </button>

      {/* Quantité */}
      <span className="min-w-[24px] text-center font-medium">
        {quantity}
      </span>

      {/* Bouton + */}
      <button
        onClick={onIncrease}
        className={`
          flex items-center justify-center rounded-md border
          ${sizes[size]}
          hover:bg-gray-100
        `}
      >
        <Plus size={14} />
      </button>
    </div>
  );
}
