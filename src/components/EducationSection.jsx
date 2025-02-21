function EducationSection({ educationInformation }) {
  return (
    <div>
      <div className="mb-2 border-b-2 border-gray-700">
        <h1 className="font-serif text-2xl font-bold">Education</h1>
      </div>
      {educationInformation.map((education) => (
        <div key={education.id} className="flex justify-between gap-2 pb-3">
          <div className="flex flex-col justify-start font-serif">
            <h2 className="text-xl font-semibold">{education.school}</h2>
            <h3 className="text-lg font-medium">{education.degree}</h3>
          </div>
          <div className="flex flex-col justify-end text-right font-sans">
            <p>
              {education.startDate} - {education.endDate}
            </p>
            <p>{education.location}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default EducationSection;
