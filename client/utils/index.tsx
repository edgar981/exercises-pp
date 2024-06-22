import { CirclePlus, CircleUserRound, ClipboardPen, Dumbbell, Folder, LayoutDashboard, LogOut, Star, SunMoon } from "lucide-react"

export const primaryNavItems = [
    {
        name: "Current workout",
        link: "/loggedin/current",
        icon:  <Dumbbell className="w-4 h-4" />,
    },
    {
        name: "Mesocycles",
        link: "/loggedin/mesocycles",
        icon:  <Folder className="w-4 h-4" />,
    },
    {
        name: "Templates",
        link: "/loggedin/templates",
        icon: <LayoutDashboard className="w-4 h-4" />
    },
    {
        name: "Custom exercises",
        link: "/loggedin/custom",
        icon: <ClipboardPen className="w-4 h-4" />
    },
    {
        name: "Plan a new mesocycle",
        link: "/loggedin/new",
        icon: <CirclePlus className="w-4 h-4" />
    },
]

export const extraNavItems = [
    {
        name: "Switch theme",
        link: "/darktheme",
        icon: <SunMoon className="w-4 h-4" />,
    },
    {
        name: "Profile",
        link: "/loggedin/profile",
        icon: <CircleUserRound className="w-4 h-4" />,
    },
    {
        name: "Sign out",
        link: "/home",
        icon: <LogOut className="w-4 h-4" />,
    },
    {
        name: "Leave a review",
        link: "/review",
        icon: <Star className="w-4 h-4" />,
    },
]