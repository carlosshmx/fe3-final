import digitalhouse from '/images/DH.png'
import facebook from '/images/ico-facebook.png'
import instagram from '/public/images/ico-instagram.png'
import tiktok from '/public/images/ico-tiktok.png'
import whatsapp from '/public/images/ico-whatsapp.png'


const Footer = () => {
  return (
    <footer>
        <div className='footerLogo'>
          <p>Powered by</p>
          <img src={digitalhouse} alt='DH-logo'  />
        </div>
        <div className='footerIcons'>
          <img src={facebook} alt="Facebook" />
          <img src={instagram} alt="Instagram" />
          <img src={tiktok} alt="Tiktok" />
          <img src={whatsapp} alt="WhatsApp" />
        </div>
        
    </footer>
  )
}

export default Footer
