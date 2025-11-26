import {AppShell} from "../common/NavBar/AppShell.jsx";
import {useLocation} from "react-router-dom";





export const TeacherViewGeneration = () => {
    const location = useLocation();

    const email = location.state?.email || 'user@faithcentre.edu';
    const userName = location.state?.name || 'User';

    const user = {
        name: userName,
        email: email,
        imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    }

    const navigationConfig = [
        {
            name: 'Student',
            component: <div></div>
        },
    ]
    return (
        <AppShell navigationConfig={navigationConfig} user={user}/>
    )
}
export default TeacherViewGeneration;