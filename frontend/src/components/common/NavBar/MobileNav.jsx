import {DisclosureButton, DisclosurePanel } from '@headlessui/react'



export function MobileNav({ navigation, currentPage, onNavigationClick, user, userNavigation }) {
    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

    return (
        <DisclosurePanel className="md:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
                {navigation.map((item) => (
                    <DisclosureButton
                        key={item.name}
                        as="a"
                        href="#"
                        onClick={(e) => {
                            e.preventDefault()
                            onNavigationClick(item.name)
                        }}
                        aria-current={item.name === currentPage ? 'page' : undefined}
                        className={classNames(
                            item.name === currentPage
                                ? 'bg-green-50 text-green-700 border-l-4 border-green-600'
                                : 'text-gray-600 hover:bg-green-50 hover:text-green-500',
                            'block py-3 pl-3 pr-4 text-base font-medium transition-colors duration-200 outline-none'
                        )}
                    >
                        {item.name}
                    </DisclosureButton>
                ))}
            </div>
            <div className="border-t border-gray-50 pt-4 pb-3">
                <div className="flex items-center px-5">
                    <div className="shrink-0">
                        <img
                            alt=""
                            src={user.imageUrl}
                            className="size-10 rounded-full border-2 border-gray-200 outline-none"
                        />
                    </div>
                    <div className="ml-3">
                        <div className="text-base font-medium text-gray-900">{user.name}</div>
                        <div className="text-sm font-medium text-gray-500">{user.email}</div>
                    </div>
                </div>
                <div className="mt-3 space-y-1 px-2">
                    {userNavigation.map((item) => (
                        <DisclosureButton
                            key={item.name}
                            as="a"
                            href={item.href}
                            onClick={(e) => {
                                if (item.href === '#')
                                    e.preventDefault();
                                if (item.onClick)
                                    item.onClick(e);
                            }}
                            className="block rounded-md px-3 py-2.5 text-base font-medium text-gray-500 hover:bg-green-50 hover:text-green-500 transition-colors duration-200 outline-none"
                        >
                            {item.name}
                        </DisclosureButton>
                    ))}
                </div>
            </div>
        </DisclosurePanel>
    )
}