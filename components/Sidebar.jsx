import Image from 'next/image';
import Link from 'next/link';

export default function Sidebar() {
  const menuItems = [
    { icon: '🏠', label: 'Home', href: '/' },
    { icon: '👥', label: 'About Us', href: '/about' },
    { icon: '📢', label: 'News & Updates', href: '/news' },
    { icon: '📅', label: 'Events Calendar', href: '/events' },
    { icon: '🎯', label: 'Partner Showcase', href: '/showcase' },
    { icon: '🏆', label: 'Honor Lists', href: '/honors' },
    { icon: '📣', label: 'Advertisement Banners', href: '/ads' },
    { icon: '🔑', label: 'Member Login', href: '/login' },
    { icon: '✨', label: 'New Member Registration', href: '/register' },
    { icon: '📝', label: 'Event Registration', href: '/event-registration' },
  ];

  return (
    <div className="w-64 h-screen bg-white shadow-lg p-6 overflow-hidden">
      <div className="mb-8">
        <Image
          src="/logo.png"
          alt="CHUELSA Logo"
          width={150}
          height={150}
          className="mx-auto rounded-lg"
        />
      </div>
      
      <nav className="space-y-2 overflow-y-auto h-[calc(100vh-16rem)] scrollbar-hide">
        {menuItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="flex items-center space-x-3 p-3 rounded hover:bg-gray-100 transition-colors"
          >
            <span>{item.icon}</span>
            <span className="text-sm text-blue-900">{item.label}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
}