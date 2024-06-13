import { HomeFilled } from '@ant-design/icons'; // Import the HomeFilled icon
import { StarFilled } from '@ant-design/icons'; 
import { ExperimentFilled } from '@ant-design/icons'; 
import { ThunderboltFilled } from '@ant-design/icons'; 
import { FunnelPlotFilled } from '@ant-design/icons';
import { HddFilled } from '@ant-design/icons';
import { ContactsFilled } from '@ant-design/icons';
import { SettingFilled } from '@ant-design/icons'; 

export const SidebarData = [
    {
        title: "Dashboard",
        icon: <HomeFilled />,
        link: "/Dashboard"
    },
    {
        title: "Temperature",
        icon: <StarFilled />,
        link: "/Temperature"
    },
    {
        title: "pH",
        icon: <ExperimentFilled />,
        link: "/pH"
    },
    {
        title: "Conductivity",
        icon: <ThunderboltFilled />,
        link: "/Conductivity"
    },
    {
        title: "Turbidity",
        icon: <FunnelPlotFilled />,
        link: "/Turbidity"
    },
    {
        title: "Standards",
        icon: <HddFilled />,
        link: "/Standards"
    },
    {
        title: "Account",
        icon: <ContactsFilled />,
        link: "/Account"
    },
    {
        title: "Settings",
        icon: <SettingFilled />,
        link: "/Settings"
    },
]