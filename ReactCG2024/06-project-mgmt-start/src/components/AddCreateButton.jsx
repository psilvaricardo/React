const AddCreateButton = ({ children, ...props }) => {
    const css_classes =
        "px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100";

    return (
        <button className={css_classes} {...props}>
            {children}
        </button>
    );
};

export default AddCreateButton;
