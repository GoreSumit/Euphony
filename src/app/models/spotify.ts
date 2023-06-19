import { UrlCreationOptions } from "@angular/router";

export interface Spotify {
    tracks:{
        items:{}[];
    };

    uri:string;
    is_playing:boolean;
    album:{};
    name:string;
    images: {
        url: string;
    }[];
    href: string;
    id:string;
    items: {
        album:{
            images: {
                url: string;
            }[];
        }
        name: string;
        images: {
            url: string;
        }[];
    id:string;

        added_at: string;
        track: {
    id:string;
    name: string;
    artists:{
        name:string;
    }[];
    images:{
        url:string;
    }[];
    album:{
        name:string;
        images:{
            url:string;
        }[];
    }
        }
    }[];

    device: {
    id:string;

        href: string;
        name: string;
        type: string;
        volume_percent: number;

    };
    progress_ms: number;

    item: {
        id:string;
    uri:string;
        
        duration_ms: number;
       
        artists: {
            name: string;
        }[];
        name: string;
        album: {
            id:string;

            artists: {
    id:string;

                name: string;
            }[];
            
            images: {
                url: string;
            }[];
        };


    }



    artists: {
        href: string;
        items: [
            {
                external_urls: {
                    spotify: string;
                };
                followers: {
                    href: string | null;
                    total: number;
                };
                genres: [
                    string
                ];
                href: string;
                id: string;
                images:
                {
                    height: number;
                    url: string | undefined;
                    width: number;
                }[];
                name: string;
                popularity: number;
                type: string;
                uri: string;
            }

        ];
    };
    albums: {
        href: string;
        items: [
            {

                album_type: string;
                artists: [
                    {
                        href: string;
                        external_urls: {
                            spotify: string
                        };
                        id: string;
                        name: string;
                        type: string;
                        uri: string;

                    }
                ];
                href: string;
                id: string;
                images: {
                    url: string;
                }[];
                name: string;
                release_date: string;
                total_tracks: number;
                type: string;
                uri: string;

            }
        ];
    };

}

// export interface SpotifyAlbums{
//     albums:{
//         href:string;
//         items:[
//             {

//                 album_type:string;
//                 artists:[
//                     {
//                         href:string;
//                         external_urls:{
//                             spotify:string
//                         };
//                         id:string;
//                         name:string;
//                         type:string;
//                         uri:string;

//                     }
//                 ];
//                 href:string;
//                 id:string;
//                 images:[
//                     {
//                         url:string;
//                     }
//                 ];
//                 name:string;
//                 release_date:string;
//                 total_tracks:number;
//                 type:string;
//                 uri:string;

//             }
//         ];
//     };

// }

// export interface SpotifyArtists{
    

// }