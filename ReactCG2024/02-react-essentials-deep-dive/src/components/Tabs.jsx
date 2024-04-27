const Tabs = ({ children, buttons, DynamicComponentType = 'menu' }) => {
    return (
    <>
        <DynamicComponentType>
            {buttons}
        </DynamicComponentType>
        {children}
    </>
    );
}

export default Tabs;
