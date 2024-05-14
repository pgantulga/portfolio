import women from '../assets/women.jpg';
import qa from '../assets/qa.jpg';
import ub from '../assets/ub.jpg';
import dm from '../assets/DM.jpg';


const works =
    [
        {
            title: 'Women in Mining Association',
            description: 'Website for women in Mining Association. Built with Angular frameworks with typescript and Firebase SDK.',
            image: women,
            link: 'http://womeninmining-f8929.web.app',
            labels: [
                {
                    title: 'Angular'
                },
                {
                    title: 'Typescipt'
                },
                {
                    title: 'Firebase'
                },
            ]
        },
        {
            title: 'Question and Answer platworm',
            description: 'Question and answer web application for miners in Mongolia. Built with Angular frameworks with typescript and Firebase SDK.',
            image: qa,
            link:'https://qaproject-23417.web.app',
            labels: [
                {
                    title: 'Angular'
                },
                {
                    title: 'Typescipt'
                },
                {
                    title: 'Firebase'
                },
            ]
        },
        {
            title: 'Ulaanbaatar FC store',
            description: 'Web application for Ulaanbaatar FC football club store. Built front-end with React library and backend with ExpressJS and MongoDB.',
            image: ub,
            labels: [
                {
                    title: 'React'
                },
                {
                    title: 'MongoDB'
                },
                {
                    title: 'Express'
                },
            ]
        },
        {
            title: 'Discover Mongolia Forum',
            description: 'Web application for Discover Mongolia Internationl Mining Forum. Built with Angular frameworks with typescript and Firebase SDK.',
            image: dm,
            link: "https://dm2020-38206.web.app/home",
            labels: [
                {
                    title: 'Angular'
                },
                {
                    title: 'Firebase'
                },
            ]
        },
    ]

export default works;