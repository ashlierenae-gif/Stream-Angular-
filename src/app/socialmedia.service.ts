import { Service } from '@angular/core';
import { SocialMedia } from './types/social-media';
import { socialMediaList } from './mock-data/mock-socials';

@Service()
export class SocialMediaService {
    emptySocialMedia: SocialMedia = {
        id: '',
        title: '',
        description: '',
        imageURL: '',
        link: '',
    };
    getSocialMediaById(id: string): SocialMedia {
        return socialMediaList.find(social => social.id === id) || this.emptySocialMedia;
    }

    getSocialMedias(): SocialMedia[] {
        return socialMediaList;
    }
}