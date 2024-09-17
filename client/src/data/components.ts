
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
            'User Provisioning (SCIM)',
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
        description: 'Subscribers can access high-quality design services at a fraction of the cost of hiring full-time designers or agencies, reducing overhead expenses.'
    },
    {
        heading: 'Consistent Quality',
        description: 'With a subscription, businesses receive a steady standard of professional design, ensuring brand consistency and quality across all materials.'
    },
    {
        heading: 'Design Board',
        description: "Add unlimited design tasks to your board. And we'll solve them one-by-one. Get worldclass creative designs in 24 hour. Unlimited"
    },
    {
        heading: 'Design Board',
        description: "Add unlimited design tasks to your board. And we'll solve them one-by-one. Get worldclass creative designs in 24 hour. Unlimited."
    },
    {
        heading: 'Iterations',
        description: "Subscriptions often include the option for regular updates or revisions, ensuring that the design remains fresh and aligned with current trends."
    },
    {
        heading: 'Budgeting',
        description: "With fixed subscription rates, companies can better predict their monthly or annual expenses, aiding in more effective budget management."
    },
    {
        heading: 'Expertise',
        description: "Small businesses gain access to a pool of experienced and specialized designers, which might otherwise be beyond their reach. Super designers."
    }
]

// aiProfiles
type aiProfilesDataType = {
    stars: number,
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
        userName: 'Jhon Smith',
        description: "My course provides personalized feedback and real-world applications to ensure you master key AI concepts. By the end of my course, you'll be equipped with the knowledge and skills to confidently build and deploy your own AI solutions.",
        duration: {
            hours: 20,
            minutes: 10
        },
        lessons: 10
    },
    {
        stars: 3,
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
        userName: 'Mark Anthony',
        description: "Guided by me! You'll build practical skills through real-world projects, equipping you to develop and implement innovative AI solutions confidently.",
        duration: {
            hours: 18,
            minutes: 20
        },
        lessons: 12
    }
]

export {priceCardData, benefitsCardData, aiProfilesData}
export type {priceCardDataType, benefitsCardDataType, aiProfilesDataType}