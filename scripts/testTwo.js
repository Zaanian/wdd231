// Function to save the current date and time to local storage.
function saveCurrentDate() {
    // Get the current date and time as a Date object.
    const now = new Date();

    // Convert the Date object to a timestamp (number of milliseconds since Jan 1, 1970).
    // localStorage can only store strings, so converting to a timestamp is the most reliable way.
    localStorage.setItem('lastVisitTimestamp', now.getTime());

    console.log('Saved current timestamp:', now.getTime());
}

// Function to retrieve and display the saved date.
function loadAndDisplayDate() {
    // Get the timestamp from local storage.
    const storedTimestamp = localStorage.getItem('lastVisitTimestamp');

    // Find the HTML element where the date will be displayed.
    const lastVisitedElement = document.getElementById('lastVisited');

    // Check if a timestamp was found in local storage.
    if (storedTimestamp) {
        // Convert the string timestamp back into a JavaScript Date object.
        const lastVisitDate = new Date(Number(storedTimestamp));

        // Format the date into a human-readable string and display it.
        lastVisitedElement.textContent = lastVisitDate.toLocaleString();
        console.log('Retrieved timestamp:', storedTimestamp);
        console.log('Restored date:', lastVisitDate);
    } else {
        // Display a message if no date was found.
        lastVisitedElement.textContent = 'Never visited before.';
        console.log('No previous visit timestamp found in local storage.');
    }
}

// Add event listener to run the function when the page loads.
document.addEventListener('DOMContentLoaded', loadAndDisplayDate);
//
//
//
function checkTimeSinceLastVisit() {
    const lastVisitTimestamp = localStorage.getItem('lastVisit');

    if (lastVisitTimestamp) {
        // Convert the stored string to a number
        const lastVisitTime = parseInt(lastVisitTimestamp, 10);
        const currentTime = new Date().getTime();

        // Calculate the difference in milliseconds
        const difference = currentTime - lastVisitTime;

        // Convert difference to minutes for easy comparison
        const minutesPassed = Math.floor(difference / (1000 * 60));

        console.log(`It has been ${minutesPassed} minutes since your last visit.`);

        // Example comparison: check if it's been more than 60 minutes
        if (minutesPassed > 60) {
            console.log('More than an hour has passed.');
        } else {
            console.log('Less than an hour has passed.');
        }
    } else {
        console.log('This is your first visit.');
    }
}

// Call the function to check the time
checkTimeSinceLastVisit();

//
//
//
function currentDate() {
    const curDate = new Date();
    localStorage.setItem('startDate', curDate.getTime())

}

function lastSession() {
    const leaveDate = new Date();
    localStorage.setItem('endDate', leaveDate.getTime())
}

function loadAndDisplay() {

    const storedDate = localStorage.getItem('startDate')
    const storedLastDate = localStorage.getItem('endDate')
    const dateElement = document.getElementById("lastDate")


    if (storedDate) {
        const lastStoredDate = new Date(Number(storedDate));
        const endStoredDate = new Date(Number(storedLastDate))
        dateElement.textContent = lastStoredDate.toLocaleString()

        console.log('Date: ', lastStoredDate)
        console.log('end Session Date: ', endStoredDate)

    } else {
        dateElement.textContent = 'Welcome! Let us know if you have any questions.'
        console.log('No previous visit timestamp found in local storage.')
        currentDate()
    }

}


document.addEventListener('load', loadAndDisplay())
document.addEventListener('unload', lastSession())

