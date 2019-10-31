    // change Color Themes

    window.onload = function() {
        var color = window.localStorage.getItem('color');
        if (color != null) {
            changeColor(color);
        }
    }

    function changeColor(color) {
        window.localStorage.setItem("color", color);
        if (color == 'yellow') {
            document.getElementById('colorLink').setAttribute('href', 'assets/css/colors/yellow.css');
        } else if (color == 'blue') {
            document.getElementById('colorLink').setAttribute('href', 'assets/css/colors/blue.css');
        } else if (color == 'black') {
            document.getElementById('colorLink').setAttribute('href', 'assets/css/colors/black.css');
        } else if (color == 'default') {
            document.getElementById('colorLink').setAttribute('href', 'assets/css/colors/default.css');
        } else if (color == 'darkGreen') {
            document.getElementById('colorLink').setAttribute('href', 'assets/css/colors/dark-green.css');
        } else if (color == 'flat-blue') {
            document.getElementById('colorLink').setAttribute('href', 'assets/css/colors/flat-blue.css');
        } else if (color == 'gold') {
            document.getElementById('colorLink').setAttribute('href', 'assets/css/colors/gold.css');
        } else if (color == 'green') {
            document.getElementById('colorLink').setAttribute('href', 'assets/css/colors/green.css');
        } else if (color == 'orange') {
            document.getElementById('colorLink').setAttribute('href', 'assets/css/colors/orange.css');
        } else if (color == 'pink') {
            document.getElementById('colorLink').setAttribute('href', 'assets/css/colors/pink.css');
        } else if (color == 'red') {
            document.getElementById('colorLink').setAttribute('href', 'assets/css/colors/red.css');
        } else if (color == 'yellow') {
            document.getElementById('colorLink').setAttribute('href', 'assets/css/colors/yellow.css');
        }
    }