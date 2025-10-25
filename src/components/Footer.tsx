import { DesktopFooter } from './DesktopFooter';
import { MobileFooter } from './MobileFooter';

export default function Footer() {
    return (
        <>
            {/* 1. Desktop Footer: Hidden on small screens, shown on medium (md) and up. */}
            <div className="hidden md:block">
                <DesktopFooter />
            </div>

            {/* 2. Mobile Footer: Shown on small screens, hidden on medium (md) and up. */}
            <div className="block md:hidden">
                <MobileFooter />
            </div>
        </>
    );
}
