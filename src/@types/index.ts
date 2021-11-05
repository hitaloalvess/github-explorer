export type Repository = {
    id:number;
    full_name:string;
    description:string;
    html_url:string;
    forks: number;
    stargazers_count: number;
    watchers: number;
    owner: {
        avatar_url:string;
    };
}