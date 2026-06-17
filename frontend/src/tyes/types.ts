export interface AuthformData {
    email: string;
    password: string;
    confirmPassword: string;
}

export interface authResponse {
    success : boolean;
    message : string;
    token? : string;
}
