'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
} from '@/components/ui/dropdown-menu';

import { Button } from '@/components/ui/button';

import {
    SunIcon,
    MoonIcon,
    SunMoon,
} from 'lucide-react';

const ModeToggle = () => {
    const [mounted, setMounted] = useState(false);

    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    // Prevent hydration mismatch
    if (!mounted) {
        return (
            <Button variant='ghost' size='icon'>
                <SunMoon className='h-5 w-5' />
            </Button>
        );
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant='ghost' size='icon' className='focus-visible:ring-0 focus-visible:ring-offset-0'>
                    {theme === 'dark' ? (
                        <MoonIcon />
                    ) : (
                        <SunIcon className='h-5 w-5' />
                    )}
                </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align='end'>
                <DropdownMenuItem onClick={() => setTheme('light')}>
                    <SunIcon className='mr-2 h-4 w-4' />
                    Light
                </DropdownMenuItem>

                <DropdownMenuItem onClick={() => setTheme('dark')}>
                    <MoonIcon className='mr-2 h-4 w-4' />
                    Dark
                </DropdownMenuItem>

                <DropdownMenuItem onClick={() => setTheme('system')}>
                    <SunMoon className='mr-2 h-4 w-4' />
                    System
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default ModeToggle;