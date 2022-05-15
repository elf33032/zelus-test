import classes from "./Layout.module.css"
function Layout(props){
    return(
        <div className={classes.main}>
            {props.children}
        </div>
    );
}
export default Layout;