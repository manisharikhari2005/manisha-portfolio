
import { Code2 } from "lucide-react";

const SkillCard = ({ name, icon: Icon, color }) => {
  const SkillIcon = Icon || Code2;

  return (
    <div
      className="
        group
        flex items-center gap-2.5
        rounded-xl
        border border-[var(--border)]
        bg-[var(--card)]/70
        px-3 py-2.5
        transition-all duration-300
        hover:-translate-y-1
        hover:border-[var(--primary-light)]
        hover:bg-[var(--card)]
        hover:shadow-sm
        sm:gap-3 sm:px-4 sm:py-3
      "
    >
      <SkillIcon
        size={20}
        style={{ color }}
        className="shrink-0 transition-transform duration-300 group-hover:scale-110 sm:h-[23px] sm:w-[23px]"
      />

      <span className="whitespace-nowrap text-xs font-medium text-[var(--text-secondary)] sm:text-sm">
        {name}
      </span>
    </div>
  );
};

export default SkillCard;
