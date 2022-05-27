import * as a from './AdminLandingComponents';
import  LinkBtn  from './../1_admin/buttons/LinkBtn';

const AdminMenu = () => {
    return (
        <a.container>
            
            <LinkBtn btnTxt={"Add Student"} />
            <LinkBtn btnTxt={ "Search Student"}/>
            <LinkBtn btnTxt={ "Delete Student"}/>
            
        </a.container>
    );
}
 
export default AdminMenu;