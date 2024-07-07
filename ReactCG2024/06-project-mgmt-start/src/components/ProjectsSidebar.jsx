import AddCreateButton from "./AddCreateButton";

const ProjectsSidebar = ({
    onStartAddProject,
    projects,
    onSelctProject,
    selecttedProjectId,
}) => {
    return (
        <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
            <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
                Your Projects
            </h2>
            <div>
                <AddCreateButton onClick={() => onStartAddProject()}>
                    + Add Project
                </AddCreateButton>
            </div>
            <ul className="mt-8">
                {projects.map((project) => {
                    let CSS_classes =
                        "w-full text-left px-2 py-1 rounded-sm my-1 text-stone-400 hover:text-stone-200 hover:bg-stone-800";

                    if (project.id === selecttedProjectId) {
                        CSS_classes += " bg-stone-800 text-stone-200";
                    } else {
                        CSS_classes += " text-stone-400";
                    }

                    return (
                        <li key={project.id}>
                            <button
                                className={CSS_classes}
                                onClick={() => onSelctProject(project.id)}
                            >
                                {project.title}
                            </button>
                        </li>
                    );
                })}
            </ul>
        </aside>
    );
};

export default ProjectsSidebar;
