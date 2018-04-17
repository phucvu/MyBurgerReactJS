import React from 'react';

import classes from './Layout.css';
import Aux from '../../hoc/Aux';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

const layout = (props) => (
    // react version >= 16.3, can use <> </>
    // <>
    //     <div>Toolbar, SideDrawer, Backdrop </div>
    //     <main>
    //             {props.children}
    //     </main>
    // </>
    <Aux>
        <Toolbar />
        <SideDrawer />
        <main className={classes.Content}>
            {props.children}
        </main>
    </Aux>
);

export default layout;