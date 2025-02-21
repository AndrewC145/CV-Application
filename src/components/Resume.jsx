import PersonalSection from "./PersonalSection";
import EducationSection from "./EducationSection";
import ExperienceSection from "./ExperienceSection";

function Resume({ personalInformation, educationInformation, experienceInformation }) {
  return (
    <div className="w-full p-4">
      <PersonalSection personalInformation={personalInformation} />
      <EducationSection educationInformation={educationInformation} />
      <ExperienceSection experienceInformation={experienceInformation} />
    </div>
  );
}
export default Resume;
