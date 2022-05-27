import * as b from './LinkBtnElements';

const LinkBtn = (props) => {
    return ( 
        
        <b.container>
            <b.LinkButton to={`${props.link}`}>{ props.btnTxt}</b.LinkButton>
        </b.container>
        //hajdg
     );
}
 
export default LinkBtn;