import { DateTime } from "luxon";

export const formatData = (date: string) => {
  const now = DateTime.local();
  const inputDateUTC = DateTime.fromISO(date, { zone: "utc" });
  const inputDateLocal = inputDateUTC.setZone(DateTime.local().zoneName);

  const diff = now
    .diff(inputDateLocal, ["days", "hours", "minutes", "years"])
    .toObject();

  if (diff.hours! < 1 && diff.days! == 0) {
    return `Há ${diff.minutes}m`;
  } else if (diff.hours! < 24 && diff.days! == 0) {
    return `Há ${diff.hours}h`;
  } else if (diff.days! < 2) {
    return "Ontem";
  } else if (diff.days! < 7 && now.weekNumber === inputDateLocal.weekNumber) {
    return `Há ${diff.days}d`;
  } else {
    return inputDateLocal.toFormat("dd/LL/yyyy");
  }
};
