
import facebook from './images/icon-facebook.svg'
import twitter from './images/icon-twitter.svg'
import youtube from './images/icon-youtube.svg'
import instergram from './images/icon-instagram.svg'

const dashboards = [
    {
        name: 'facebook',
        user: '@nathanf',
        logo: facebook,
        followers: 1987,
        increase: 12,
        color: 'hsl(195, 100%, 50%)',
        view: {
            name: "Page Views",
            quantity: 87,
            quantityIncrease: 3,
            likes: 52,
            likesIncrease: -2
        }

    },
    {
        name: 'twitter',
        user: '@nathanf',
        logo: twitter,
        followers: 1044,
        increase: 99,
        color: 'hsl(203, 89%, 53%)',
        view: {
            name: "Retweets",
            quantity: 117,
            quantityIncrease: 303,
            likes: 507,
            likesIncrease: 553
        },

    },
    {
        name: 'instergram',
        user: '@realnathanf',
        logo: instergram,
        followers: 11734,
        increase: 1099,
        color: 'linear-gradient(to right, hsl(37, 97%, 70%) , hsl(329, 70%, 58%))',
        view: {
            name: "Profile Views",
            quantity: 52000,
            quantityIncrease: 1375,
            likes: 5462,
            likesIncrease: 2257
        },
    },
    {
        name: 'youtube',
        user: 'Nathan F.',
        logo: youtube,
        followers: 8239,
        increase: -144,
        color: 'hsl(348, 97%, 39%)',
        view: {
            name: "Total views",
            quantity: 1407,
            quantityIncrease: -12,
            likes: 107,
            likesIncrease: -19
        },


    }
]

export default dashboards;