import uniqid from "uniqid";

const sampleData = {
    contactInformation: {
        userName:  'Devin Molnau',
        address: 'Ames, IA',
        phone: '123-456-7890',
        email: 'd.molnau3172@gmail.com'
    },
    sections:{
        educations:[
            {
                schoolName: 'University of St. Thomas',
                schoolLocation:'St.Paul, MN',
                degree: 'BS',
                fieldOfStudy:'Biochemistry',
                studyStartDate: '2011',
                studyEndDate: '2015',
                id: uniqid(),
            },
            {            
                schoolName: 'Iowa State University',
                schoolLocation:'Ames, IA',
                degree: 'MS',
                fieldOfStudy:'Bioinformatics',
                studyStartDate: '2016',
                studyEndDate: 'present',
                id: uniqid(),
            }
        ],
        experiences:[
            {
                jobTitle: 'Research Assistant',
                company: 'Iowa State University',
                workLocation:'Ames,IA',
                tasks: 'research',
                startWorkDate:'2016',
                endWorkDate:'2023',
                id: uniqid(),
                },
            {
                jobTitle: 'Teaching Assistant',
                company: 'Iowa State University',
                workLocation: 'Ames, IA',
                tasks: 'teach introductory biology lab classes',
                startWorkDate: '2017',
                endWorkDate: '2023',
                id: uniqid(),
            }
    
        ]   
    
    }
}
    

export default sampleData