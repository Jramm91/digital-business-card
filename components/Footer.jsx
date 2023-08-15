import dgLogoSm from '../src/assets/dg-log-sm.png'

export default function Footer() {
    return (
        <footer>
            <div className="links-container">
                <a href='https://www.linkedin.com/in/jrammelsberg/'>
                    <ion-icon name="logo-linkedin"></ion-icon>
                </a>
                <a href='https://www.instagram.com/jramm_drums/'>
                    <ion-icon name="logo-instagram"></ion-icon>
                </a>
                <a href='https://www.instagram.com/doadoublegood/?hl=en'>
                    <img src={dgLogoSm} />
                </a>
            </div>
        </footer>
    )
}