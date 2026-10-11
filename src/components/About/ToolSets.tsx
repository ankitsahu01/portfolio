import postmanImg from "../../assets/skillsets/postman.svg";
import gitlabImg from "../../assets/skillsets/gitlab.svg";
import jiraImg from "../../assets/skillsets/jira.svg";
import slackImg from "../../assets/skillsets/slack.svg";
import teamsImg from "../../assets/skillsets/microsoft-teams.svg";
import n8nImg from "../../assets/skillsets/n8n.svg";
import antigravityImg from "../../assets/skillsets/antigravity.svg";
import claudeImg from "../../assets/skillsets/claude.svg";

const ToolSets = () => {
  return (
    <div className="my-20">
      <h2 className="text-4xl md:text-5xl text-center font-bold mb-10">
        <span className="highlight">Tools</span> I use
      </h2>
      <div className="px-2 md:px-8 grid grid-cols-2 md:grid-cols-4 gap-16 justify-items-center items-center">
        <img src={n8nImg.src} width={70} className="iconCard" title="N8N" />
        <img src={antigravityImg.src} width={50} className="iconCard" title="Antigravity" />
        <img src={claudeImg.src} width={50} className="iconCard" title="Claude AI" />
        <img src={gitlabImg.src} width={50} className="iconCard" title="GitLab" />
        <img src={postmanImg.src} width={60} className="iconCard" title="Postman" />
        <img src={jiraImg.src} width={50} className="iconCard" title="Jira" />
        <img src={slackImg.src} width={50} className="iconCard" title="Slack" />
        <img
          src={teamsImg.src}
          width={50}
          className="iconCard"
          title="Microsoft Teams"
        />
      </div>
    </div>
  );
};

export default ToolSets;
