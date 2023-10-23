import {Lobster, Satisfy, Sedgwick_Ave_Display} from '@next/font/google'

export const lobster = Lobster({
    weight: ['400'],
    subsets: ['latin'],
    display:'swap',
    variable: '--lobster-font'
})

export const logo = Sedgwick_Ave_Display({
    weight: ['400'],
    subsets: ['latin'],
    display:'swap',
    variable: '--logo-font'
})