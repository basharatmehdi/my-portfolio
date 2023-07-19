import Link from "next/link";
import Image from "next/image";

const ProjectCard = ({
  title,
  description,
  img,
  stack,
  sourceCodeLink,
  demoLink,
  inProgress,
}) => {
  return (
    <div className="h-[400px] md:h-[350px] rounded-md overflow-hidden bg-slate-100 mb-5 md:mb-auto relative shadow-xl hover:scale-95 transition-all ease-in-out duration-500">
      <Image
        src={img}
        width={150}
        height={150}
        alt={title ? title : "Project Image"}
        className="h-[40%] w-full object-cover"
      />
      <div className="px-3 py-2 flex flex-col h-[60%] justify-between">
        <div className="">
          <h3 className="font-bold text-cyan-950">{title}</h3>
          <p className="text-xs md:text-[11px] lg:text-xs text-gray-600 my-[3px] line-clamp-6 md:line-clamp-4">
            {description}
          </p>
          <div className="flex items-center flex-wrap gap-1">
            <p className="text-sm font-bold text-blue-900">Stack: </p>
            {stack.map((item, index) => (
              <div
                key={index}
                className="px-2 py-[2px] bg-fuchsia-300/30 text-cyan-950 shadow-sm rounded-md text-xs"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center mb-3 gap-4">
          <Link
            href={demoLink}
            className="px-5 py-1 rounded-lg font-bold tracking-wide text-blue-800 bg-blue-500/20 hover:bg-blue-500/30 hover:scale-95 transition-all ease-in-out duration-300"
          >
            Demo
          </Link>
          <Link
            href={sourceCodeLink}
            className="px-5 py-1 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 hover:scale-95 font-bold tracking-wide text-cyan-900 transition-all ease-in-out duration-300"
          >
            Source Code
          </Link>
        </div>
      </div>

      {inProgress && (
        <p className="absolute top-2 left-2 py-1 px-2 bg-teal-100/80 text-emerald-900 rounded-md text-[10px]">
          In Progress
        </p>
      )}
    </div>
  );
};
export default ProjectCard;
