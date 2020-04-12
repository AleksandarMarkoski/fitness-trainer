export class ExercisesResponse{
    public readonly exercises: ExerciseResponse[]; 
}

export class ExerciseResponse {
    public readonly id: string;
    public readonly title: string;
    public readonly description: string;
    public readonly url: string;
    public readonly votes: number;
}

export class ExperiencesResponse {
    public readonly experience: ExerciseResponse[]; 
}

export class ExperienceResponse {
    public readonly id: string;
    public readonly title: string;
    public readonly description: string;
    public readonly url: string;
    public readonly votes: number;
    public readonly user: UserResponse;
    public readonly recipes: RecipeResponse[];
}

export class ForumPostsResponse{
    [x: string]: any;
    public readonly forums: ForumPostResponse[] = [];
}

export class ForumPostResponse{
    public readonly title: string;
    public readonly message:string;
    public readonly user: UserResponse;
    public readonly votes:number;
}


export class UsersResponse{
    public readonly users: UserResponse[]; 
}

export class UserResponse{
    public readonly id: string;
    public readonly firstName:string;
    public readonly lastName:string;
    public readonly email: string;
    public readonly isAdmin: boolean;
}

export class RecipesResponse{
    [x: string]: any;
    public readonly recipes: RecipeResponse[] = []; 
}

export class RecipeResponse{
    public readonly id: string;
    public readonly title: string;
    public readonly description: string;
    public readonly url: string;
    public readonly votes:number;
}


