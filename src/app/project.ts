export class Project
{
    id: number;
    title: string;
    date: Date;
    authors: string;
    url: string;
    description: string;
    longDescription: string;
    images: string[];
    tags: string[];
}

export class Member
{
    name: string;
    studentType?: string;
    photo?: string;
    url?: string;
    advisor?: string;
    projects?: number[];
    alreadyGraduated: boolean;
}
