const monthsList = {
  ru: {
    months: [
      "Январь",
      "Февраль",
      "Март",
      "Апрель",
      "Май",
      "Июнь",
      "Июль",
      "Август",
      "Сентябрь",
      "Октябрь",
      "Ноябрь",
      "Декабрь",
    ],
    dayPlaceholder: "1-31",
    yearsPlaceholder: "years",
  },
  es: {
    months: [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octubre",
      "Noviembre",
      "Diciembre",
    ],
    dayPlaceholder: "1-31",
    yearsPlaceholder: "años",
  },
};

class customBormFields {
  constructor(country) {
    this.days = document.getElementById("custom__born-days-id");
    this.month = document.getElementById("custom__born-month-id");
    this.years = document.getElementById("custom__born-years-id");
    this.country = country;
    this.#createMonthSelect();
    this.#setPlaceholder();
    this.#validateDaysField();
  }
  #setPlaceholder() {
    this.days.setAttribute(
      "placeholder",
      monthsList[this.country].dayPlaceholder
    );
    this.years.setAttribute(
      "placeholder",
      monthsList[this.country].yearsPlaceholder
    );
  }
  #validateDaysField() {
    this.days.addEventListener("input", (e) => {
      if (e.target.value) {
      }
    });
  }
  #createMonthSelect() {
    monthsList[this.country].months.forEach((elem, index) => {
      const monthOption = document.createElement("option");
      const optionContent = document.createElement("span"); // Создаем элемент для содержимого опции
      optionContent.textContent = elem;
      monthOption.appendChild(optionContent); // Добавляем название месяца в опцию
      monthOption.setAttribute("value", index + 1);
      this.month.appendChild(monthOption);
    });
  }
}
new customBormFields("ru");
