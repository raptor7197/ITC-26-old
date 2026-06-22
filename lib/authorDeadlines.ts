/** End of calendar day in local time for dates shown on author pages. */
function endOfDay(year: number, month: number, day: number): Date {
  return new Date(year, month - 1, day, 23, 59, 59, 999);
}

export const authorDeadlines = {
  cfpPaper: endOfDay(2026, 3, 31),
  cftTutorial: endOfDay(2026, 4, 15),
  posters: endOfDay(2026, 4, 15),
  workshopProposal: endOfDay(2026, 5, 31),
  fellowshipApplication: endOfDay(2026, 7, 2),
  hackathonRound1: endOfDay(2026, 5, 31),
} as const;

export function isPastDeadline(deadline: Date): boolean {
  return Date.now() > deadline.getTime();
}

export function formatDeadlineDate(deadline: Date): string {
  return deadline.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function closedDeadlineTooltip(deadline: Date): string {
  return `The submission deadline has passed (${formatDeadlineDate(deadline)}).`;
}
