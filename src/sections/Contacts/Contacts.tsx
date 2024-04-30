import Form from "./Form";

export default function Contacts() {
  return (
    <section
      id="contacts"
      className="bg-contacts bg-cover bg-center bg-no-repeat lg:h-lvh w-full wrapper"
    >
      <div className="container">
        <h2 className="text-l-mob md:text-l-tab lg:text-l-des font-thin mb-[24px]">
          Contact <span className="font-medium">Us</span>
        </h2>
        <div className="md:flex flex-col justify-between lg:flex-row lg:gap-[281px]  ">
          <div className="flex flex-col gap-[26px] md:w-[525px] md:flex-row justify-between md:mb-[64px] lg:flex-col lg:items-end">
            {" "}
            <div className="flex flex-col gap-[26px] lg:gap-[64px] lg:items-end">
              <div className="flex w-[238px] justify-between items-start ml-[auto]">
                <div className="text-s-mob md:text-s-tab lg:text-s-desc flex flex-col font-normal">
                  <a href="tel:+380981234567">+38 (098) 12 34 567</a>
                  <a href="tel:+380731234567">+38 (073) 12 34 567</a>
                </div>
                <span className="text-xs-mob lg:text-xs-desc">
                  Phone number
                </span>
              </div>
              <div className="flex gap-[20px] justify-center">
                <a
                  href="mail:support@carptravel.com"
                  className="text-s-mob md:text-s-tab lg:text-s-desc font-normal"
                >
                  support@carptravel.com
                </a>
                <span className="text-xs-mob lg:text-xs-desc">E-mail</span>
              </div>
            </div>
            <div className="flex gap-[20px] justify-end lg:flex-row-reverse">
              <span className="text-xs-mob lg:text-xs-desc">Follow us</span>
              <ul className="text-s-mob md:text-s-tab lg:text-s-desc flex flex-col font-normal">
                <li>
                  <a href="#">facebook</a>
                </li>
                <li>
                  <a href="#">instagram</a>
                </li>
                <li>
                  <a href="#">youtube</a>
                </li>
                <li>
                  <a href="#">tiktok</a>
                </li>
              </ul>
            </div>
          </div>
          <Form />
        </div>
      </div>
    </section>
  );
}
