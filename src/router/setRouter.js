/* Layout */
import Layout from '@/layout';
/** menu */
import menus from "../subMenu"; 

/**动态设置路由*/ 
function setRouter(menu){
    menu = menu || menus;
    menu.forEach(item =>{
        if(item.component  && typeof item.component == 'string'){
            item.component = item.component == 'Layout' ? Layout : loadView(item.component);
        }
        if(item.children){
            setRouter(item.children);
        }
    })
    return menu;
}

/**路由懒加载*/
function loadView(view) {
    return () => import(`@/views/${view}`);
} 

export default setRouter