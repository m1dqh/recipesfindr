import headerLogo from '../../assets/header-logo.png'
import './Header.css'
export default function Header() {
    return (
        <header>
            <nav className="nav">
                <div
                className="nav--logo">
                    <img className="logo" src={headerLogo} />
                    <h3 className="title">RecipesFindr</h3>
                </div>
            </nav>
        </header>
    )
}
