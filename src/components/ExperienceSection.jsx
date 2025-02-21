function ExperienceSection({ experienceInformation }) {
  return (
    <div>
      <div className="mb-2 border-b-2 border-gray-700">
        <h1 className="font-serif text-2xl font-bold">Experience</h1>
      </div>
      {/* Maps through the experienceInformation array and displays the company name, position, description, start date, end date, and location */}
      {experienceInformation.map((experience) => (
        <div key={experience.id} className="flex justify-between gap-2 pb-3">
          <div className="flex flex-col justify-start font-serif">
            <h2 className="text-xl font-semibold">{experience.companyName}</h2>
            <h3 className="text-lg font-medium">{experience.position}</h3>
            <p>{experience.description}</p>
          </div>
          <div className="flex flex-col justify-end self-start text-right font-sans">
            <p>
              {experience.startDate} - {experience.endDate}
            </p>
            <p>{experience.location}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ExperienceSection;
