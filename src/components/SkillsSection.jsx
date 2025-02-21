function SkillsSection({ skillsInformation }) {
  return (
    <div>
      <div className="mb-2 border-b-2 border-gray-700">
        <h1 className="font-serif text-2xl font-bold">Technical Skills</h1>
      </div>
      <p>{skillsInformation}</p>
    </div>
  );
}

export default SkillsSection;
