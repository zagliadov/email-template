import { CalendarEntryType, ProjectType } from "./types/index";
import { InfoBlock } from "./components/InfoBlock";
import { Header } from "./components/Header";
import { Avatar } from "./components/Avatar";
import { Score } from "./components/Score";

const data = {
  emailAddress: "daniil.zahliadov@gmail.com",
  SendMeACopyOfMyResponses: true,
  SystemsOperational: "Y",
  OverallSatisfactionMoreDetail: "",
  OverallSatisfactionScore: 3,
  TechTeamResolutionScore: 3,
  TechTeamSatisfactionScore: 3,
  PMResolutionScore: 3,
  PMDeliveryScore: 3,
  PMObjectivesScore: 3,
  PMSatisfactionScore: 3,
  SatisfactionLowScore:
    "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  OpeningDate: new Date("2023-10-24T00:00:00.000Z"),
  MARSHACode: "DDE34",
  Email: "daniil.zahliadov@gmail.com",
  Position: "IT Consultant",
  Name: "Daniil Zahliadov",
  attachment1: [
    {
      path: "avatar2.jpeg",
    },
    {
      path: "avatar.jpeg",
    },
  ],
};

type AbstractResource = {
  id: string | number;
  name: string;
  logo: string;
  abbreviation: string;
};

type AbstractProject = {
  id: string | number;
  name: string;
  type: ProjectType;
  marsha?: string;
  gdNumber?: string;
  code?: string;
};

type AbstractLocation = {
  city: string;
  country: string;
};

type AbstractEntry = {
  name: string;
  resources: AbstractResource[];
  openingDate: Date;
  entryType: CalendarEntryType;
  projectType: ProjectType;
  projects: AbstractProject[];
  location: AbstractLocation | null;
  description: string;
  isTentative: boolean;
};

const projectMap = {
  [ProjectType.OPENING]: ["opening", "Opening Project"],
  [ProjectType.NON_OPENING]: ["non-opening", "Non-Opening Project"],
  [ProjectType.NOT_PROJECT_RELATED]: [
    "not-project-related",
    "Not Project Related",
  ],
} satisfies Record<ProjectType, [string, string]>;

function formatDate(date: Date) {
  return `${`0${date.getDate()}`.slice(-2)}.${`0${date.getMonth() + 1}`.slice(
    -2
  )}.${date.getFullYear()}`;
}

function App() {
  return (
    <div
      style={{
        width: 650,
        margin: "0 auto",
        paddingTop: 30,
        backgroundImage:
          "url('https://mt-emea-oasis.apexdigital.online/media/email-dots-left.png')",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          paddingBottom: 30,
          backgroundImage:
            "url('https://mt-emea-oasis.apexdigital.online/media/email-dots-right.png')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "100% 100%",
        }}
      >
        <div
          style={{
            width: 400,
            margin: "0 auto",
          }}
        >
          <Avatar />
          <Header />
          <InfoBlock title="Name" value={data.Name} />
          <InfoBlock title="Position" value={data.Position} />
          <InfoBlock title="MARSHA Code" value={data.MARSHACode} />
          <InfoBlock
            title="Opening Date"
            value={formatDate(data.OpeningDate)}
          />
          <Score
            title={"IT Openings Project Director"}
            scoreName={"PM Satisfaction Score"}
            scoreNumber={data.PMSatisfactionScore}
            lowScore={data.SatisfactionLowScore}
          />
        </div>
      </div>
    </div>
  );
}
export default App;
