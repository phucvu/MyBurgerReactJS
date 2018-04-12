import React from 'react';

import Aux from '../../hoc/Aux';
import classes from './Layout.css';

const layout = (props) => (
    // react version >= 16.3
    // <>
    //     <div>Toolbar, SideDrawer, Backdrop </div>
    //     <main>
    //             {props.children}
    //     </main>
    // </>
    <Aux>
        <div>Toolbar, SideDrawer, Backdrop </div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Aux>
);

export default layout;