import { Injectable } from '@angular/core';
import { Nav } from '../../models/common/nav.model';

@Injectable()
export class LeverageHeaderService {

    loadMenu() {
        let leverageMenu: Nav[];

        leverageMenu = [   // Add header navigation objects here. For dropdown omit 'link' and include 'dropdownlinks'.
            {
                link: '/',
                name: 'Home',
                exact: true,
                linkactive: 'false',
                dropdown: false
            },
            {
                name: 'Candidate List',
                exact: true,
                linkactive: 'false',
                dropdown: true,
                subMenuItem: [
                    {
                        link: '/mayorlist',
                        name: 'Mayor',
                        exact: true,
                        linkactive: 'active',
                        dropdown: false
                    },
                    {
                        link: '/councilatlarge',
                        name: 'Council At Large',
                        exact: true,
                        linkactive: 'active',
                        dropdown: false
                    }
                ]
            },
            {
                link: '/about',
                name: 'About',
                exact: true,
                linkactive: 'active',
                dropdown: false
            }
        ];

        return leverageMenu;

    }

}