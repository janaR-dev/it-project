let toggle_btn = document.querySelector(".toggle"),
    body_ele = document.body,
    slide_ball = document.querySelector(".slider"),
    nav_btns = document.querySelectorAll("#main .utalities button"),
    current_theme = localStorage.getItem("theme"),
    nav_bar = document.querySelector(".nav-bar"),
    menu_ele = document.querySelector("#main .menu"),
    popup_ele = document.querySelector(".login-popup"),
    popup_container = document.querySelector(".login-popup .container"),
    popup_close = popup_ele.querySelector(".close_popup"),
    popup_inputs = popup_ele.querySelectorAll("input"),
    form_ele = popup_ele.querySelector(".data"),
    user_ele = popup_ele.querySelector(".user-display"),
    attractions = document.querySelectorAll(".place"),
    search_input = document.querySelector(".search-input");

update_theme();
update_user_ui();
window.addEventListener('scroll', nav_change);

toggle_btn.addEventListener('change', function() {
    slide_ball.style.animation = ''
    if (this.checked) {
        nav_btns.forEach(btn => {
            btn.classList.add('dark')
        });

        body_ele.classList.add('dark');

        slide_ball.classList.remove('light');
        slide_ball.classList.add('dark');
        localStorage.setItem('theme', 'dark');

    } else {
        nav_btns.forEach(btn => {
            btn.classList.remove('dark')
        });

        body_ele.classList.remove('dark');

        slide_ball.classList.remove('dark');
        slide_ball.classList.add('light');
        localStorage.setItem('theme', 'light');

    }
});

popup_ele.addEventListener('click', toggle_popUp);
popup_container.addEventListener('click', function(e) {
    e.stopPropagation();
})
document.body.addEventListener('click', function(e) {
    e.stopPropagation();
})
popup_close.addEventListener('click', toggle_popUp);

form_ele.addEventListener("submit", function(e) {
    e.preventDefault();
    let focus_input = form_ele.querySelector("input:focus");
    if (focus_input) focus_input.blur();
    submitForm();

})

popup_inputs.forEach(function(popup_input) {
    popup_input.addEventListener("blur", function() {
        check_input(popup_input);
    })
})

if (search_input) {
    search_input.addEventListener("keyup", function(e) {
        let search_value = search_input.value.toLowerCase(),
            innertext = document.querySelector('.contr');

        attractions.forEach(function(card) {
            let attractions_name = card.querySelector("h2").textContent.toLowerCase(),
                attractions_paragraph = card.querySelector(".details p").textContent.toLowerCase();
            if (search_value === '' || attractions_name.includes(search_value) || attractions_paragraph.includes(search_value)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });

    })
}









const contactForm = document.querySelector(".contact-card:nth-of-type(1) form");
const full_name = document.getElementById("full_name");
const email = document.getElementById("email");
const number = document.getElementById("number");
const message = document.getElementById("Suggestions1");
if (contactForm) {
    contactForm.addEventListener("submit", function(e) {
        e.preventDefault();
        if (full_name.value.trim() === "") {
            show_error(full_name, "Full Name is required");
        } else {
            show_success(full_name);
        }


        if (email.value.trim() === "") {
            show_error(email, "Email is required");
        } else if (!isValidEmail(email.value.trim())) {
            show_error(email, "Email is not valid");
        } else {
            show_success(email);
        }

        if (number.value.trim() === "") {
            show_error(number, "Phone Number is required");
        } else {
            show_success(number);
        }

        if (message.value.trim() === "") {
            show_error(message, "Please enter your message");
        } else {
            show_success(message);
        }
    });
}



const feedbackForm = document.querySelector(".contact-card:nth-of-type(2) form");
const full_name2 = document.getElementById("full_name2");
const email2 = document.getElementById("email2");
const rate = document.getElementById("rate");
const suggestions2 = document.getElementById("Suggestions2");


if (feedbackForm) {
    feedbackForm.addEventListener("submit", function(e) {
        /* e.preventDefault();*/
        let isValid = true;
        if (full_name2.value.trim() === "") {
            show_error(full_name2, "Full Name is required");
            isValid = false;
        } else {
            show_success(full_name2);
        }


        if (email2.value.trim() === "") {
            show_error(email2, "Email is required");
            isValid = false;
        } else {
            show_success(email2);
        }


        if (rate.value === "" || rate.value < 1 || rate.value > 5) {
            show_error(rate, "Rate must be between 1 and 5");
            isValid = false;
        } else {
            show_success(rate);
        }
        if (isValid === false) {
            e.preventDefault();

        }
    });
}