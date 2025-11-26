import {Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'

export function UserProfileMenu({ user, userNavigation }) {
    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

    return (
        <Menu as="div" className="relative">
            <MenuButton className="flex items-center max-w-xs text-sm rounded-full outline-none border-none focus:outline-none focus:border-none focus:ring-0">
                <span className="sr-only">Open user menu</span>
                <img
                    alt=""
                    src={user.imageUrl}
                    className="size-8 rounded-full border-2 border-gray-200 hover:border-green-400 transition-all duration-200 outline-none"
                />
            </MenuButton>

            <MenuItems
                transition
                className="absolute right-0 z-10 mt-3 w-48 origin-top-right rounded-xl bg-white py-2 shadow-xl ring-1 ring-gray-100 outline-none transition-all duration-200 ease-out data-closed:scale-95 data-closed:opacity-0 data-enter:duration-150 data-leave:duration-100"
            >
                <div className="px-4 py-2 border-b border-gray-100">
                    <div className="text-sm font-medium text-gray-900">{user.name}</div>
                    <div className="text-sm text-gray-500 truncate">{user.email}</div>
                </div>
                {userNavigation.map((item) => (
                    <MenuItem key={item.name}>
                        {({ focus }) => (
                            <a
                                href={item.href}
                                onClick={(e) => {
                                    if (item.href === '#')
                                        e.preventDefault();
                                    if (item.onClick)
                                        item.onClick(e);
                                }}
                                className={classNames(
                                    focus ? 'bg-green-50 text-green-700' : 'text-gray-700',
                                    'block px-4 py-2.5 text-sm transition-colors duration-150 ease-in-out outline-none'
                                )}
                            >
                                {item.name}
                            </a>
                        )}
                    </MenuItem>
                ))}
            </MenuItems>
        </Menu>
    )
}