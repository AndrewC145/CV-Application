import PersonalSection from "./PersonalSection";
import EducationSection from "./EducationSection";
import ExperienceSection from "./ExperienceSection";
import SkillsSection from "./SkillsSection";

function Resume({
  personalInformation,
  educationInformation,
  experienceInformation,
  skillsInformation,
}) {
  return (
    <div className="w-full p-4">
      <PersonalSection personalInformation={personalInformation} />
      <EducationSection educationInformation={educationInformation} />
      <ExperienceSection experienceInformation={experienceInformation} />
      <SkillsSection skillsInformation={skillsInformation} />
    </div>
  );
}
export default Resume;
