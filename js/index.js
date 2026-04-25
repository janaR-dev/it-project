let toggle_btn = document.querySelector(".toggle"),
    body_ele = document.body,
    slide_ball = document.querySelector(".slider"),
    nav_btns = document.querySelectorAll("#main .utalities button"),
    current_theme = localStorage.getItem("theme");

update_theme();

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