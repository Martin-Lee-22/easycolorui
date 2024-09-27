// Price Card
type priceCardDataType = {
    type:string,
    price:string,
    list:string[],
    buttonText:string
}

const priceCardData = [
    {
        type:'Basic',
        price:'Free',
        list:['Unlimited Projects', 'Share with 5 team members', 'Sync across devices'],
        buttonText: 'Buy Template'
    },
    {
        type:'Standard',
        price:'$18.99',
        list:['Everything in Basic Plan',
            'Unlimited team members',
            'Collaborative workspace',
            '30 Days Version History'],
        buttonText: 'Choose Standard'
    },
    {
        type:'Plus',
        price:'$24.99',
        list:['Everything in Standard Plan',
            'Advanced Security',
            'Custom Contact',
            'User Provisioning',
            'SAML SSO'],
        buttonText: 'Choose Standard'
    }
]

// Benefits Card
type benefitsCardDataType = {
    heading: string,
    description: string
}
const benefitsCardData = [
    {
        heading: 'Effectiveness',
        description: 'Users can access high-quality colors free of cost!'
    },
    {
        heading: 'Consistent Quality',
        description: 'The quality of this Web App remain consistent on all devices!.'
    },
    {
        heading: 'High Design',
        description: "The designs and elements in this website are made with the upmost care!"
    },
    {
        heading: 'Iterations',
        description: "These elements are highly modular!"
    },
    {
        heading: 'Budgeting',
        description: "$0 budget because I made this website for fun!"
    },
    {
        heading: 'Expertise',
        description: "Gain access to my pool of experienced and specialized designs."
    }
]

// aiProfiles
type aiProfilesDataType = {
    stars: number,
    aiImgSrc: string,
    imgSrc: string,
    userName: string,
    description: string,
    duration:{
        hours: number,
        minutes: number
    },
    lessons: number
}

const aiProfilesData = [
    {
        stars: 5,
        aiImgSrc: '/ai-img.png',
        imgSrc: '/user_1.png',
        userName: 'Johnny Smith',
        description: "My course provides personalized feedback and real-world applications to ensure you master key design concepts. By the end of my course, you'll be equipped with the knowledge and skills to confidently build your own designs.",
        duration: {
            hours: 20,
            minutes: 10
        },
        lessons: 10
    },
    {
        stars: 3,
        aiImgSrc: '/ai-img.png',
        imgSrc:'/user_2.png',
        userName: 'June Summers',
        description: "I will deliver practical, hands-on training with the latest industry tools and techniques, making complex concepts accessible and actionable. You'll receive personalized support from me and work on real-world projects to solidify your skills.",
        duration: {
            hours: 15,
            minutes: 30
        },
        lessons: 8
    },
    {
        stars: 4,
        aiImgSrc: '/ai-img.png',
        imgSrc:'/user_4.png',
        userName: 'Mark Anthony',
        description: "Guided by me! You'll build practical skills through real-world projects, equipping you to develop and implement innovative designs confidently.",
        duration: {
            hours: 18,
            minutes: 20
        },
        lessons: 12
    }
]

// Accordion
const accordionData = ['How does EasyColorUX work?', 'Which payment methods are accepted?', 'What is your refund policy?', 'How do I become an instructor?', 'How is your UX techniques different than others?']

// Review

type reviewDataType = {
    imgSrc: string,
    userName: string,
    stars: number,
    review: string
}

const reviewData = [
    {
        imgSrc: '/user_3.png',
        userName: 'Michelle Stone',
        stars: 5,
        review: 'I’m absolutely blown away by how intuitive and powerful this web app is! It seamlessly integrates into my workflow, providing spot-on insights and recommendations that have significantly boosted my productivity. The user interface is sleek and user-friendly, making it a joy to use every day.'
    },
    {
        imgSrc: '/user_6.png',
        userName: 'Rick Sanchez',
        stars: 5,
        review: 'This web app has transformed my daily tasks with its incredible accuracy and efficiency. Its intuitive design and smart features make it an indispensable tool that I can’t imagine working without.'
    },
    {
        imgSrc: '/user_5.png',
        userName: 'Daniel Owen',
        stars: 5,
        review: "I’m thoroughly impressed with this web app! The interface is incredibly intuitive, making it easy to integrate into my existing workflow. Overall, it’s a game-changer that has exceeded all my expectations."
    }
]

// Footer
const footerData = [
    {
        heading: 'Resources',
        links: ['Docs', 'Blog', 'Support']
    },
    {
        heading: 'Information',
        links: ['About us', 'Careers', 'Contact us']
    },
    {
        heading: 'Follow us',
        links: ['Facebook', 'Twitter', 'Instagram']
    }
]

export {priceCardData, benefitsCardData, aiProfilesData, accordionData, reviewData, footerData}
export type {priceCardDataType, benefitsCardDataType, aiProfilesDataType, reviewDataType}