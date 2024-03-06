(function () {
  const forms = document.querySelectorAll("form");
  forms.forEach((form) => {
    const formsElements = form.querySelectorAll("input");

    formsElements.forEach((input) => {
      if (input.name == "subid") {
        input.type = "text";
        input.placeholder = "subid";
        input.value = "";
        input.required = true;
        createValidateCheckbox(form, input);
      }
    });

    // Функция по созданию обертки для input subid
    function createValidateCheckbox(currentForm, subidInput) {
      const checkDiv = document.getElementById("resendLeads_id");
      if (!checkDiv) {
        const style = document.createElement("style");
        style.textContent = `
        .custom__resendLeads-container{
            display: flex;
            flex-direction: row;
                    background-color:white;
        width:100%;
        padding:5px
        }
      .custom__resendLeads-label {
        position: relative;
        cursor: pointer;
        font-weight:600;
        font-size:13px;
        text-align: center;
    align-items: center;
    display: flex;
    justify-content: center;

      }
      .custom__resendLeads-label:before {
        content: "";
        background-color: transparent;
        border: 2px solid #0079bf;
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05),
          inset 0px -15px 10px -12px rgba(0, 0, 0, 0.05);
        width: 20px;
        height: 20px;
        display: inline-block;
        position: relative;
        vertical-align: middle;
        cursor: pointer;
        margin-right: 5px;
        transition: 250ms all ease;
      }
      .custom__resendLeads-label__checkbox {
        padding: 0;
        height: initial;
        width: initial;
        margin-bottom: 0;
        display: none;
        cursor: pointer;
        transition: 250ms all ease;
      }
      .custom__resendLeads-label__checkbox:checked
        + .custom__resendLeads-label:after {
        content: "✓";
        display: block;
        position: absolute;
        top: -3px;
        left: 4px;
        color: white;
        transition: 250ms all ease;
        font-size:16px!important;

      }
      .custom__resendLeads-label__checkbox:checked
        + .custom__resendLeads-label:before {
        background-color: #0079bf;
        transition: 250ms all ease;
      }
    `;
        currentForm.prepend(style);
        const divForInput = document.createElement("div");
        divForInput.style.display = "flex";
        divForInput.style.flexDirection = "column";
        const divForCheckbox = document.createElement("div");

        divForCheckbox.id = "resendLeads_id";
        divForCheckbox.classList.add("custom__resendLeads-container");

        const labelCheckbox = document.createElement("label");
        labelCheckbox.classList.add("custom__resendLeads-label");
        labelCheckbox.setAttribute(
          "for",
          "custom__resendLeads-label__checkbox"
        );
        labelCheckbox.textContent = "Отправить рандомный subid";
        const inputCheckbox = document.createElement("input");
        inputCheckbox.id = "custom__resendLeads-label__checkbox";
        inputCheckbox.classList.add("custom__resendLeads-label__checkbox");
        inputCheckbox.type = "checkbox";
        inputCheckbox.checked = false;

        divForCheckbox.append(inputCheckbox, labelCheckbox);
        divForInput.append(divForCheckbox);
        divForInput.prepend(subidInput);

        // Обработчик изменения состояния чекбокса
        inputCheckbox.addEventListener("change", function () {
          const subidInput = divForInput.querySelector('input[name="subid"]');
          if (subidInput) {
            subidInput.required = !inputCheckbox.checked;
          }
        });

        currentForm.prepend(divForInput);
      }
    }
  });
})();
