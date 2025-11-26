import { useState } from 'react'
import {Navbar} from './Navbar.jsx'


export function AppShell({ navigationConfig, user}) {
    const [currentPage, setCurrentPage] = useState(navigationConfig[0]?.name)

    const handleNavigationClick = (pageName) => {
        setCurrentPage(pageName)
    }

    const userNavigation = [
        { name: 'Your profile', href: '#' },
        { name: 'Settings', href: '#' },
        { name: 'Sign out', href: '#' },
    ]


    const currentPageConfig = navigationConfig.find(item => item.name === currentPage)
    const CurrentPageComponent = currentPageConfig?.component

    return (
        <div className="min-h-full">
            <Navbar
                navigation={navigationConfig}
                currentPage={currentPage}
                onNavigationClick={handleNavigationClick}
                user={user}
                userNavigation={userNavigation}
            />

            <header className="bg-white shadow-sm">
                <div className="flex flex-col items-center mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-semibold text-gray-800 tracking-tight">
                        {currentPage}
                    </h1>
                </div>
            </header>

            <main>
                <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                    {CurrentPageComponent || (
                        <div className="bg-white rounded-lg shadow p-6">
                            <h2 className="text-xl font-semibold text-gray-800 mb-4">Welcome to {currentPage}</h2>
                            <p className="text-gray-600">This is the content for the {currentPage} page.</p>
                        </div>
                    )}
                </div>
            </main>
        </div>
    )
}