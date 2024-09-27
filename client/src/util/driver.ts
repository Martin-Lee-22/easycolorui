import { driver } from "driver.js";
import "driver.js/dist/driver.css";
import { checkCookie, createCookie } from "./cookies";

const driverObj = driver({
    popoverClass: 'driverjs-theme',
    showProgress: true,
    steps:[
        { element: '.color-group', popover: { title: 'Step 1: Create & Select a Color', description: 'Create and select your own colors from this palette!'} },
        { element: '.viewer-page', popover: { title: 'Last Step: Click on an Element!', description: 'After selecting a color, click on an element to see what it looks like!', side: "left", align: 'center'} }
    ]
});
function runDriver(){
    if(!checkCookie('completedTour')){
        driverObj.drive()
        createCookie('completedTour', 'true', 7)
    }
}

export {runDriver}