import clsx from "clsx";
import Image from "next/image";

type StatCardProps = {
  type: "new-user" | "subs-user" | "cancelled-user";
  count: number;
  label: string;
  icon: string;
};

export const StatCard = ({ count = 0, label, icon, type }: StatCardProps) => {
  return (
    <div
      className={clsx("stat-card", {
        "bg-appointments": type === "new-user",
        "bg-pending": type === "subs-user",
        "bg-cancelled": type === "cancelled-user",
      })}
    >
      <div className="flex items-center gap-4">
        <Image
          src={icon}
          height={32}
          width={32}
          alt="new-user"
          className="size-8 w-fit"
        />
        <h2 className="text-32-bold text-white">{count}</h2>
      </div>

      <p className="text-14-regular">{label}</p>
    </div>
  );
};
