const Tabs = ({ children, buttons, dynamicComponent }) => {
    // Creating a constant that must start with capital letter
    // that can be used as a custom component to set component type dynamically
    const DynamicComponentType = dynamicComponent;

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
