import { footerLinks } from "../assets/FooterLinks";

const Footer = () => {

    return (
        <div className="px-6 md:px-16 lg:px-24 xl:px-32 mt-24 bg-emerald-500/10">
            <div className="flex flex-col md:flex-row items-start justify-between gap-10 py-10 border-b border-gray-500/30 text-gray-500">
                <div>
                    <img className="w-34 md:w-32" src="https://dynamic.brandcrowd.com/asset/logo/9222cd62-f6ac-4b55-b9f2-43b4d85ac0e4/logo-search-grid-2x?logoTemplateVersion=1&v=638755756797900000&text=Pharmacy&colorpalette=green" alt="Logo" />
                    <p className="max-w-[410px] mt-6">Your health shouldn't have to wait.
We deliver genuine medicines and wellness essentials to your doorstep in minutes — fast, safe, and reliable.</p>
                </div>
                <div className="flex flex-wrap justify-between w-full md:w-[45%] gap-5">
                    {footerLinks.map((section, index) => (
                        <div key={index}>
                            <h3 className="font-semibold text-base text-gray-900 md:mb-5 mb-2">{section.title}</h3>
                            <ul className="text-sm space-y-1">
                                {section.links.map((link, i) => (
                                    <li key={i}>
                                        <a href={link.url} className="hover:underline transition">{link.text}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
            <p className="py-4 text-center text-sm md:text-base text-gray-500/80">
                Copyright {new Date().getFullYear()} © MediCart All Right Reserved.
            </p>
        </div>
    );
};

export default Footer