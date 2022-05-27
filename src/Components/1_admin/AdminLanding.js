import * as a from './AdminLandingComponents';
import  LinkBtn  from './../1_admin/buttons/LinkBtn';
    
const AdminLanding = () => {
    return ( 

        <a.container>
            
            <LinkBtn link="/admin-Student-Menu" btnTxt={"Manage Users"} />
            <LinkBtn btnTxt={ "Manage Hostels"}/>
            
        </a.container>

     );
}
 
export default AdminLanding;