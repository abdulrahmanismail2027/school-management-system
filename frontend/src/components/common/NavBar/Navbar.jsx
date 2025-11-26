import { Disclosure, DisclosureButton } from '@headlessui/react'
import { Bars3Icon, XMarkIcon, BookOpenIcon } from '@heroicons/react/24/outline'
import {DesktopNav} from './DesktopNav.jsx'
import {UserProfileMenu} from './UserProfileMenu.jsx'
import {MobileNav} from './MobileNav.jsx'

export function Navbar({ navigation, currentPage, onNavigationClick, user, userNavigation }) {
    return (
        <Disclosure as="nav" className="bg-white border-b border-gray-50">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-20 items-center justify-between">
                    <div className="flex items-center flex-1 min-w-0">
                        {/* Branding - Always constant */}
                        <div className="flex shrink-0 items-center">
                            <BookOpenIcon className="size-8 text-green-600" />
                            <div className="ml-3">
                                <div className="text-lg font-bold text-gray-900 leading-tight">The Faith Centre</div>
                                <div className="text-sm font-semibold text-green-600 leading-tight">Islamic School</div>
                            </div>
                        </div>

                        {/* Desktop Navigation */}
                        <DesktopNav
                            navigation={navigation}
                            currentPage={currentPage}
                            onNavigationClick={onNavigationClick}
                        />
                    </div>

                    {/* Desktop Profile Menu */}
                    <div className="hidden md:block shrink-0">
                        <div className="ml-4 flex items-center space-x-4 md:ml-6">
                            <UserProfileMenu user={user} userNavigation={userNavigation} />
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="flex md:hidden shrink-0">
                        <DisclosureButton className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 transition-all duration-200 ease-in-out hover:text-green-400 outline-none focus:outline-none">
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
                            <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
                        </DisclosureButton>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            <MobileNav
                navigation={navigation}
                currentPage={currentPage}
                onNavigationClick={onNavigationClick}
                user={user}
                userNavigation={userNavigation}
            />
        </Disclosure>
    )
}