import emailIcon from "../svg/email.svg";
import locationIcon from "../svg/location.svg";

function PersonalSection({ personalInformation }) {
  return (
    <div className="mx-auto flex w-full flex-col items-center gap-2 p-4">
      <h1 className="font-serif text-3xl font-bold md:text-4xl lg:text-5xl">
        {personalInformation.name}
      </h1>
      <div className="flex flex-wrap items-center justify-center gap-3 text-sm md:text-base lg:text-lg">
        <p>{personalInformation.phone}</p>
        <p className="flex items-center gap-2">
          <img className="size-5" src={emailIcon}></img>
          {personalInformation.email}
        </p>
        <p className="flex items-center gap-2">
          <img className="size-5" src={locationIcon}></img>
          {personalInformation.location}
        </p>
      </div>
    </div>
  );
}

export default PersonalSection;
