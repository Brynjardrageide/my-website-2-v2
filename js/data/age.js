// Function to calculate the amount of years since a given date
// Author: Soni
function yearsSince(date)
{
    // Store the current date in today object
    const today = new Date();

    // Find the time difference and store it in a Date() object
    const difference = new Date(today - date);

    // Get the amount of years and subtract 1970
    // The Date() object will originate from epoch (January 1st, 1970), so we need to subtract 1970 years to get the definite time difference
    return difference.getFullYear() - 1970;
}

// Enter your birthday in a Date() object when calling the function.
// You need to use the (objectively stupid) american format MM/DD/YYYY
// Now use the return value of this function. E.g.: document.querySelector("p").innerHTML = yearsSince...
console.log("yearsSince(new Date(2006, 10, 18))");
console.log(yearsSince(new Date(2006, 10, 18)));

document.getElementById("agejs").innerHTML = yearsSince(new Date(2006, 10, 18))