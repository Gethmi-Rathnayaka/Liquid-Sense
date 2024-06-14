import "../App.css"

import { HomeFilled } from '@ant-design/icons'; // Import the HomeFilled icon
import { StarFilled } from '@ant-design/icons'; 
import { ExperimentFilled } from '@ant-design/icons'; 
import { ThunderboltFilled } from '@ant-design/icons'; 
import { FunnelPlotFilled } from '@ant-design/icons';
import { HddFilled } from '@ant-design/icons';
import { ContactsFilled } from '@ant-design/icons';
import { SettingFilled } from '@ant-design/icons'; 


// import { NavLink } from 'react-router-dom';

// import { SidebarData } from "./SidebarData";

// function Sidebar(){
//     return (
//         <div className="Sidebar">
//           <ul className="SidebarList">
//             {SidebarData.map((val, key) => (
//               <li key={key} className="row">
//                 <NavLink to={val.link} className={({ isActive }) => (isActive ? 'active' : '')}>
//                   <div id="icon">{val.icon}</div>
//                   <div id="title">{val.title}</div>
//                 </NavLink>
//               </li>
//             ))}
//           </ul>
//         </div>
//       );
// }

const Sidebar = () => {
    const SidebarData = [
        {
            title: "Dashboard",
            icon: <HomeFilled />,
            link: "/Pages/Dashboard"
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
    return(
        <div className="container-1">
            <div className="Sidebar">
                <div className="top_section">
                    
                </div>
            </div>
        </div>
    );
}

export default Sidebar