import React from "react";

import EventLeadTemplate from "@/components/EventLeadTemplate";

type TeamMember = {
  name: string;
  instagram: string;
  facebook: string;
  linkedin: string;
  image: string;
};

const teamLead: TeamMember[] = [
  {
    name: "Gaurav Das",
    image: "gourav.png",
    linkedin: "https://www.linkedin.com/in/gourav-das-103a6424a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    instagram:
      "https://www.instagram.com/stretched_stringup?igsh=enZlNDUzaTNtZnlk",
    facebook: "https://www.facebook.com/share/18sDmRmvzY/",
  },
  {
    name: "Prattay Barua",
    image: "pratty.png",
    linkedin:
      "https://in.linkedin.com/in/prattay-barua-240081302",
    instagram:
      "https://www.instagram.com/pratt.exe?igsh=MTBsZm0wbXV4bjF1aQ==",
    facebook: "",
  },
];

const EventLead = () => {
  return (
    <div id="team" className="relative  py-12">
      <div
        className="absolute top-0 left-0 w-full h-full -z-30 bg-gradient-to-t from-[#981B0B]     
      to-[#D33D18]"
      ></div>
      {/* <Image
        src={flakebg}
        className=" h-auto hidden sm:block w-full  absolute opacity-40   bottom-0 right-0 -z-10"
        alt="trees"
      />
      <Image
        src={flakebgMobile}
        className=" sm:hidden block h-auto w-full  absolute opacity-60   bottom-0 right-0 -z-10"
        alt="trees"
      /> */}
      <div className="maxWidthForSections">
        <h2 className="text-3xl sm:text-5xl font-medium text-white text-shadow-dark text-center ">
          Event Leads
        </h2>
        <p className="opacity-80 text-center text-white text-shadow-dark mt-2 text-base sm:text-lg font-medium">Meet the event leads of Decisia! We are ready to address all your queries.</p>

        {/* ---------------------------For Mobile---------------------------- */}
        {/* <div className="mt-8 sm:hidden flex flex-wrap justify-center sm:gap-6 sm:gap-y-8 gap-y-4 gap-2">
          {teamLead.map((member) => (
            <div className="" key={member.name}>
              <div className="backdrop-blur-sm sm:h-[280px] w-[43vw] px-2 py-8 flex-col  flex justify-center items-center bg-white/20  rounded-xl shadow-black/20 shadow-md font-sans ">
                <div className="flex justify-center ">
                  <Image
                    src={`/peoplePics/` + member.image}
                    alt={member.name}
                    width={96}
                    height={96}
                    className="size-24 rounded-full object-cover "
                  />
                </div>
                <div className=" flex flex-col items-center">
                  <h2 className="  text-sm mt-2 font-semibold">
                    {member.name}
                  </h2>
                  <div className="card-actions flex gap-2 justify-evenly mt-2">
                    {member.instagram && <a
                      href={member.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className=""
                    >
                      <FaInstagram className="size-6 opacity-80"></FaInstagram>
                    </a>}
                    {member.facebook &&<a
                      href={member.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className=""
                    >
                      <FaFacebookSquare className="size-6 opacity-80" />
                    </a>}
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className=""
                    >
                      <FaLinkedin className="size-6 opacity-80" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div> */}

        {/* ---------------------this for bigger screens --------------- */}
        {/* <div className="mt-8 hidden sm:flex flex-wrap justify-center sm:gap-6 sm:gap-y-8 gap-y-4 gap-2 font-sans">
          {teamLead.map((member) => (
            <div className="" key={member.name}>
              <div className="sm:block hidden relative w-[220px] h-[250px] bg-white/25   rounded-xl shadow-black/20 shadow-md backdrop-blur-md overflow-hidden teamCard">
                <div className=" px-4 py-6 flex-col flex justify-center items-center absolute top-0 right-0 left-0   cardContent">
                  <div className="flex justify-center">
                    <Image
                      src={`/peoplePics/` + member.image}
                      alt={member.name}
                      width={112}
                      height={112}
                      className="size-28 rounded-full object-cover "
                    />
                  </div>
                  <div className=" flex flex-col items-center">
                    <h2 className="  mt-2 font-semibold">
                      {member.name}
                    </h2>
                    <ul className="sci card-actions flex gap-2 justify-evenly mt-4">
                      <li
                        className=""
                        style={{ "--i": 1 } as React.CSSProperties}
                      >
                        {member.instagram &&<a
                          href={member.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaInstagram className="size-6 opacity-80" />
                        </a>}
                      </li>
                      <li
                        className=""
                        style={{ "--i": 2 } as React.CSSProperties}
                      >
                        {member.facebook &&<a
                          href={member.facebook}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaFacebookSquare className="size-6 opacity-80" />
                        </a>}
                      </li>
                      <li
                        className=""
                        style={{ "--i": 3 } as React.CSSProperties}
                      >
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaLinkedin className="size-6 opacity-80" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div> */}

<EventLeadTemplate teamLead={teamLead} textColor='text-white'></EventLeadTemplate>
      </div>
    </div>
  );
};

export default EventLead;
