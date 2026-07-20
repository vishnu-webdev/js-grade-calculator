// Function to handle the navigation toggle drawer on mobile devices
function toggleMenu() {
    if (window.innerWidth <= 768) {
        const navLinks = document.querySelector('.nav-links');
        const hamburger = document.querySelector('.hamburger');

        if (navLinks && hamburger) {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
        }
    }
}

// Resets view variables if user resizes back into landscape/desktop resolutions
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        const navLinks = document.querySelector('.nav-links');
        const hamburger = document.querySelector('.hamburger');

        if (navLinks) navLinks.classList.remove('active');
        if (hamburger) hamburger.classList.remove('active');
    }
});

function calculate() {
    let s1 = parseFloat(prompt("Enter marks for subject English"))
    let s2 = parseFloat(prompt("Enter marks for subject Second language"))
    let s3 = parseFloat(prompt("Enter marks for subject Mathematics"))
    let s4 = parseFloat(prompt("Enter marks for subject Science"))
    let s5 = parseFloat(prompt("Enter marks for subject Social science"))

    let total = s1 + s2 + s3 + s4 + s5
    let average = total / 5

    let grade
    if (average >= 90) {
        grade = "A+"
    }
    else if (average >= 80) {
        grade = "A"
    }
    else if (average >= 70) {
        grade = "B"
    }
    else if (average >= 60) {
        grade = "C"
    }
    else if (average >= 50) {
        grade = "D"
    }
    else {
        grade = "F"
    }

    alert("Total Marks: " + total + "\nAverage Marks: " + average + "\nGrade: " + grade)

    document.getElementById("English").innerHTML = s1
    document.getElementById("second-languge").innerHTML = s2
    document.getElementById("Mathematics").innerHTML = s3
    document.getElementById("Science").innerHTML = s4
    document.getElementById("Social-science").innerHTML = s5
    document.getElementById("total").innerHTML = total
    document.getElementById("average").innerHTML = average
    document.getElementById("grade").innerHTML = grade
}