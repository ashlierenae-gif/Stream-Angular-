import { Service } from '@angular/core';
import { SocialMedia } from './types/social-media';

@Service()
export class SocialMediaService {
    baseUrl = '/api/v1/streams';
    
    emptySocialMedia: SocialMedia = {
        id: '',
        title: '',
        description: '',
        imageURL: '',
        link: '',
    };
    async getSocialMedias(): Promise<SocialMedia[]> {
        const response = await fetch(this.baseUrl);
        return await response.json();
    }

    async getSocialMediaById(id: string): Promise<SocialMedia> {
        const response = await fetch(`${this.baseUrl}/${id}`);
        return await response.json();
    }
}