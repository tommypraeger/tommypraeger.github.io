window.onload=function(){
    $.fn.extend({
        toggleText: function(a, b){
            return this.text(this.text() == b ? a : b);
        }
    });

    if (Cookies.get('tommypraeger-theme')) {
        if (Cookies.get('tommypraeger-theme') === 'dark') {
            $("body").addClass("dark");
            $("#theme-select").text("Turn on lights");
        } else if (Cookies.get('tommypraeger-theme') === 'light') {
            $("body").addClass("light");
            $("#theme-select").text("Turn off lights");
        } else {
            console.log('Oops, I changed the theme name.');
        }
    } else {
        Cookies.set('tommypraeger-theme', 'light');
    }

    $("#theme-select").click(function() {
        if (Cookies.get('tommypraeger-theme')) {
            if (Cookies.get('tommypraeger-theme') === 'dark') {
                Cookies.set('tommypraeger-theme', 'light');
            } else if (Cookies.get('tommypraeger-theme') === 'light') {
                Cookies.set('tommypraeger-theme', 'dark');
            } else {
                console.log('Oops, I changed the theme name.');
            }
        }
        $("body").toggleClass("dark");
        $("body").toggleClass("light");
        $(this).toggleText("Turn on lights", "Turn off lights");
    });

    let selected_page = "home";
    pageJS();
    const nav_choices = document.getElementsByClassName("nav-choice");
    const pages = document.getElementsByClassName("page-container");
    for (let i = 0; i < nav_choices.length; i++) {
        nav_choices[i].addEventListener("click", function() {
            selected_page = nav_choices[i].id;
            pageJS();
            for (let j = 0; j < nav_choices.length; j++) {
                if (selected_page === nav_choices[j].id) {
                    nav_choices[j].classList.add("selected");
                } else {
                    nav_choices[j].classList.remove("selected");
                }
                if (selected_page + '-container' === pages[j].id) {
                    pages[j].style.display = "block";
                } else {
                    pages[j].style.display = "none";
                }
            }
        })
    }

    for (let i = 0; i < pages.length; i++) {
        if (selected_page + '-container' === pages[i].id) {
            pages[i].style.display = "block";
        } else {
            pages[i].style.display = "none";
        }
    }


    function pageJS() {
        /**************************************************
         ***************** GUESSING GAME ******************
        **************************************************/
        if (selected_page == "guessing-game") {
            closeGameOptions();
            let game_options_open = false;
            document.getElementById("toggle-game-options").addEventListener("click",
                function() {
                    if (game_options_open) {
                        game_options_open = false;
                        closeGameOptions();
                    } else {
                        game_options_open = true;
                        openGameOptions();
                    }
                    //$(this).toggleText("Show Options", "Hide Options");
                });

            function openGameOptions() {
                document.getElementById("game-options").style.width = "400px";
                document.getElementById("game-options").style.paddingLeft = "20px";
                document.getElementById("game-options").style.paddingTop = "20px";
                document.getElementById("game-container").style.marginLeft = "400px";
                document.getElementById("toggle-game-options").innerHTML = "Hide Options";
            }
            
            function closeGameOptions() {
                document.getElementById("game-options").style.width = "0";
                document.getElementById("game-options").style.paddingLeft = "0";
                document.getElementById("game-options").style.paddingTop = "0";
                document.getElementById("game-container").style.marginLeft = "0";
                document.getElementById("toggle-game-options").innerHTML = "Show Options";
            }

            function guessesDefault(n) {
                return Math.ceil(Math.log2(n));
            }
            
            document.getElementById("max-guesses").placeholder = guessesDefault(1000);
        }

        /*************************************************
         ********************* HOME **********************
        *************************************************/
        if (selected_page == "home") {
            const resume_url = '../../Thomas_Praeger.pdf';
            const pdf_js_lib = window['pdfjs-dist/build/pdf'];
            pdf_js_lib.GlobalWorkerOptions.workerSrc = '//mozilla.github.io/pdf.js/build/pdf.worker.js';
            
            const loading_task = pdf_js_lib.getDocument(resume_url);
            loading_task.promise.then(function(pdf) {
            
            let page_number = 1;
            pdf.getPage(page_number).then(function(page) {
                const scale = 1;
                const viewport = page.getViewport(scale);

                const canvas = document.getElementById('resume-container');
                const context = canvas.getContext('2d');
                canvas.height = viewport.height;
                canvas.width = viewport.width;
            
                const render_context = {
                canvasContext: context,
                viewport: viewport
                };
                const render_task = page.render(render_context);
                render_task;
            });
            }, function (reason) {
            // PDF loading error
            console.error(reason);
            });
        }
    }
}