
/**
 * An animation easing in-out function.
 * @param t Time: Amount of time that has passed since the beginning of the animation. Usually starts at 0 and slowly increases as the animation progresses.
 * @param b Beginning value: The starting point of the animation.
 * @param c Change in value: The amount of change needed to go from starting point to ending point.
 * @param d Duration: Amount of time (seconds) the animation will take to complete.
 * @returns The easing in-out value
 */
function easeInOutQuad (t:number, b:number, c:number, d:number): number{
    if((t /= d / 2) < 1) return c / 2 * t * t + b
    return -c / 2 * ((--t) * (t - 2) - 1) + b
}

/**
 *  An animation easing in function.
 * @param t elapsedTime: The number of milliseconds the animation has been running
 * @param b startValue: the value to start at (or the value when the percent complete is 0%)
 * @param c endValue: the value to end at (or the value when the percent complete is 100%)
 * @param d totalDuration: The total desired length of the animation in milliseconds
 * @returns The easing in value
 */
function easeInQuad(t:number, b:number, c:number, d:number):number {
    return c*(t/=d)*t + b;
}

/**
 * An animation easing in sine function
 * @param x the absolute progress of the animation in the bounds of 0 (beginning of the animation) and 1 (end of animation).
 * @returns The easing in since value
 */
function easeInSine(x: number): number {
    return 1 - Math.cos((x * Math.PI) / 2);
}

/**
 * An animation easing in Circ function
 * @param x the absolute progress of the animation in the bounds of 0 (beginning of the animation) and 1 (end of animation).
 * @returns The easing in Circ value
 */
function easeInCirc(x: number): number {
    return 1 - Math.sqrt(1 - Math.pow(x, 2));
}

/**
 * An animation easing in Quint function
 * @param x the absolute progress of the animation in the bounds of 0 (beginning of the animation) and 1 (end of animation).
 * @returns The ease in Quint value
 */
function easeInQuint(x: number): number {
    return x * x * x * x * x;
}

export {easeInOutQuad, easeInQuad, easeInSine, easeInCirc, easeInQuint}