
#Password Generator App Solution

This is a solution to the Password Generator App challenge on Frontend Mentor. This project allowed me to practice my skills in HTML, CSS, and JavaScript by building a password generator app that helps users create strong passwords.

Table of contents

Overview

The challenge

Screenshot

Links


My process

Built with

What I learned

Continued development

Useful resources


Author

Acknowledgments


Overview

The challenge

Users should be able to:

Generate a password based on the selected inclusion options (e.g., uppercase, lowercase, numbers, symbols).

Copy the generated password to the clipboard.

See an animation indicating the success of copying the password.

View the password length and modify it using a slider.

Ensure a responsive design for all device sizes.


Screenshot



Ensure that the screenshot of your solution is placed here. You can crop it or adjust it as needed to highlight the key parts of your app.

Links

Solution URL: Add solution URL here

Live Site URL: Add live site URL here


My process

Built with

Semantic HTML5 markup

CSS for styling (including Flexbox and Grid)

JavaScript for dynamic behavior and interaction

Custom animations for UI feedback (e.g., password copied success)

Mobile-first approach for responsive design


What I learned

During this project, I learned how to create a user-friendly password generator that integrates interactive elements, such as sliders and checkboxes, to give users control over the generated passwords. I also refined my skills in handling browser events, such as clicks and inputs, and managing animations in CSS for a smooth user experience.

Key takeaways include:

Event handling: I learned how to handle button clicks to generate passwords, update the displayed value, and copy the password to the clipboard.

CSS animations: I used CSS keyframes to animate the success message for password copying, giving immediate feedback to the user.

Working with dynamic data: By utilizing the navigator.clipboard.writeText() API, I was able to add the ability to copy the password to the clipboard.

Responsive design: Ensured the app’s layout adapts to different screen sizes by implementing a mobile-first design approach.


const copyBtn = document.getElementById('copy');
copyBtn.addEventListener('click', () => {
    message.style.display = 'flex';
    navigator.clipboard.writeText(passwordInput.value);
});

.copy-message {
  animation: message 3s forwards;
}
@keyframes message {
  0% { top: -1000px; }
  40% { top: 50px; }
  80% { top: 50px; opacity: 1; }
  100% { opacity: 0; }
}

Continued development

In future projects, I would like to focus on improving the usability and accessibility of this app, such as adding custom themes for better visual feedback, making the app more mobile-friendly, and adding more complex password rules like length limits and custom character sets.

Useful resources

MDN Web Docs: Clipboard API – This resource helped me understand how to use the navigator.clipboard.writeText() method to copy text programmatically.

CSS Tricks - CSS Animations – This article helped me understand how to work with keyframe animations for smooth UI transitions.


Author

Website - Your name or website link

Frontend Mentor - @yourusername

Twitter - @yourusername


Acknowledgments

A special thanks to Frontend Mentor for providing such a fun and challenging project. I would also like to thank the online community for the resources and discussions that helped me during this process.




