export type CalendarEntryType =
    | "TRAVEL" //
    | "HOLIDAYS"
    | "OPENINGS"
    | "RESOURCE_ACTIVITY";

export const ProjectType = {
    OPENING: "OPENING_PROJECT",
    NON_OPENING: "NON_OPENING_PROJECT",
    NOT_PROJECT_RELATED: "NOT_PROJECT_RELATED",
} as const;

// eslint-disable-next-line @typescript-eslint/no-redeclare
export type ProjectType = (typeof ProjectType)[keyof typeof ProjectType];

