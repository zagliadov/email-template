import { CalendarEntryType, ProjectType } from "./types/index";
import { InfoBlock } from "./components/InfoBlock";
import { Header } from "./components/Header";
import { Avatar } from "./components/Avatar";
import { Score } from "./components/Score";
import { ScoreWrapper } from "./components/ScoreWrapper";
import { DetailOnTheAboveScore } from "./components/DetailOnTheAboveScore";
import { FileUploaded } from "./components/FileUploaded";

const data: any = {
  emailAddress: "daniil.zahliadov@gmail.com",
  SendMeACopyOfMyResponses: true,
  SystemsOperational: "Y",
  OverallSatisfactionMoreDetail: "OverallSatisfactionMoreDetail",
  OverallSatisfactionScore: 3,
  TechTeamResolutionScore: 2,
  // TechTeamResolutionHigherScore: "TechTeamResolutionHigherScore",
  TechTeamResolutionLowScore: "TechTeamResolutionLowScore",
  TechTeamSatisfactionScore: 3,
  // TechTeamSatisfactionLowScore: "TechTeamSatisfactionLowScore",
  // TechTeamSatisfactionHigherScore: "TechTeamSatisfactionHigherScore",
  PMResolutionScore: 1,
  // ResolutionLowScore: "ResolutionLowScore",
  // ResolutionHigherScore: "ResolutionHigherScore",
  PMDeliveryScore: 4,
  DeliveryHigherScore: "DeliveryHigherScore",
  // DeliveryLowScore:
  //   "Please accept our gratitude for taking the time to complete this survey. Your feedback and insights are incredibly",
  PMObjectivesScore: 2,
  PMSatisfactionScore: 5,
  ObjectivesLowScore:
    "On a scale of 1-5 were the IT project goals and objectives clearly defined and communicated to all stakeholders involved in the pre-opening phase of your hotel?",
  // SatisfactionLowScore:
  //   "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  SatisfactionHigherScore:
    "Your feedback and insights are incredibly valuable to us, and we appreciate your willingness to share your thoughts.",
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
          <ScoreWrapper title={"IT Openings Project Director"}>
            <Score
              scoreName={"PM Satisfaction Score"}
              scoreNumber={data.PMSatisfactionScore}
              message={
                data.SatisfactionLowScore || data.SatisfactionHigherScore
              }
            />
            <Score
              scoreName={"PM Objectives Score"}
              scoreNumber={data.PMObjectivesScore}
              message={data.ObjectivesLowScore || data.ObjectivesHigherScore}
            />
            <Score
              scoreName={"PM Delivery Score"}
              scoreNumber={data.PMDeliveryScore}
              message={data.DeliveryLowScore || data.DeliveryHigherScore}
            />
            <Score
              scoreName={"PM Resolution Score"}
              scoreNumber={data.PMResolutionScore}
              message={data.ResolutionLowScore || data.ResolutionHigherScore}
            />
          </ScoreWrapper>
          {/* IT Opening Technical Team */}
          <ScoreWrapper title={"IT Opening Technical Team"}>
            <Score
              scoreName={"Tech team Satisfaction Score"}
              scoreNumber={data.TechTeamSatisfactionScore}
              message={
                data.TechTeamSatisfactionLowScore ||
                data.TechTeamSatisfactionHigherScore
              }
            />
            <Score
              scoreName={"Tech team Resolution Score"}
              scoreNumber={data.TechTeamResolutionScore}
              message={
                data.TechTeamResolutionLowScore ||
                data.TechTeamResolutionHigherScore
              }
            />
          </ScoreWrapper>
          {/* IT Project Management */}
          <ScoreWrapper title={"IT Project Management"}>
            <Score
              scoreName={"Overall Satisfaction"}
              scoreNumber={data.OverallSatisfactionScore}
              message={data.OverallSatisfactionMoreDetail}
            />
          </ScoreWrapper>
          {data?.OverallSatisfactionMoreDetail && (
            <DetailOnTheAboveScore
              title={"Detail on the above score"}
              message={data?.OverallSatisfactionMoreDetail}
            />
          )}
          <FileUploaded />
        </div>
      </div>
    </div>
  );
}
export default App;
