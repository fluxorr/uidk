import { useState } from "react";

const Projects = () => {

    const projects: { name: string; year: number }[] = [
        { name: "DoThings", year: 2024 },
        { name: "Better Off", year: 2024 },
        { name: "Dogelon Mars", year: 2024 },
        { name: "Ross Mason®", year: 2024 },
        { name: "Casa di Solare", year: 2024 },
        { name: "53West53", year: 2024 },
        { name: "Five Pathways", year: 2023 },
        { name: "Energy Park", year: 2023 },
        { name: "Portal", year: 2023 },
        { name: "Vucko™", year: 2023 },
        { name: "Find Work Happiness", year: 2023 },
        { name: "David Lubofsky", year: 2023 },
        { name: "Outpost", year: 2022 },
        { name: "David Kirschberg", year: 2022 },
        { name: "Letter", year: 2022 },
        { name: "Nathan Riley", year: 2022 },
        { name: "Ivan Toma", year: 2021 },
        { name: "Chris Wilcock", year: 2021 }
    ];


    const [hoveredProject, setHoveredProject] = useState<string | null>(null);

    return (
        <div className="pt-72">
            {projects.map((project) => (
                <div
                    key={project.name}
                    className="flex items-baseline space-x-2"
                    onMouseEnter={() => setHoveredProject(project.name)}
                    onMouseLeave={() => setHoveredProject(null)}
                >
                    <div className="text-[72px] cursor-pointer font-sans w-fit font-medium leading-[1.1] tracking-[-0.02em] hover:underline">
                        {project.name}
                    </div>
                    {hoveredProject === project.name ? (
                        <span className="text-[22.8px] font-medium relative top-[-18px] ">
                            ({project.year})
                        </span>
                    ) : null}
                </div>
            ))}
        </div>
    );

}

export default Projects;