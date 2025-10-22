import { DesktopHeader } from './DesktopHeader';
import { MobileHeader } from './MobileHeader';

export default function Header() {
    return (
        <>
            {/* Show DesktopHeader on medium screens and up */}
            <div className="hidden md:block">
                <DesktopHeader />
            </div>

            {/* Show MobileHeader on small screens */}
            <div className="block md:hidden">
                <MobileHeader />
            </div>
        </>
    );
}