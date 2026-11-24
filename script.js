
document.addEventListener("DOMContentLoaded", () => {

    // GitHubユーザー名の設定

    const githubUsername = "koma-678";


    // 制作実績へのリンク

    document.querySelectorAll("[data-project]").forEach(link => {

        if (githubUsername === "YOUR_USERNAME") {

            link.removeAttribute("href");
            link.setAttribute("aria-disabled", "true");
            link.textContent = "URL設定準備中";

            return;
        }

        const project = link.dataset.project;

        link.href =
            `https://${githubUsername}.github.io/${project}/`;

        link.target = "_blank";
        link.rel = "noopener noreferrer";

    });


    // スマホ用メニュー

    const hamburger = document.getElementById("hamburger");
    const nav = document.getElementById("nav");

    function closeMenu() {

        nav.classList.remove("active");
        hamburger.classList.remove("active");

        hamburger.setAttribute("aria-expanded", "false");
        hamburger.setAttribute("aria-label", "メニューを開く");

    }

    hamburger.addEventListener("click", () => {

        const isOpen = nav.classList.toggle("active");

        hamburger.classList.toggle("active", isOpen);

        hamburger.setAttribute("aria-expanded", isOpen);

        hamburger.setAttribute(
            "aria-label",
            isOpen ? "メニューを閉じる" : "メニューを開く"
        );

    });

    nav.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", closeMenu);

    });

    document.addEventListener("keydown", event => {

        if (event.key === "Escape") {
            closeMenu();
        }

    });


    // スクロールアニメーション

    const revealElements = document.querySelectorAll(
        ".section-heading, .about-brand, .about-content, .work-card, .service-card, .skills-grid, .pricing-card, .process-card, .contact h2"
    );

    if ("IntersectionObserver" in window &&
        !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {

        const observer = new IntersectionObserver(entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    observer.unobserve(entry.target);

                }

            });

        }, {
            threshold: 0.1
        });

        revealElements.forEach(element => {

            element.classList.add("reveal");

            observer.observe(element);

        });

    }


    // ヘッダーとトップに戻るボタン

    const header = document.querySelector(".header");

    const backToTop = document.getElementById("back-to-top");

    function updateScroll() {

        header.classList.toggle(
            "scrolled",
            window.scrollY > 50
        );

        backToTop.classList.toggle(
            "visible",
            window.scrollY > 500
        );

    }

    window.addEventListener("scroll", updateScroll, {
        passive: true
    });

    updateScroll();

    backToTop.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: window.matchMedia(
                "(prefers-reduced-motion: reduce)"
            ).matches ? "instant" : "smooth"

        });

    });

});
