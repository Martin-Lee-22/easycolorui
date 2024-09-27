const container = {
    hidden: { 
        opacity: 0,
        y: 20,
        },
    show: {
        opacity: 1,
        y: 0,
        transition: {
        staggerChildren: 0.20
        }
    }
}



const popUpAnimation = {
    hidden: {
        opacity: 0,
        y: 20,
    },
    show:{
        opacity: 1,
        y: 0
    }
}

export {popUpAnimation, container}