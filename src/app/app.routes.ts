import { Routes } from '@angular/router';
import { SocialmediaListing } from './socialmedia-listing/socialmedia-listing';
import { SocialmediaOverview } from './socialmedia-overview/socialmedia-overview';

export const routes: Routes = [
    {
        path:'',
        component: SocialmediaListing,
        title: 'SocialListing'
    },
    {
        path: 'socialMedia/:id',
        component: SocialmediaOverview,
        title: 'Socialdetails'
    },
]