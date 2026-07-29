import { inject, Service } from '@angular/core';
import { SocialMedia } from './types/social-media';
import { HttpClient } from '@angular/common/http';

@Service()
export class SocialMediaService {
    baseUrl = '/api/v1/streams';
    private http = inject(HttpClient);
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

    createPlatform(newPlatform: SocialMedia): Promise<void> {
        return new Promise((resolve) => {

            this.http.post(this.baseUrl, newPlatform,)
                .subscribe(() => {
                    resolve();
                });
        });
    }
    deletePlatform(id: string): Promise<void> {
        return new Promise((resolve) => {
            this.http.delete(`${this.baseUrl}/${id}`)
                .subscribe(() => {
                    resolve();
                });
        });
    }
    updatePlatform(id: string, updatedPlatform: SocialMedia): Promise<void> {
        return new Promise((resolve) => {
            this.http.patch(`${this.baseUrl}/${id}`, updatedPlatform,)
                .subscribe(() => {
                    resolve();
                });
        });
    }
}