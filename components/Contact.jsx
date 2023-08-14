export default function Contact() {
    return (
        <div className="contact">
            <div className="contact--email">
                <ion-icon name="mail-outline" className='contact--icon'></ion-icon>
                <a href="mailto:jordan.rammelsberg@doublegood.com" id="email--text">jordan.rammelsberg@doublegood.com</a>
            </div>
            <div className="contact--phone">
                <ion-icon name="call-outline" className='contact--icon'></ion-icon>
                <a href='tel:+13193890406' id='phone--text'>(319) 389-0406</a>
            </div>
            <div className="contact--address">
                <ion-icon name="map-outline" className='contact--icon'></ion-icon>
                <a href="https://goo.gl/maps/p5ZEqFhYnMqnNz6j7" id='address--text'>
                    16W030 83rd Street<br />
                    Burr Ridge, IL 60527
                </a>
            </div>
        </div>
    )
}