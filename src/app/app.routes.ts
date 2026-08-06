import { Routes } from '@angular/router';
import { SocialmediaListing } from './socialmedia-listing/socialmedia-listing';
import { StreamfloDetails } from './streamflo-details/streamflo-details';
import { SocialmediaCreate } from './socialmedia-create/socialmedia-create';
import { SocialmediaEdit } from './socialmedia-edit/socialmedia-edit';
import { FeaturedClips } from './featured-clips/featured-clips';

export const routes: Routes = [
    {
        path: '',
        component: SocialmediaListing,
        title: 'Ashlie After Hours'
    },
    {
        path: 'socialMedia/create',
        component: SocialmediaCreate,
        title: 'Create New platform'
    },
    {
        path:'socialMedia/:id/edit',
        component: SocialmediaEdit,
        title: 'Edit New Platform'

    },
    {
        path: 'featured',
        component: FeaturedClips,
        title: 'Featured Clips'
    },

    {
        path: 'socialMedia/:id',
        component: StreamfloDetails,
        title: 'Platform Details - Ashlie After Hours'
    },

]