import * as a from './AdminLandingComponents';
import  LinkBtn  from './../1_admin/buttons/LinkBtn';


const students_menu = () => {
    return (
        <a.container>
            
        <LinkBtn btnTxt={"Manage Users"} />
        <LinkBtn btnTxt={ "Manage Hostels"}/>
        
        </a.container>
    );
}
 
export default students_menu;