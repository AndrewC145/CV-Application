function EducationSection({ educationInformation }) {
  return (
    <div>
      <div className="mb-2 border-b-2 border-gray-700">
        <h1 className="font-serif text-xl font-bold sm:text-2xl">Education</h1>
      </div>
      {/* Maps out the educationInformation array and displays the school, degree, start date, end date, and location */}
      {educationInformation.map((education) => (
        <div key={education.id} className="flex justify-between gap-2 pb-3">
          <div className="flex flex-col justify-start font-serif">
            <h2 className="text-lg font-semibold sm:text-xl">{education.school}</h2>
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
