import ContactHero from '../../Components/ContactUs/ContactHero'
import SendMessage from '../../Components/ContactUs/SendMessage'
import ContactDetails from '../../Components/ContactUs/ContactDetails'
import OfficeLocation from '../../Components/ContactUs/OfficeLocation'
import FrequentlyAsked from '../../Components/ContactUs/FrequentlyAsked'

const ContactUsPage = () => {
  return (
    <div>

        <ContactHero />
        <div className='flex w-[90%] mt-10 gap-32 mb-20 m-auto'>
            <SendMessage />
            <ContactDetails />
          


        </div>
          <OfficeLocation />
          <FrequentlyAsked />




    </div>
  )
}

export default ContactUsPage