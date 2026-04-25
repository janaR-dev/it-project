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