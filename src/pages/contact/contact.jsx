import ContactCard from './contactcard';

const ContactPage = () => {
  return (
    <div className="bg-[#0b4ea1] min-h-screen px-4 sm:px-10 py-10 sm:py-20 flex flex-col lg:flex-row items-center lg:items-end justify-between gap-10">
      {/* Contact Form */}
      <ContactCard />

      {/* Image */}
      <img
        src="src/assets/logo/contactlogo.svg"
        alt="Contact Logo"
        className="w-64 sm:w-80 md:w-96"
      />
    </div>
  );
};

export default ContactPage;
