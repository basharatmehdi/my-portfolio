import {
  IconBxlNodejs,
  IconCode,
  IconCss3,
  IconDart,
  IconDatabase,
  IconExpress,
  IconFlutterFill,
  IconHtml5,
  IconJavascript,
  IconJsonwebtokens,
  IconMobileDevices,
  IconMongodb,
  IconNextjs,
  IconReactjsFill,
  IconRedux,
  IconTailwind,
} from "./icons";

const Skills = () => {
  return (
    <div className="mt-6 py-10 px-4 rounded-md bg-slate-100">
      <h2
        id="skills"
        className="text-4xl md:text-5xl font-bold text-blue-800 w-fit scroll-smooth relative"
      >
        Skills
        <span className="absolute w-3/4 h-1 bg-blue-800 left-0 -bottom-2"></span>
      </h2>
      <div className="mt-6 md:grid grid-cols-3 gap-5">
        <div className="border mb-2 md:mb-auto">
          <div className="px-4 py-6 flex flex-col items-center">
            <IconCode className={"w-[66px] text-cyan-950"} />
            <h4 className="font-black tracking-wider text-blue-800 mb-2">
              Front-End
            </h4>
            <div className="flex flex-wrap gap-2 items-center justify-center">
              <SkillTag
                title={"html"}
                icon={<IconHtml5 className={"w-5 text-[#e34c26]"} />}
                bgcolor={"bg-[#e34c26]/25"}
              />
              <SkillTag
                title={"JavaScript"}
                icon={<IconJavascript className={"w-5 text-[#F0DB4F]"} />}
                bgcolor={"bg-[#F0DB4F]/30"}
              />

              <SkillTag
                title={"reactjs"}
                icon={<IconReactjsFill className={"w-5 text-[#61DBFB]"} />}
                bgcolor={"bg-[#61dbfb]/25"}
              />
              <SkillTag
                title={"redux"}
                icon={<IconRedux className={"w-5 text-[#00a7e5]"} />}
                bgcolor={"bg-[#00a7e5]/25"}
              />
              <SkillTag
                title={"Nextjs"}
                icon={<IconNextjs className={"w-5"} />}
                bgcolor={"bg-[#000]/25"}
              />
              <SkillTag
                title={"css"}
                icon={<IconCss3 className={"w-5 text-[#264de4]"} />}
                bgcolor={"bg-[#264de4]/25"}
              />
              <SkillTag
                title={"tailwind css"}
                icon={<IconTailwind className={"w-5 text-[#38c1b1]"} />}
                bgcolor={"bg-[#38c1b1]/25"}
              />
            </div>
          </div>
        </div>
        <div className="border mb-2 md:mb-auto">
          <div className="px-4 py-6 flex flex-col items-center">
            <IconDatabase className={"w-14 text-cyan-950"} />
            <h4 className="font-black tracking-wider text-blue-800 my-2">
              Back-end
            </h4>
            <div className="flex flex-wrap gap-2 items-center justify-center">
              <SkillTag
                title={"nodejs"}
                icon={<IconBxlNodejs className={"w-5 text-[#3C873A]"} />}
                bgcolor={"bg-[#3c873a]/20"}
              />
              <SkillTag
                title={"expressjs"}
                icon={<IconExpress className={"w-5"} />}
                bgcolor={"bg-[#000]/20"}
              />
              <SkillTag
                title={"mongodb"}
                icon={<IconMongodb className={"w-5 text-[#4DB33D]"} />}
                bgcolor={"bg-[#4db33d]/25"}
              />
              <SkillTag
                title={"jsonwebtokens"}
                icon={<IconJsonwebtokens className={"w-5 text-[#e53cce]"} />}
                bgcolor={"bg-[#e53cc3]/25"}
              />
            </div>
          </div>
        </div>
        <div className="border mb-2 md:mb-auto">
          <div className="px-4 py-6 flex flex-col items-center">
            <IconMobileDevices className={"w-[52px] text-cyan-950"} />
            <h4 className="font-black tracking-wider text-blue-800 my-2">
              Mobile Development
            </h4>
            <div className="flex flex-wrap gap-2 items-center justify-center">
              <SkillTag
                title={"dart"}
                icon={<IconDart className={"w-5 text-[#0075BA]"} />}
                bgcolor={"bg-[#0075ba]/20"}
              />
              <SkillTag
                title={"flutter"}
                icon={<IconFlutterFill className={"w-5 text-blue-500"} />}
                bgcolor={"bg-blue-500/25"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Skills;

const SkillTag = ({ title, icon, bgcolor }) => {
  return (
    <div
      className={`${bgcolor} px-4 py-2 flex items-center shadow-md rounded-md border`}
    >
      {icon}
      <p className="uppercase font-bold ml-1">{title}</p>
    </div>
  );
};
