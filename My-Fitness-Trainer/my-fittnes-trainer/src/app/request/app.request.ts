export class ExerciseRequest {
    public title: string;
    public description: string;
    public url: string;
    public user: UserRequest;
    public votes: 0;
}

export class ExerciseUpdateRequest {
    public id: string;
    public title: string;
    public description: string;
    public url: string;
    public votes: number;
}

export class ExperienceRequest{
    public title: string;
    public description: string;
    public url: string[];
    public votes: number;
    public user: UserRequest;
    public recipes: RecipeUpdateRequest[];
}

export class ExperienceUpdateRequest{
    public id: string;
    public title: string;
    public description: string;
    public url: string;
    public votes: number;
    public user: UserRequest;
    public recipes: RecipeRequest[];
}


export class ForumPostRequest{
    public title: string;
    public message:string;
    public user: UserRequest;
    public votes:number;
}

export class ForumPostUpdateRequest{
    public id: string;
    public title: string;
    public message:string;
    public user: UserRequest;
    public votes:number;
}

export class UserRequest{
    public firstName:string;
    public lastName:string;
    public email: string;
    public isAdmin: boolean;
}


export class RecipeRequest{
    public title: string;
    public description: string;
    public url: string;
    public votes:number;
    public user: UserRequest
}

export class RecipeUpdateRequest{
    public id: string;
    public title: string;
    public description: string;
    public url: string;
    public votes:number;
    public user: UserRequest
}