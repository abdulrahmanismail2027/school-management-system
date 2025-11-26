import {ChevronLeftIcon, ChevronRightIcon} from '@heroicons/react/24/outline'
import { useState, useRef, useEffect } from 'react'



export function DesktopNav({ navigation, currentPage, onNavigationClick }) {
    const [canScrollLeft, setCanScrollLeft] = useState(false)
    const [canScrollRight, setCanScrollRight] = useState(false)
    const navRef = useRef(null)

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

    const checkScroll = () => {
        const element = navRef.current
        if (element) {
            setCanScrollLeft(element.scrollLeft > 0)
            setCanScrollRight(element.scrollLeft < element.scrollWidth - element.clientWidth - 1)
        }
    }

    const scroll = (direction) => {
        if (navRef.current) {
            const scrollAmount = 200
            navRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            })
        }
    }

    useEffect(() => {
        setTimeout(checkScroll, 100)
        const element = navRef.current
        if (element) {
            element.addEventListener('scroll', checkScroll)
            return () => element.removeEventListener('scroll', checkScroll)
        }
    }, [])

    return (
        <div className="hidden md:flex items-center flex-1 min-w-0 ml-6">
            {/* Left Scroll Button */}
            {(navigation.length > 0 || canScrollLeft) && (
                <button
                    onClick={() => scroll('left')}
                    className="shrink-0 p-2 text-gray-400 hover:text-green-400 transition-colors duration-200 outline-none"
                >
                    <ChevronLeftIcon className="size-4" />
                </button>
            )}

            {/* Scrollable Navigation Container */}
            <div
                ref={navRef}
                className="flex items-center space-x-0 overflow-x-auto scrollbar-hide mx-2 flex-1"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                <div className="flex items-center space-x-0">
                    {navigation.map((item) => (
                        <a
                            key={item.name}
                            href="#"
                            onClick={(e) => {
                                e.preventDefault()
                                onNavigationClick(item.name)
                            }}
                            aria-current={item.name === currentPage ? 'page' : undefined}
                            className={classNames(
                                item.name === currentPage
                                    ? 'text-green-600'
                                    : 'text-gray-500 hover:text-green-400',
                                'group relative shrink-0 inline-flex items-center justify-center px-4 py-2 text-sm font-medium transition-all duration-200 ease-in-out whitespace-nowrap h-20 outline-none cursor-pointer'
                            )}
                        >
                            <span className="relative z-10 pb-1">{item.name}</span>
                            <span className={classNames(
                                item.name === currentPage
                                    ? 'w-3/4 bg-green-600'
                                    : 'w-0 bg-green-400 group-hover:w-3/4',
                                'absolute bottom-2 left-1/2 transform -translate-x-1/2 h-0.5 transition-all duration-200 ease-in-out'
                            )} />
                        </a>
                    ))}
                </div>
            </div>

            {/* Right Scroll Button */}
            {(navigation.length > 0 || canScrollRight) && (
                <button
                    onClick={() => scroll('right')}
                    className="shrink-0 p-2 text-gray-400 hover:text-green-400 transition-colors duration-200 outline-none"
                >
                    <ChevronRightIcon className="size-4" />
                </button>
            )}
        </div>
    )
}