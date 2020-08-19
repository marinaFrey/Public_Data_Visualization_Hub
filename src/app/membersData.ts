import { Member } from './project';
/* tslint:disable */
export const MEMBERS: Member[] =
    [
        {
            name: "Carla Freitas",
            studentType: "Professor",
            alreadyGraduated: false
        }, 
        {
            name: "Luciana Nedel",
            studentType: "Professor",
            alreadyGraduated: false
        },
        {
            name: "Gustavo Feller",
            studentType: "Ph.D",
            advisor: "Carla Freitas",
            alreadyGraduated: false
        },
        {
            name: "Marina Fortes Rey",
            studentType: "M.Sc.",
            photo: "marinafrey.jpg",
            url: "http://fortesrey.net/inf/cv",
            advisor: "Carla Freitas",
            projects: [1,2],
            alreadyGraduated: true
        },
        {
            name: "Marina Fortes Rey",
            studentType: "Undergraduate",
            alreadyGraduated: false
        },
        {
            name: "Marina Fortes Rey",
            studentType: "Undergraduate",
            alreadyGraduated: false
        },
        {
            name: "Marina Fortes Rey",
            alreadyGraduated: true
        }
    ];