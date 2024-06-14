export const praiseData: string[] = [
  "Adventurous",
  "Clean",
  "Good Listener",
  "Honest",
  "Humorous",
  "Inspiring",
  "Kind",
  "Knowledgable",
  "Talkative",
  "Thoughtful",
  "Trustworthy",
];

export interface Praise {
  adventurous: boolean;
  clean: boolean;
  good_listener: boolean;
  honest: boolean;
  humorous: boolean;
  inspiring: boolean;
  kind: boolean;
  knowledgable: boolean;
  talkative: boolean;
  thoughtful: boolean;
  trustworthy: boolean;
}

export interface State {
  safety: number | null;
  communication: number | null;
  isRecommended: boolean | null;
  praise: Praise;
  experience?: string | null;
}

export const initialState: State = {
  safety: null,
  communication: null,
  isRecommended: null,
  praise: {
    adventurous: false,
    clean: false,
    good_listener: false,
    honest: false,
    humorous: false,
    inspiring: false,
    kind: false,
    knowledgable: false,
    talkative: false,
    thoughtful: false,
    trustworthy: false,
  },
  experience: null,
};
