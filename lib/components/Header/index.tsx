import logo from '@/assets/images/logo.svg';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
    return (
        <nav className="grid grid-cols-1 content-center justify-items-center py-5 mb-4">
            <div className="flex items-center gap-2">
                <div>
                    <Image priority src={logo} alt="livelink_logo" />
                </div>
                <Link href="/">
                    <h3 className="font-bold text-4xl">LiveLink</h3>
                </Link>
            </div>
        </nav>
    );
};

export default Header;
