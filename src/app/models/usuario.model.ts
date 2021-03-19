export class Usuario {
    constructor(
        public id: number,
        public email: string,
        public first_name: string,
        public last_name: string,
        public avatar: string
    ) { }
}

export interface UsersPage {
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    data: Usuario[];
    support: Support;
}


export interface Support {
    url: string;
    text: string;
}
