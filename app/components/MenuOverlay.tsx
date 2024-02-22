import Link from 'next/link';

type TLink = {
    path: string;
    title: string;
};

const MenuOverlay = ({
    links,
    handleOnClick,
}: {
    links: TLink[];
    handleOnClick: () => void;
}) => {
    return (
        <ul className="flex flex-col py-4 items-end z-20">
            {links.map((link, index) => (
                <li key={index}>
                    <Link
                        href={link.path}
                        onClick={handleOnClick}
                        className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
                    >
                        {link.title}
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default MenuOverlay;
