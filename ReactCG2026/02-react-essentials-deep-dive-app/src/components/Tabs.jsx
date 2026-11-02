export const Tabs = ({ children, buttons }) => {
    return (
        <>
            <menu>{buttons}</menu>
            {children}
        </>
    );
};
