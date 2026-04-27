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
    user_ele = popup_ele.querySelector(".user-display");

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