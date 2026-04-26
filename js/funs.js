function update_theme() {
    slide_ball.style.animation = 'none'
    if (current_theme === 'dark') {
        body_ele.classList.add('dark');
        slide_ball.classList.add('dark');
        nav_btns.forEach(btn => {
            btn.classList.add('dark')
        });;
        if (toggle_btn) toggle_btn.checked = true;
    } else if (current_theme === 'light') {
        body_ele.classList.remove('dark');
        slide_ball.classList.add('light');
        nav_btns.forEach(btn => {
            btn.classList.remove('dark')
        });;

        if (toggle_btn) toggle_btn.checked = false;
    }
}

function nav_change() {
    if (window.scrollY > 2) {
        nav_bar.classList.add("colored");

    } else {
        nav_bar.classList.remove("colored");
    }
}

function show_menu() {
    menu_ele.classList.toggle("show");
}

function toggle_popUp() {
    let input_errors = document.querySelectorAll(`p.alert`);
    input_errors.forEach(function(input_error) {
        input_error.classList.remove("error");
        input_error.textContent = "";
    });


    popup_ele.classList.toggle("active");

}

function check_input(input) {
    let input_value = input.value,
        input_name = input.name,
        regex,
        input_error = document.querySelector(`p.alert[data-error-name="${input_name}"]`);
    if (input_name == 'first_name' || input_name == 'last_name') {
        regex = /^[A-Za-z]{3,}$/;

    } else if (input_name == 'email') {
        regex = /^[A-Za-z]+[0-9_\-\.]*@(gmail|moe|outlook)\.(com|org|io)$/

    } else {
        regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;;
    }

    if (input_value == '') {

        input_error.textContent = "This field is required";
        input_error.classList.add('error');
        return false;


    } else if (!regex.test(input_value)) {

        if (input_name == 'first_name' || input_name == 'last_name') {

            input_error.textContent = "Must be at least 3 letters (A-Z only)";

        } else if (input_name == 'email') {
            input_error.textContent = "Invalid email. Use: name@example.com";

        } else if (input_name == 'password') {
            input_error.textContent = "Password: 8+ chars, uppercase, lowercase, number & special char (@$!%*?&)";

        }
        input_error.classList.add('error');
        return false;

    } else {
        input_error.classList.remove('error');
        return true;

    }


}

function submitForm() {
    let isValid = true;

    popup_inputs.forEach(function(input) {
        if (!check_input(input)) {
            isValid = false;
        }
    });

    if (isValid) {
        let first_name = form_ele.querySelector('#first_name').value,
            last_name = form_ele.querySelector('#last_name').value,
            email = form_ele.querySelector('#email').value;

        user_data(first_name, last_name, email);
    }
}

function update_user_ui() {
    const reg_btn = document.querySelector(".login");
    let stored_user = localStorage.getItem("user_dataa");
    reg_btn.innerHTML = ''

    if (stored_user) {
        let user = JSON.parse(stored_user);

        reg_btn.innerHTML = `<i class="fa-regular fa-user"></i>`;

        reg_btn.onclick = () => {
            toggle_popUp();
        };

    } else {
        reg_btn.innerHTML = `Register`;

        reg_btn.onclick = () => {
            toggle_popUp();
        };
    }
}

function user_data(first_name, last_name, email) {
    const user_dataa = {
        first_name: first_name,
        last_name: last_name,
        full_Name: `${first_name} ${last_name}`,
        email: email
    };


    localStorage.setItem('user_dataa', JSON.stringify(user_dataa));

    display_user_dataa(user_dataa);
    update_user_ui();
}

function display_user_dataa(user_dataa) {
    let user_info = popup_ele.querySelector(".user-info"),
        head = popup_ele.querySelector(".head"),
        button_submit = popup_ele.querySelector(".sign-up");
    form_ele.style.display = 'none';
    user_ele.style.display = 'block';
    head.style.display = 'none';
    button_submit.style.display = 'none';



    user_info.innerHTML = `<h3>Welcome!</h3>
                        <p>Name: <span>${user_dataa.full_Name}</span></p>
                        <p>Email: <span>${user_dataa.email}</span></p>
                        <button onclick="back_to_form()" class="logout-btn">Log Out</button>
                   `

}

function back_to_form() {

    localStorage.removeItem('user_dataa');
    update_user_ui()

    form_ele.style.display = 'block';
    user_ele.style.display = 'none';
    form_ele.reset();

    let input_errors = document.querySelectorAll(`p.alert`);
    input_errors.forEach(function(input_error) {
        input_error.classList.remove("error");
        input_error.textContent = "";
    });

    let user_info = popup_ele.querySelector(".user-info"),
        head = popup_ele.querySelector(".head"),
        button_submit = popup_ele.querySelector(".sign-up");

    head.style.display = 'block',
        button_submit.style.display = 'block'

    user_info.innerHTML = "";
    toggle_popUp();


}