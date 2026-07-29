import { Routes } from '@angular/router';
import { SocialmediaListing } from './socialmedia-listing/socialmedia-listing';
import { StreamfloDetails } from './streamflo-details/streamflo-details';
import { SocialmediaCreate } from './socialmedia-create/socialmedia-create';

export const routes: Routes = [
    {
        path: '',
        component: SocialmediaListing,
        title: 'Ashlie After Hours'
    },
    {
        path: 'socialMedia/create',
        component: SocialmediaCreate,
        title: 'Create new platform'
    },

    {
        path: 'socialMedia/:id',
        component: StreamfloDetails,
        title: 'Platform Details - Ashlie After Hours'
    },

]