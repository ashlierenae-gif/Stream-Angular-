import { Routes } from '@angular/router';
import { SocialmediaListing } from './socialmedia-listing/socialmedia-listing';
import { StreamfloDetails } from './streamflo-details/streamflo-details';

export const routes: Routes = [
    {
        path:'',
        component: SocialmediaListing,
        title: 'SocialListing'
    },
    {
        path: 'socialMedia/:id',
        component: StreamfloDetails,
        title: 'Socialdetails'
    },
]