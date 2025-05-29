document.addEventListener("DOMContentLoaded", function () {
    // Load header
    fetch("./includes/header.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("header").innerHTML = data;
        });

    // Load footer
    fetch("./includes/footer.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("footer").innerHTML = data;
        });
});

function toggleAccordion(button) {
    const item = button.parentElement;
    const content = button.nextElementSibling;
    const icon = button.querySelector(".icon");

    if (content.classList.contains("hidden")) {
        button.classList.add("open");
        content.classList.remove("hidden");
        icon.innerHTML = "<i class='fa-solid fa-angle-down'></i>";

        // Close other open accordion items
        Array.from(item.parentElement.children).forEach(sibling => {
            if (sibling !== item) {
                const siblingButton = sibling.querySelector(".accordion-button");
                const siblingContent = sibling.querySelector(".accordion-content");
                const siblingIcon = siblingButton.querySelector(".icon");

                siblingButton.classList.remove("open");
                siblingContent.classList.add("hidden");
                siblingIcon.innerHTML = "<i class='fa-solid fa-angle-right'></i>";
            }
        });

    } else {
        button.classList.remove("open");
        content.classList.add("hidden");
        icon.innerHTML = "<i class='fa-solid fa-angle-right'></i>";
    }
}


