import network from "../assets/network.png";


export const Header = () => {

    return (
        <header className="flex">
            <img src={network} alt="logo"  className="size-20"/>
        </header>
    )
}