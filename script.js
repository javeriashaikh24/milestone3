var _a;
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    //type aseertion
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var educationElement = document.getElementById('education');
    var experienceElement = document.getElementById('experience');
    var skillsElement = document.getElementById('skills');
    // Ensure the block is properly enclosed with curly braces
    if (nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        //creat resume output
        var resumeOutput = "<h2>Resume</h2>\n    <p><strong>Name:</strong> <span id=\"edit-name\" class=\"editable\"> ".concat(name_1, " </span></p>\n      <p><strong>Email:</strong><span id=\"edit-edit\" class=\"editable\"> ").concat(email, "</span> </p>\n        <p><strong>Phone Number:</strong> <span id=\"edit-phone\" class=\"editable\">").concat(phone, " </span></p>\n\n\n          <h3>Education:</h3>\n           <p id=\"edit-phone\" class=\"editable\" >").concat(education, " </p>\n\n            <h3>Experience </h3>\n            <p id=\"edit-phone\" class=\"editable\">").concat(experience, " </p>\n\n              <h3>Skills:</h3> \n              <p id=\"edit-phone\" class=\"editable\"> ").concat(skills, " </p>");
        //  const resumeOutputElement = document.getElementById('resumeOutput')
        //  if(resumeOutputElement){
        //     resumeOutputElement.innerHTML = resumeOutput
        //  }else{
        //     console.error('the resume output element is missing')
        //  }else{
        //     console.error('one or more output elements are missing')
        //  }
        var resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
            makeEditable();
        }
        else {
            console.error('the resume output');
        }
    }
});
function makeEditable() {
    var educationElement = document.querySelectorAll('.editable');
    educationElement.forEach(function (element) {
        element.addEventListener('click', function () {
            var _a;
            var currentElement = element;
            var currentValue = currentElement.textContent || "";
            //replace content
            if (currentElement.tagName === "p" || currentElement.tagName === 'SPAN') {
                var input_1 = document.createElement('input');
                input_1.type = 'text';
                input_1.value = currentValue;
                input_1.classList.add('editing-input');
                input_1.addEventListener('blur', function () {
                    currentElement.textContent = input_1.value;
                    currentElement.style.display = 'inline';
                    input_1.remove();
                });
                currentElement.style.display = 'none';
                (_a = currentElement.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(input_1, currentElement);
                input_1.focus();
            }
        });
    });
}
