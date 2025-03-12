document.addEventListener("DOMContentLoaded", function () {
    const previousEducationSelect = document.getElementById("previousEducation");
    const categoryDiv = document.getElementById("categorySelection");
    const categorySelect = document.getElementById("category");
    const courseSelectDiv = document.getElementById("courseSelection");
    const courseSelect = document.getElementById("course");
    const form = document.getElementById("admissionForm");

    // Categories based on previous education
    const categories = {
        "10+2": [ "PCM", "PCB", "Commerce", "Art"],
        "Bachelors": ["Course Eligible for Every Bachelor's Degree",
             "Course Available for B.Sc/Engg/CS/IT OR ANY RELATED FIELD",
             "Bio/Life Sciences",
             "Commerce/Science",
             "Fashion/Interior OR Related fields",
            "Bachelor's Degree in Education / Psychology / Physical Education",
        ],
        "Masters": ["PG Diploma Courses", ]
    };

    // Courses based on categories
    const categoryCourses = {
        //PCM
        "PCM": [ "Diploma in Fitness Nutrition – Dean dhayal  Upadhyay Kaushal Kendra (DDU-KK)",
            "Diploma in Logistics & Supply (Cargo Management) – Dean dhayal  Upadhyay Kaushal Kendra (DDU-KK)", 
            "Diploma in Imports and Exports – Dean dhayal  Upadhyay Kaushal Kendra (DDU-KK)", 
            "Diploma in Digital Marketing – Dean dhayal  Upadhyay Kaushal Kendra (DDU-KK)", 
            "Diploma in Interior Designing – Department of Life Long Learning*",
            "Diploma in Photography – School of Journalism and Mass Communication (SJMC)", 
            "Diploma in Screenplay Writing – School of Journalism and Mass Communication (SJMC)", 
            "Diploma in Sindhi Language & Literature – Sindhu Shodh Peeth",
            "Diploma in Pharmacy – *School of Pharmacy* (Physics, Chemistry, and Biology or Mathematics required)",  
            "Certificate Course in Agriculture Communication – School of Journalism and Mass Communication (SJMC)",  
            "Certificate Course in Digital Media – School of Journalism and Mass Communication (SJMC)",  
            "Certificate Course in Film Appreciation – School of Journalism and Mass Communication (SJMC)",  
            "Certificate Course in Sport Journalism – School of Journalism and Mass Communication (SJMC)",  
            "Certificate Course in Knowledge Participation and Development – *Baha’i Chair for Studies in Development*",  
            "Certificate Course in Sindhi Language – Sindhu Shodh Peeth",
            "B.Voc in Nutrition & Dietetics – Dean dhayal  Upadhyay Kaushal Kendra (DDU-KK)",  
            "B.Voc in Software Development – Dean dhayal  Upadhyay Kaushal Kendra (DDU-KK)",  
            "B.Voc in Landscape Design – Dean dhayal  Upadhyay Kaushal Kendra (DDU-KK)",  
            "B.Voc in Interior Design – Department of Life Long Learning",  
            "B.Voc in Fashion Technology – Department of Life Long Learning",
            "BA (Yogic Science) – *School of Yoga* (Minimum 45% required)",  
            "BSW – *School of Social Sciences (SOSS)* (Minimum 45% required)",  
            "BA in Journalism & Mass Communication – *SJMC*",
            "B.Sc. in Applied Statistics & Analytics – *School of Statistics (SOST)* (Mathematics is compulsory, Minimum 50% required)",  
            "B.Sc. in Yogic Science – *School of Yoga*",  
            "B.Sc. in Agriculture – *School of Life Sciences* (Minimum 50% required)",  
            "B.Sc. (Electronics, Computer Science, Mathematics) – *School of Electronics & Communication* (Mathematics is compulsory, Minimum 50% required)",  
            "B.Sc. (Hons. Physics) – *School of Physics* (Mathematics is compulsory, Minimum 50% required)",  
            "B.Sc. (Hons.) in Applied Statistics and Analytics – *School of Statistics (SOST)* (Mathematics is compulsory, Minimum 50% required)"        
        ],



        //PCB
        "PCB": [ "Diploma in Fitness Nutrition – Dean dhayal  Upadhyay Kaushal Kendra (DDU-KK)",
            "Diploma in Logistics & Supply (Cargo Management) – Dean dhayal  Upadhyay Kaushal Kendra (DDU-KK)", 
            "Diploma in Imports and Exports – Dean dhayal  Upadhyay Kaushal Kendra (DDU-KK)", 
            "Diploma in Digital Marketing – Dean dhayal  Upadhyay Kaushal Kendra (DDU-KK)", 
            "Diploma in Interior Designing – Department of Life Long Learning*",
            "Diploma in Photography – School of Journalism and Mass Communication (SJMC)", 
            "Diploma in Screenplay Writing – School of Journalism and Mass Communication (SJMC)", 
            "Diploma in Sindhi Language & Literature – Sindhu Shodh Peeth",
            "Diploma in Pharmacy – *School of Pharmacy* (Physics, Chemistry, and Biology or Mathematics required)", 
            "Certificate Course in Agriculture Communication – School of Journalism and Mass Communication (SJMC)",  
            "Certificate Course in Digital Media – School of Journalism and Mass Communication (SJMC)",  
            "Certificate Course in Film Appreciation – School of Journalism and Mass Communication (SJMC)",  
            "Certificate Course in Sport Journalism – School of Journalism and Mass Communication (SJMC)",  
            "Certificate Course in Knowledge Participation and Development – *Baha’i Chair for Studies in Development*",  
            "Certificate Course in Sindhi Language – Sindhu Shodh Peeth",
            "B.Voc in Nutrition & Dietetics – Dean dhayal  Upadhyay Kaushal Kendra (DDU-KK)",  
            "B.Voc in Software Development – Dean dhayal  Upadhyay Kaushal Kendra (DDU-KK)",  
            "B.Voc in Landscape Design – Dean dhayal  Upadhyay Kaushal Kendra (DDU-KK)",  
            "B.Voc in Interior Design – Department of Life Long Learning",  
            "B.Voc in Fashion Technology – Department of Life Long Learning",
            "BA (Yogic Science) – *School of Yoga* (Minimum 45% required)",  
            "BSW – *School of Social Sciences (SOSS)* (Minimum 45% required)",  
            "BA in Journalism & Mass Communication – *SJMC*",
            "B.Sc. in Yogic Science – *School of Yoga*",  
            "B.Sc. in Agriculture – *School of Life Sciences* (Minimum 50% required)",  
          
        ],
        
        
        
        
        
        
        //commerce
        
            "Commerce": [ "Diploma in Fitness Nutrition – Dean dhayal  Upadhyay Kaushal Kendra (DDU-KK)",
            "Diploma in Logistics & Supply (Cargo Management) – Dean dhayal  Upadhyay Kaushal Kendra (DDU-KK)", 
            "Diploma in Imports and Exports – Dean dhayal  Upadhyay Kaushal Kendra (DDU-KK)", 
            "Diploma in Digital Marketing – Dean dhayal  Upadhyay Kaushal Kendra (DDU-KK)", 
            "Diploma in Interior Designing – Department of Life Long Learning*",
            "Diploma in Photography – School of Journalism and Mass Communication (SJMC)", 
            "Diploma in Screenplay Writing – School of Journalism and Mass Communication (SJMC)", 
            "Diploma in Sindhi Language & Literature – Sindhu Shodh Peeth",
            "Certificate Course in Agriculture Communication – School of Journalism and Mass Communication (SJMC)",  
            "Certificate Course in Digital Media – School of Journalism and Mass Communication (SJMC)",  
            "Certificate Course in Film Appreciation – School of Journalism and Mass Communication (SJMC)",  
            "Certificate Course in Sport Journalism – School of Journalism and Mass Communication (SJMC)",  
            "Certificate Course in Knowledge Participation and Development – *Baha’i Chair for Studies in Development*",  
            "Certificate Course in Sindhi Language – Sindhu Shodh Peeth",
            "B.Voc in Nutrition & Dietetics – Dean dhayal  Upadhyay Kaushal Kendra (DDU-KK)",  
            "B.Voc in Software Development – Dean dhayal  Upadhyay Kaushal Kendra (DDU-KK)",  
            "B.Voc in Landscape Design – Dean dhayal  Upadhyay Kaushal Kendra (DDU-KK)",  
            "B.Voc in Interior Design – Department of Life Long Learning",  
            "B.Voc in Fashion Technology – Department of Life Long Learning",
            "BA (Yogic Science) – *School of Yoga* (Minimum 45% required)",  
            "BSW – *School of Social Sciences (SOSS)* (Minimum 45% required)",  
            "BA in Journalism & Mass Communication – *SJMC*"    ],

            //ARTS

        "Art": [ "Diploma in Fitness Nutrition – Dean dhayal  Upadhyay Kaushal Kendra (DDU-KK)",
            "Diploma in Logistics & Supply (Cargo Management) – Dean dhayal  Upadhyay Kaushal Kendra (DDU-KK)", 
            "Diploma in Imports and Exports – Dean dhayal  Upadhyay Kaushal Kendra (DDU-KK)", 
            "Diploma in Digital Marketing – Dean dhayal  Upadhyay Kaushal Kendra (DDU-KK)", 
            "Diploma in Interior Designing – Department of Life Long Learning*",
            "Diploma in Photography – School of Journalism and Mass Communication (SJMC)", 
            "Diploma in Screenplay Writing – School of Journalism and Mass Communication (SJMC)", 
            "Diploma in Sindhi Language & Literature – Sindhu Shodh Peeth",
            "Certificate Course in Agriculture Communication – School of Journalism and Mass Communication (SJMC)",  
            "Certificate Course in Digital Media – School of Journalism and Mass Communication (SJMC)",  
            "Certificate Course in Film Appreciation – School of Journalism and Mass Communication (SJMC)",  
            "Certificate Course in Sport Journalism – School of Journalism and Mass Communication (SJMC)",  
            "Certificate Course in Knowledge Participation and Development – *Baha’i Chair for Studies in Development*",  
            "Certificate Course in Sindhi Language – Sindhu Shodh Peeth",
            "B.Voc in Nutrition & Dietetics – Dean dhayal  Upadhyay Kaushal Kendra (DDU-KK)",  
            "B.Voc in Software Development – Dean dhayal  Upadhyay Kaushal Kendra (DDU-KK)",  
            "B.Voc in Landscape Design – Dean dhayal  Upadhyay Kaushal Kendra (DDU-KK)",  
            "B.Voc in Interior Design – Department of Life Long Learning",  
            "B.Voc in Fashion Technology – Department of Life Long Learning",
            "BA (Yogic Science) – *School of Yoga* (Minimum 45% required)",  
            "BSW – *School of Social Sciences (SOSS)* (Minimum 45% required)",  
            "BA in Journalism & Mass Communication – *SJMC*"
        ],



        //B IN ANY DEGREE
"Course Eligible for Every Bachelor's Degree": [
    "Diploma in Consumer Psychology & Advertising",
    "MA in Economics – *School of Economics*",
    "MA in Political Science – *School of Social Sciences (SOSS)*",
    "MA in Sociology – *School of Social Sciences (SOSS)*",
    "MA in Clinical Psychology – *School of Social Sciences (SOSS)*",
    "MA in Journalism & Mass Communication – *SJMC*",
    "MA in Health Communication – *SJMC*",
    "MA in Film Studies – *SJMC*",
    "MBA in Rural Development – *School of Social Sciences (SOSS)*",
    "MBA in Public Administration & Policy – *School of Social Sciences (SOSS)*"
],


//BSC,ENG/IT/CS

        "Course Available for B.Sc/Engg/CS/IT OR ANY RELATED FIELD": ["- M.Sc. in Data Science and Analytics – *School of Data Science and Forecasting*", 
        "M.Sc. in Computer Science – *SCSIT*",
        "M.Sc. in Information Technology – *SCSIT*",  
        "M.Sc. in Electronics and Communication – *School of Electronics & Communication* ",

],

//BIO/LIFE SCIENCE

        "Bio/Life Sciences": ["M.Sc. Biotechnology", "M.Sc. Genetics"],


//COMMERCE/SCIENCE

        "Commerce/Science": ["M.Com in Accounting & Financial Control - SCHOOL OF COMMERCE",  
"M.Com in Bank Management - SOC",
],

        //FASHION/INTERIOR

        "Fashion/Interior OR Related fields": ["- M.Voc in Fashion Technology – *Department of Life Long Learning* ", 
                                            " M.Voc in Interior Design – *Department of Life Long Learning*",  
                                            "M.Voc in Nutrition & Dietetics – *DDU-KK*",
                                        ],



    //Bachelor's Degree in Education / Psychology / Physical Education

        "Bachelor's Degree in Education / Psychology / Physical Education": ["- MA in Sports Psychology – *School of Physical Education (SOPE)*",  
"Master of Education (M.Ed.) – *School of Education (EDU)*",
" Master of Physical Education (M.P.Ed.) – *SOPE*"],

    //PG DIPLOMA

        "PG Diploma Courses": ["PG Diploma Guidance & Counselling(School of Social Sciences (SOSS))"]
    };

    // Hide category & course selection initially
    categoryDiv.style.display = "none";
    courseSelectDiv.style.display = "none";

    // Show categories based on education selection
    previousEducationSelect.addEventListener("change", function () {
        categorySelect.innerHTML = ""; // Clear previous options
        courseSelect.innerHTML = ""; // Clear course options
        categoryDiv.style.display = "none";
        courseSelectDiv.style.display = "none";

        const selectedEducation = previousEducationSelect.value;

        if (selectedEducation && categories[selectedEducation]) {
            let defaultOption = document.createElement("option");
            defaultOption.value = "";
            defaultOption.textContent = "-- Select Category --";
            defaultOption.disabled = true;
            defaultOption.selected = true;
            categorySelect.appendChild(defaultOption);

            categories[selectedEducation].forEach(category => {
                let option = document.createElement("option");
                option.value = category;
                option.textContent = category;
                categorySelect.appendChild(option);
            });

            categoryDiv.style.display = "block"; // Show category selection
        }
    });

    // Show courses based on selected category
    categorySelect.addEventListener("change", function () {
        courseSelect.innerHTML = ""; // Clear previous options
        courseSelectDiv.style.display = "none";

        const selectedCategory = categorySelect.value;

        if (selectedCategory && categoryCourses[selectedCategory]) {
            let defaultOption = document.createElement("option");
            defaultOption.value = "";
            defaultOption.textContent = "-- Select Course --";
            defaultOption.disabled = true;
            defaultOption.selected = true;
            courseSelect.appendChild(defaultOption);

            categoryCourses[selectedCategory].forEach(course => {
                let option = document.createElement("option");
                option.value = course;
                option.textContent = course;
                courseSelect.appendChild(option);
            });

            courseSelectDiv.style.display = "block"; // Show course selection
        }
    });

    // Handle form submission
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const selectedCourse = courseSelect.value;

        if (!selectedCourse) {
            alert("Please select a valid course.");
            return;
        }

        alert("Your application has been submitted! We will share eligible courses via email.");
        window.location.href = "pdf.html"; // Redirect to PDF page
    });
});
