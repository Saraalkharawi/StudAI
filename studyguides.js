document.addEventListener("DOMContentLoaded", function () {
    
    const checklistBtn = document.querySelector(".btn-checklist");
    const checklistContainer = document.getElementById("checklist-items-container");

    checklistBtn.addEventListener("click", function () {
        let title = prompt("Ange en titel för checklistan:");
        if (!title) return;

        let description = prompt("Ange en beskrivning:");
        if (!description) return;

        let checklistItem = document.createElement("div");
        checklistItem.classList.add("checklist-item");

        checklistItem.innerHTML = `
            <h3>${title}</h3>
            <p>${description}</p>
            <button class="complete-btn">Markera Klar</button>
        `;

        let completeBtn = checklistItem.querySelector(".complete-btn");

        completeBtn.addEventListener("click", function () {
            checklistItem.classList.add("completed");
            setTimeout(() => {
                checklistContainer.removeChild(checklistItem);
            }, 3000);
        });

        checklistContainer.appendChild(checklistItem);
    });

  
    const summaryBtn = document.querySelector(".btn-summary");
    const summaryContainer = document.getElementById("summary-items-container");

    summaryBtn.addEventListener("click", function () {
        let taskTitle = prompt("Ange en titel för sammanfattningen:");
        if (!taskTitle) return;

        let summaryItem = document.createElement("div");
        summaryItem.classList.add("summary-item");

        summaryItem.innerHTML = `
            <h3>${taskTitle}</h3>
            <textarea class="summary-input" placeholder="Skriv din sammanfattning här..."></textarea>
            <button class="save-summary-btn">Spara</button>
        `;

        let saveSummaryBtn = summaryItem.querySelector(".save-summary-btn");

        saveSummaryBtn.addEventListener("click", function () {
            let summaryText = summaryItem.querySelector(".summary-input").value.trim();
            if (summaryText === "") {
                alert("Du måste skriva en sammanfattning innan du sparar.");
                return;
            }

            renderSummary(summaryItem, taskTitle, summaryText);
        });

        summaryContainer.appendChild(summaryItem);
    });

    function renderSummary(summaryItem, title, text) {
        summaryItem.innerHTML = `
            <h3>${title}</h3>
            <p class="summary-text">${text}</p>
            <button class="edit-summary-btn">Redigera</button>
        `;

        let editSummaryBtn = summaryItem.querySelector(".edit-summary-btn");

    
        editSummaryBtn.addEventListener("click", function () {
            renderEditableSummary(summaryItem, title, text);
        });
    }


    function renderEditableSummary(summaryItem, title, text) {
        summaryItem.innerHTML = `
            <h3>${title}</h3>
            <textarea class="summary-input">${text}</textarea>
            <button class="save-summary-btn">Spara</button>
        `;

        let saveSummaryBtn = summaryItem.querySelector(".save-summary-btn");

        saveSummaryBtn.addEventListener("click", function () {
            let updatedText = summaryItem.querySelector(".summary-input").value.trim();
            if (updatedText === "") {
                alert("Du måste skriva något innan du sparar.");
                return;
            }

            renderSummary(summaryItem, title, updatedText);
        });
    }
});
