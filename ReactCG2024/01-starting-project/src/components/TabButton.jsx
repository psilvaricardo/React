
export default function TabButton({children}) {

    function onClickHandler(){
        console.log('click..!!');
    }

    return (
    <li>
        <button onClick={onClickHandler}>{children}</button>
    </li>
    );
}