const phoneRules = {
  pl: {
    iso: "pl",
    title: "Poland",
    countryCode: "+48",
    minLength: 12,
    maxLength: 12,
    nameError: "Wpisz imię i nazwisko",
    emailError: "E-mail jest nie prawidłowy",
    errorForStartPhone: "Telefon po +48 nie może zaczynać się od 0",
    errorForMinLength: "Telefon nie może być krótszy niż 12 znaków",
    errorForMaxLength: "Telefón nemôže mať viac ako 12 znakov",
  },
  it: {
    iso: "it",
    title: "Italy (Italia)",
    countryCode: "+39",
    minLength: 12,
    maxLength: 13,
    nameError: "Compila nome e cognome",
    emailError: "L'e-mail non è valida",
    errorForStartPhone: "Il telefono dopo +1 non può iniziare con 0",
    errorForMinLength: "Il telefono non può contenere meno di 12 caratteri",
    errorForMaxLength: "Il telefono non può essere lungo più di 13 caratteri",
  },
  hr: {
    iso: "hr",
    title: "Horvatia",
    countryCode: "+385",
    minLength: 12,
    maxLength: 13,
    nameError: "Ispunite ime i prezime",
    emailError: "E-pošta je nevažeća",
    errorForStartPhone: "Telefon nakon +385 ne može početi s 0",
    errorForMinLength: "Telefon ne može sadržavati više od 13 znakova",
    errorForMaxLength: "Telefon ne može imati manje od 12 znakova",
  },
  es: {
    iso: "es",
    title: "Spain (España)",
    countryCode: "+34",
    minLength: 12,
    maxLength: 12,
    nameError: "Ispunite ime i prezime",
    emailError: "E-pošta je nevažeća",
    errorForStartPhone: "Un teléfono después de +34 no puede empezar por 0",
    errorForMinLength:
      "El número de teléfono no puede tener menos de 12 dígitos",
    errorForMaxLength: "El número de teléfono no puede tener más de 12 dígitos",
  },
  cl: {
    iso: "cl",
    title: "Chile",
    countryCode: "+56",
    minLength: 12,
    maxLength: 12,
    nameError: "Complete el nombre y apellido",
    emailError: "El correo electrónico no es válido",
    errorForStartPhone: "Un teléfono después de +56 no puede empezar por 0",
    errorForMinLength:
      "El número de teléfono no puede tener menos de 12 dígitos",
    errorForMaxLength: "El número de teléfono no puede tener más de 12 dígitos",
  },
  sk: {
    iso: "sk",
    title: "Slovakia (Slovensko)",
    countryCode: "+421",
    minLength: 13,
    maxLength: 13,
    nameError: "Vyplňte meno a priezvisko",
    emailError: "E-mail je neplatný",
    errorForStartPhone: "Telefón po +421 nemôže začínať 0",
    errorForMinLength: "Telefón nemôže byť kratší ako 13 znakov",
    errorForMaxLength: "Telefón nemôže mať viac ako 13 znakov",
  },
  si: {
    iso: "si",
    title: "Slovenia (Slovenija)",
    countryCode: "+386",
    minLength: 12,
    maxLength: 12,
    nameError: "Izpolnite ime in priimek",
    emailError: "E-pošta je neveljavna",
    errorForStartPhone:
      "Telefonska številka za +386 se ne sme začeti s številko 0",
    errorForMinLength: "Telefonska številka ne sme biti krajša od 12 znakov",
    errorForMaxLength: "Telefonska številka ne sme biti daljša od 12 znakov",
  },
  brpt: {
    iso: "br",
    title: "Brazil (Brasil) PT",
    countryCode: "+55",
    minLength: 13,
    maxLength: 14,
    nameError: "Preencha o nome e o sobrenome",
    emailError: "To e-mail é inválid",
    errorForStartPhone: "O telefone após +55 não pode começar com 0",
    errorForMinLength: "O telefone não pode ter menos de 13 caracteres",
    errorForMaxLength: "O telefone não pode ter mais de 14 caracteres",
  },
  brfr: {
    iso: "br",
    title: "Brazil (Brasil) FR",
    countryCode: "+55",
    minLength: 13,
    maxLength: 14,
    nameError: "Indiquez vos nom et prénom",
    emailError: "L'adresse électronique n'est pas valide",
    errorForStartPhone:
      "Le numéro de téléphone après +55 ne peut pas commencer par 0",
    errorForMinLength:
      "Le numéro de téléphone ne peut pas comporter moins de 13 caractères",
    errorForMaxLength:
      "Le numéro de téléphone ne doit pas comporter plus de 14 caractères",
  },
  dk: {
    iso: "dk",
    title: "Denmark (Danmark)",
    countryCode: "+45",
    minLength: 11,
    maxLength: 11,
    nameError: "Udfyld dit for- og efternavn",
    emailError: "Til e-mail er ugyldig",
    errorForStartPhone: "Telefonnummeret efter +55 kan ikke starte med 0",
    errorForMinLength: "Telefonnummeret kan ikke være kortere end 11 tegn",
    errorForMaxLength: "Telefonnummeret kan ikke være længere end 11 tegn",
  },
  au: {
    iso: "au",
    title: "Denmark (Danmark)",
    countryCode: "+61",
    minLength: 12,
    maxLength: 13,
    nameError: "Fill in your first and last name",
    emailError: "To email is invalid",
    errorForStartPhone: "The phone number after +61 cannot start with 0",
    errorForMinLength: "Phone number cannot be shorter than 12 characters",
    errorForMaxLength: "Phone number cannot be longer than 13 characters",
  },
  ca: {
    iso: "ca",
    title: "Canada",
    countryCode: "+1",
    minLength: 12,
    maxLength: 12,
    nameError: "Fill in first name and last name",
    emailError: "The email is invalid",
    errorForStartPhone: "Telephone after +1 cannot start with 0",
    errorForMinLength: "The phone cannot be shorter than 12 characters",
    errorForMaxLength: "The phone cannot be more than 12 characters long",
  },
  chfr: {
    iso: "ch",
    title: "Switzerland FR",
    countryCode: "+41",
    minLength: 12,
    maxLength: 12,
    nameError: "Remplir le prénom et le nom de famille",
    emailError: "L'e-mail n'est pas valide",
    errorForStartPhone: "Le téléphone après +41 ne peut pas commencer par 0",
    errorForMinLength:
      "Le numéro de téléphone ne peut être inférieur à 12 caractères",
    errorForMaxLength:
      "Le numéro de téléphone ne peut pas comporter plus de 12 caractères",
  },
  chde: {
    iso: "ch",
    title: "Switzerland DE",
    countryCode: "+41",
    minLength: 12,
    maxLength: 12,
    nameError: "Vor- und Nachname ausfüllen",
    emailError: "Die E-Mail ist ungültig",
    errorForStartPhone: "Telefon nach +41 kann nicht mit 0 beginnen",
    errorForMinLength:
      "Die Telefonnummer darf nicht weniger als 12 Zeichen lang sein.",
    errorForMaxLength:
      "Die Telefonnummer darf nicht länger als 12 Zeichen sein.",
  },
};

class CountryDropdown {
  constructor({ phoneId, defaultCountry }) {
    this.phoneId = phoneId;
    this.defaultCountry = defaultCountry;
    this.render();
  }

  // Метод для создания списка стран
  createCountryList() {
    const fragment = document.createDocumentFragment();
    const countryList = document.createElement("ul");
    countryList.classList.add("custom__country-list");

    const sortedPhoneRules = Object.keys(phoneRules)
      .sort()
      .reduce((obj, key) => {
        obj[key] = phoneRules[key];
        return obj;
      }, {});

    for (let phoneRule in sortedPhoneRules) {
      const countryItem = document.createElement("li");
      countryItem.classList.add("custom__country-list-item");
      countryItem.setAttribute(
        "data-flag",
        phoneRules[phoneRule].iso.toLowerCase()
      );

      const spanItemFlag = this.createSpan(
        "span",
        "custom__country-list-item__flag",
        "",
        [
          "custom__country-list-item__flag",
          phoneRules[phoneRule].iso.toLowerCase(),
        ]
      );

      const spanItemName = this.createSpan(
        "span",
        "custom__country-list-item__name",
        phoneRules[phoneRule].title
      );

      const spanItemDialCode = this.createSpan(
        "span",
        "custom__country-list-item__name",
        phoneRules[phoneRule].countryCode
      );

      countryItem.append(spanItemFlag, spanItemName, spanItemDialCode);
      fragment.appendChild(countryItem);
    }

    countryList.appendChild(fragment);

    return countryList;
  }
  // Метод для создания элемента span
  createSpan(tagName, className, textContent, classList = []) {
    const span = document.createElement(tagName);
    span.classList.add(className);
    classList.forEach((cls) => span.classList.add(cls));
    span.textContent = textContent;
    return span;
  }

  // Метод для создания контейнера для списка стран
  createContainerForCountryList(countryList) {
    const divDropDown = document.createElement("div");
    divDropDown.classList.add("custom__country-dropdown");

    const divContainer = document.createElement("div");
    divContainer.classList.add("custom__country-container");

    const divCountrySelect = document.createElement("div");
    divCountrySelect.classList.add("custom__country-select");

    const divCountrySelectItem = document.createElement("div");
    divCountrySelectItem.classList.add("custom__country-list-item__flag");

    const divArrowDown = document.createElement("div");
    divArrowDown.classList.add("custom__country-arrow");
    divArrowDown.textContent = "▼";
    if (
      this.defaultCountry.length > 0 &&
      this.defaultCountry !== null &&
      this.defaultCountry !== undefined
    ) {
      divCountrySelectItem.classList.add(this.defaultCountry.toLowerCase());
    }

    divCountrySelect.appendChild(divCountrySelectItem);
    divCountrySelect.appendChild(divArrowDown);
    divContainer.appendChild(divCountrySelect);
    divContainer.appendChild(countryList);
    divDropDown.appendChild(divContainer);

    return divDropDown;
  }

  // Метод для создания интерфейса выпадающего списка стран
  createInterface() {
    const labelTag = document.createElement("label");
    labelTag.classList.add("custom__country-label");
    const phoneTag = document.getElementById(this.phoneId);
    phoneTag.classList.add("custom__country-input");
    const container = this.createContainerForCountryList(
      this.createCountryList()
    );
    container.appendChild(phoneTag.cloneNode(true));
    labelTag.appendChild(container);
    phoneTag.replaceWith(labelTag);
    return container;
  }

  // Метод для рендеринга интерфейса
  render() {
    this.createInterface();
  }
}

class ValidateForm {
  constructor({
    country,
    formId,
    firstNameId,
    lastNameId,
    emailId,
    errorId,
    phoneId,
    openDrop = true,
  }) {
    this.country = country.toLowerCase();
    this.formId = formId;
    this.firstNameId = firstNameId;
    this.lastNameId = lastNameId;
    this.emailId = emailId;
    this.phoneId = phoneId;
    this.errorId = errorId;
    this.openDrop = openDrop;
    // Сообщение ошибки
    this.errorMessage = "";
    this.hasError = false;
    // Добавляем разметку для флагов
    this.countryDropdown = new CountryDropdown({
      phoneId,
      defaultCountry: phoneRules[this.country].iso,
    });
    // Если указан начальный country, то берем его
    this.flag = this.countryDropdown.defaultCountry
      ? this.countryDropdown.defaultCountry
      : null;
    // Для открытия списка
    this.#openDropDown();
    // Для запуска проверки
    this.formSettings();
    this.#handlerPhoneTag();
    this.#addStyle();
    // подключаем проверку вводимых данных в телефон
  }
  formSettings() {
    const formTag = document.getElementById(this.formId);

    formTag.addEventListener("submit", (formEvent) => {
      this.#validateFirstName(formEvent) &&
        this.#validateLastName(formEvent) &&
        this.#validateEmail(formEvent) &&
        this.#validatePhone(formEvent) &&
        this.#showLoaderGif(formEvent);
    });
  }
  #showLoaderGif(formEvent) {
    const loader = document.querySelector(".loadergf");
    const submitBtn = formEvent.submitter;
    const submitText = submitBtn.firstElementChild;
    submitText.textContent = "";
    loader.style.display = "block";
    submitBtn.setAttribute("disabled", true);
  }
  // Валидация имени
  #validateFirstName(formEvent) {
    const { value } = document.getElementById(this.firstNameId);
    if (value.trim().length <= 0) {
      formEvent.preventDefault();
      this.#handleErrorMessage(phoneRules[this.country].nameError);
      return;
    }
    return true;
  }

  // Валидация фамилии
  #validateLastName(formEvent) {
    const { value } = document.getElementById(this.lastNameId);
    if (value.trim().length <= 0) {
      formEvent.preventDefault();
      this.#handleErrorMessage(phoneRules[this.country].nameError);
      return;
    }
    return true;
  }

  // Валидация почты
  #validateEmail(formEvent) {
    const { value } = document.getElementById(this.emailId);
    const rule =
      /^[^=]*[a-zA-Z0-9][a-zA-Z0-9._%+-]*@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!rule.test(value)) {
      formEvent.preventDefault();
      this.#handleErrorMessage(phoneRules[this.country].emailError);
      return;
    }
    return true;
  }

  // Валидация для телефона
  #validatePhone(formEvent) {
    const { value } = document.getElementById(this.phoneId);
    console.log(value);
    const { countryCode, maxLength, minLength } = phoneRules[this.country];
    if (value[countryCode.length] == 0) {
      formEvent.preventDefault();
      this.#handleErrorMessage(phoneRules[this.country].errorForStartPhone);
      return;
    }
    if (value.length < minLength) {
      formEvent.preventDefault();
      this.#handleErrorMessage(phoneRules[this.country].errorForMinLength);
      return;
    }
    if (value.length > maxLength) {
      formEvent.preventDefault();
      this.#handleErrorMessage(phoneRules[this.country].errorForMaxLength);
      return;
    }

    this.#handleErrorMessage("");
    return true;
  }
  //

  // addEventListener для инпута с айди phone
  #handlerPhoneTag() {
    const phoneTag = document.getElementById(this.phoneId);

    phoneTag.addEventListener("input", (event) => {
      const { countryCode } = phoneRules[this.country];
      const { target } = event;

      if (target.value.match(/[^+0-9]/g)) {
        target.value = target.value.replace(/[^+0-9]/g, "");
      } else {
        target.value = countryCode + target.value.slice(countryCode.length);
      }
    });

    phoneTag.addEventListener("paste", (event) => {
      event.preventDefault(); // Отменяем вставку текста из буфера обмена
    });

    phoneTag.addEventListener("click", (event) => {
      const { target } = event;
      const { countryCode } = phoneRules[this.country];
      // Проверяем, если значение начинается с countryCode, то ничего не делаем
      if (!target.value.startsWith(countryCode)) {
        // Иначе добавляем countryCode и обновляем значение
        target.value = "";
        target.value = countryCode + target.value.slice(countryCode.length);
      }
    });

    phoneTag.addEventListener("keyup", (event) => {
      const { target } = event;
      const { countryCode } = phoneRules[this.country];
      // Проверяем, если значение начинается с countryCode, то ничего не делаем
      if (!target.value.startsWith(countryCode)) {
        // Иначе добавляем countryCode и обновляем значение
        target.value = "";
        target.value = countryCode + target.value.slice(countryCode.length);
      }
    });
  }
  #handleErrorMessage(message) {
    this.errorMessage = message;
    let errorTag = document.getElementById(this.errorId);
    errorTag.textContent = this.errorMessage;
  }
  // Метод для открытия выпадающего списка стран
  #openDropDown() {
    const formElement = document.getElementById(this.formId);
    const countryList = formElement.querySelector(".custom__country-list");
    const countrySelect = formElement.querySelector(
      ".custom__country-select .custom__country-list-item__flag"
    );
    const arrowSelect = formElement.querySelector(
      ".custom__country-select .custom__country-arrow"
    );
    const dropdown = formElement.querySelector(".custom__country-dropdown ");

    const handleDocumentClick = (event) => {
      const target = event.target;
      if (
        !dropdown.contains(target) &&
        !target.classList.contains("custom__country-list-item__flag")
      ) {
        countryList.classList.remove("active");
        document.removeEventListener("click", handleDocumentClick);
      }
    };

    const toggleCountryList = (event) => {
      if (
        event.target.classList.contains("custom__country-list-item__flag") ||
        event.target.classList.contains("custom__country-arrow")
      ) {
        countryList.classList.toggle("active");
        if (countryList.classList.contains("active")) {
          document.addEventListener("click", handleDocumentClick);
        } else {
          document.removeEventListener("click", handleDocumentClick);
        }
      }
    };

    const handleListItemClick = (event) => {
      const listItem = event.target.closest(".custom__country-list-item");
      if (listItem) {
        this.flag = listItem.dataset.flag;
        countrySelect.className = `custom__country-list-item__flag ${this.flag}`;
        countryList.classList.remove("active");
        document.removeEventListener("click", handleDocumentClick);
      }
    };

    if (!this.openDrop) {
      arrowSelect.style.display = "none";
      return;
    }
    countrySelect.addEventListener("click", toggleCountryList);
    arrowSelect.addEventListener("click", toggleCountryList);
    countryList.addEventListener("click", handleListItemClick);
    arrowSelect.addEventListener("click", handleListItemClick);
  }
  // Добавить стили
  #addStyle = () => {
    const style = document.createElement("style");
    style.textContent = `
    /* Custom country-list */
    .custom__country-label{
      width:100%
    }
.custom__country-input {
  width: 100%;
  box-sizing: border-box;
  position: relative;
  padding-left: 50px!important;
  outline: none;
}
.custom__country-dropdown {
  width: 100%;
  position: relative;
  right: auto;
  left: 0;
  display: inline-block;
}
.custom__country-container {
  height: 100%;
  width: 100%;
  position: absolute;
  right: auto;
  left: 0;
}
.custom__country-select {
  z-index: 1;
  position: relative;
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 0 0 8px;
}
.custom__country-list {
  z-index:1;
  background-color: white;
  width: 100%;
  position: absolute;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  display: none;
  white-space: nowrap;
  border: 1px solid black;
  max-height: 200px;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.2);
  border: 1px solid #ccc;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}
.custom__country-list::-webkit-scrollbar {
    width: 5px;
    background-color: rgba(26, 24, 47, 0.15);
    border-radius: 5px;
    height: 200px;
}
.custom__country-list::-webkit-scrollbar-thumb {
    background: #1A182F;
    border-radius: 5px;
}
.custom__country-list.active {
  display: block;
}
.custom__country-list-item {
  color: black;
  font-size: 13px;
  height: auto;
  font-family: monospace;
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  padding: 5px 10px;
  transition: all 250ms ease;
}
.custom__country-list-item:not(:last-child){
  border-bottom: 1px solid gray;
}
.custom__country-list-item:hover,.custom__country-list-item:focus{
    background-color: #d1d1d191;
}
.custom__country-arrow{
    margin-left: 6px;
    width: auto;
    height: 100%;
    display: flex;
    align-items: center;
    text-align: center;
    font-size:10px;
    color: #737272;
}
.custom__country-list-item__name {
}
.custom__country-list-item__dial-code {
}
/* country flags list */
.custom__country-list-item__flag.ac {
  height: 10px;
  background-position: 0px 0px;
}
.custom__country-list-item__flag.ad {
  height: 14px;
  background-position: -22px 0px;
}
.custom__country-list-item__flag.ae {
  height: 10px;
  background-position: -44px 0px;
}
.custom__country-list-item__flag.af {
  height: 14px;
  background-position: -66px 0px;
}
.custom__country-list-item__flag.ag {
  height: 14px;
  background-position: -88px 0px;
}
.custom__country-list-item__flag.ai {
  height: 10px;
  background-position: -110px 0px;
}
.custom__country-list-item__flag.al {
  height: 15px;
  background-position: -132px 0px;
}
.custom__country-list-item__flag.am {
  height: 10px;
  background-position: -154px 0px;
}
.custom__country-list-item__flag.ao {
  height: 14px;
  background-position: -176px 0px;
}
.custom__country-list-item__flag.aq {
  height: 14px;
  background-position: -198px 0px;
}
.custom__country-list-item__flag.ar {
  height: 13px;
  background-position: -220px 0px;
}
.custom__country-list-item__flag.as {
  height: 10px;
  background-position: -242px 0px;
}
.custom__country-list-item__flag.at {
  height: 14px;
  background-position: -264px 0px;
}
.custom__country-list-item__flag.au {
  height: 10px;
  background-position: -286px 0px;
}
.custom__country-list-item__flag.aw {
  height: 14px;
  background-position: -308px 0px;
}
.custom__country-list-item__flag.ax {
  height: 13px;
  background-position: -330px 0px;
}
.custom__country-list-item__flag.az {
  height: 10px;
  background-position: -352px 0px;
}
.custom__country-list-item__flag.ba {
  height: 10px;
  background-position: -374px 0px;
}
.custom__country-list-item__flag.bb {
  height: 14px;
  background-position: -396px 0px;
}
.custom__country-list-item__flag.bd {
  height: 12px;
  background-position: -418px 0px;
}
.custom__country-list-item__flag.be {
  height: 15px;
  background-position: -440px 0px;
}
.custom__country-list-item__flag.bf {
  height: 14px;
  background-position: -460px 0px;
}
.custom__country-list-item__flag.bg {
  height: 12px;
  background-position: -482px 0px;
}
.custom__country-list-item__flag.bh {
  height: 12px;
  background-position: -504px 0px;
}
.custom__country-list-item__flag.bi {
  height: 12px;
  background-position: -526px 0px;
}
.custom__country-list-item__flag.bj {
  height: 14px;
  background-position: -548px 0px;
}
.custom__country-list-item__flag.bl {
  height: 14px;
  background-position: -570px 0px;
}
.custom__country-list-item__flag.bm {
  height: 10px;
  background-position: -592px 0px;
}
.custom__country-list-item__flag.bn {
  height: 10px;
  background-position: -614px 0px;
}
.custom__country-list-item__flag.bo {
  height: 14px;
  background-position: -636px 0px;
}
.custom__country-list-item__flag.bq {
  height: 14px;
  background-position: -658px 0px;
}
.custom__country-list-item__flag.br {
  height: 14px;
  background-position: -680px 0px;
}
.custom__country-list-item__flag.bs {
  height: 10px;
  background-position: -702px 0px;
}
.custom__country-list-item__flag.bt {
  height: 14px;
  background-position: -724px 0px;
}
.custom__country-list-item__flag.bv {
  height: 15px;
  background-position: -746px 0px;
}
.custom__country-list-item__flag.bw {
  height: 14px;
  background-position: -768px 0px;
}
.custom__country-list-item__flag.by {
  height: 10px;
  background-position: -790px 0px;
}
.custom__country-list-item__flag.bz {
  height: 14px;
  background-position: -812px 0px;
}
.custom__country-list-item__flag.ca {
  height: 10px;
  background-position: -834px 0px;
}
.custom__country-list-item__flag.cc {
  height: 10px;
  background-position: -856px 0px;
}
.custom__country-list-item__flag.cd {
  height: 15px;
  background-position: -878px 0px;
}
.custom__country-list-item__flag.cf {
  height: 14px;
  background-position: -900px 0px;
}
.custom__country-list-item__flag.cg {
  height: 14px;
  background-position: -922px 0px;
}
.custom__country-list-item__flag.ch {
  height: 15px;
  width: 15px;
  background-position: -944px 0px;
}
.custom__country-list-item__flag.ci {
  height: 14px;
  background-position: -961px 0px;
}
.custom__country-list-item__flag.ck {
  height: 10px;
  background-position: -983px 0px;
}
.custom__country-list-item__flag.cl {
  height: 14px;
  background-position: -1005px 0px;
}
.custom__country-list-item__flag.cm {
  height: 14px;
  background-position: -1027px 0px;
}
.custom__country-list-item__flag.cn {
  height: 14px;
  background-position: -1049px 0px;
}
.custom__country-list-item__flag.co {
  height: 14px;
  background-position: -1071px 0px;
}
.custom__country-list-item__flag.cp {
  height: 14px;
  background-position: -1093px 0px;
}
.custom__country-list-item__flag.cr {
  height: 12px;
  background-position: -1115px 0px;
}
.custom__country-list-item__flag.cu {
  height: 10px;
  background-position: -1137px 0px;
}
.custom__country-list-item__flag.cv {
  height: 12px;
  background-position: -1159px 0px;
}
.custom__country-list-item__flag.cw {
  height: 14px;
  background-position: -1181px 0px;
}
.custom__country-list-item__flag.cx {
  height: 10px;
  background-position: -1203px 0px;
}
.custom__country-list-item__flag.cy {
  height: 14px;
  background-position: -1225px 0px;
}
.custom__country-list-item__flag.cz {
  height: 14px;
  background-position: -1247px 0px;
}
.custom__country-list-item__flag.de {
  height: 12px;
  background-position: -1269px 0px;
}
.custom__country-list-item__flag.dg {
  height: 10px;
  background-position: -1291px 0px;
}
.custom__country-list-item__flag.dj {
  height: 14px;
  background-position: -1313px 0px;
}
.custom__country-list-item__flag.dk {
  height: 15px;
  background-position: -1335px 0px;
}
.custom__country-list-item__flag.dm {
  height: 10px;
  background-position: -1357px 0px;
}
.custom__country-list-item__flag.do {
  height: 14px;
  background-position: -1379px 0px;
}
.custom__country-list-item__flag.dz {
  height: 14px;
  background-position: -1401px 0px;
}
.custom__country-list-item__flag.ea {
  height: 14px;
  background-position: -1423px 0px;
}
.custom__country-list-item__flag.ec {
  height: 14px;
  background-position: -1445px 0px;
}
.custom__country-list-item__flag.ee {
  height: 13px;
  background-position: -1467px 0px;
}
.custom__country-list-item__flag.eg {
  height: 14px;
  background-position: -1489px 0px;
}
.custom__country-list-item__flag.eh {
  height: 10px;
  background-position: -1511px 0px;
}
.custom__country-list-item__flag.er {
  height: 10px;
  background-position: -1533px 0px;
}
.custom__country-list-item__flag.es {
  height: 14px;
  background-position: -1555px 0px;
}
.custom__country-list-item__flag.et {
  height: 10px;
  background-position: -1577px 0px;
}
.custom__country-list-item__flag.eu {
  height: 14px;
  background-position: -1599px 0px;
}
.custom__country-list-item__flag.fi {
  height: 12px;
  background-position: -1621px 0px;
}
.custom__country-list-item__flag.fj {
  height: 10px;
  background-position: -1643px 0px;
}
.custom__country-list-item__flag.fk {
  height: 10px;
  background-position: -1665px 0px;
}
.custom__country-list-item__flag.fm {
  height: 11px;
  background-position: -1687px 0px;
}
.custom__country-list-item__flag.fo {
  height: 15px;
  background-position: -1709px 0px;
}
.custom__country-list-item__flag.fr {
  height: 14px;
  background-position: -1731px 0px;
}
.custom__country-list-item__flag.ga {
  height: 15px;
  background-position: -1753px 0px;
}
.custom__country-list-item__flag.gb {
  height: 10px;
  background-position: -1775px 0px;
}
.custom__country-list-item__flag.gd {
  height: 12px;
  background-position: -1797px 0px;
}
.custom__country-list-item__flag.ge {
  height: 14px;
  background-position: -1819px 0px;
}
.custom__country-list-item__flag.gf {
  height: 14px;
  background-position: -1841px 0px;
}
.custom__country-list-item__flag.gg {
  height: 14px;
  background-position: -1863px 0px;
}
.custom__country-list-item__flag.gh {
  height: 14px;
  background-position: -1885px 0px;
}
.custom__country-list-item__flag.gi {
  height: 10px;
  background-position: -1907px 0px;
}
.custom__country-list-item__flag.gl {
  height: 14px;
  background-position: -1929px 0px;
}
.custom__country-list-item__flag.gm {
  height: 14px;
  background-position: -1951px 0px;
}
.custom__country-list-item__flag.gn {
  height: 14px;
  background-position: -1973px 0px;
}
.custom__country-list-item__flag.gp {
  height: 14px;
  background-position: -1995px 0px;
}
.custom__country-list-item__flag.gq {
  height: 14px;
  background-position: -2017px 0px;
}
.custom__country-list-item__flag.gr {
  height: 14px;
  background-position: -2039px 0px;
}
.custom__country-list-item__flag.gs {
  height: 10px;
  background-position: -2061px 0px;
}
.custom__country-list-item__flag.gt {
  height: 13px;
  background-position: -2083px 0px;
}
.custom__country-list-item__flag.gu {
  height: 11px;
  background-position: -2105px 0px;
}
.custom__country-list-item__flag.gw {
  height: 10px;
  background-position: -2127px 0px;
}
.custom__country-list-item__flag.gy {
  height: 12px;
  background-position: -2149px 0px;
}
.custom__country-list-item__flag.hk {
  height: 14px;
  background-position: -2171px 0px;
}
.custom__country-list-item__flag.hm {
  height: 10px;
  background-position: -2193px 0px;
}
.custom__country-list-item__flag.hn {
  height: 10px;
  background-position: -2215px 0px;
}
.custom__country-list-item__flag.hr {
  height: 10px;
  background-position: -2237px 0px;
}
.custom__country-list-item__flag.ht {
  height: 12px;
  background-position: -2259px 0px;
}
.custom__country-list-item__flag.hu {
  height: 10px;
  background-position: -2281px 0px;
}
.custom__country-list-item__flag.ic {
  height: 14px;
  background-position: -2303px 0px;
}
.custom__country-list-item__flag.id {
  height: 14px;
  background-position: -2325px 0px;
}
.custom__country-list-item__flag.ie {
  height: 10px;
  background-position: -2347px 0px;
}
.custom__country-list-item__flag.il {
  height: 15px;
  background-position: -2369px 0px;
}
.custom__country-list-item__flag.im {
  height: 10px;
  background-position: -2391px 0px;
}
.custom__country-list-item__flag.in {
  height: 14px;
  background-position: -2413px 0px;
}
.custom__country-list-item__flag.io {
  height: 10px;
  background-position: -2435px 0px;
}
.custom__country-list-item__flag.iq {
  height: 14px;
  background-position: -2457px 0px;
}
.custom__country-list-item__flag.ir {
  height: 12px;
  background-position: -2479px 0px;
}
.custom__country-list-item__flag.is {
  height: 15px;
  background-position: -2501px 0px;
}
.custom__country-list-item__flag.it {
  height: 14px;
  background-position: -2523px 0px;
}
.custom__country-list-item__flag.je {
  height: 12px;
  background-position: -2545px 0px;
}
.custom__country-list-item__flag.jm {
  height: 10px;
  background-position: -2567px 0px;
}
.custom__country-list-item__flag.jo {
  height: 10px;
  background-position: -2589px 0px;
}
.custom__country-list-item__flag.jp {
  height: 14px;
  background-position: -2611px 0px;
}
.custom__country-list-item__flag.ke {
  height: 14px;
  background-position: -2633px 0px;
}
.custom__country-list-item__flag.kg {
  height: 12px;
  background-position: -2655px 0px;
}
.custom__country-list-item__flag.kh {
  height: 13px;
  background-position: -2677px 0px;
}
.custom__country-list-item__flag.ki {
  height: 10px;
  background-position: -2699px 0px;
}
.custom__country-list-item__flag.km {
  height: 12px;
  background-position: -2721px 0px;
}
.custom__country-list-item__flag.kn {
  height: 14px;
  background-position: -2743px 0px;
}
.custom__country-list-item__flag.kp {
  height: 10px;
  background-position: -2765px 0px;
}
.custom__country-list-item__flag.kr {
  height: 14px;
  background-position: -2787px 0px;
}
.custom__country-list-item__flag.kw {
  height: 10px;
  background-position: -2809px 0px;
}
.custom__country-list-item__flag.ky {
  height: 10px;
  background-position: -2831px 0px;
}
.custom__country-list-item__flag.kz {
  height: 10px;
  background-position: -2853px 0px;
}
.custom__country-list-item__flag.la {
  height: 14px;
  background-position: -2875px 0px;
}
.custom__country-list-item__flag.lb {
  height: 14px;
  background-position: -2897px 0px;
}
.custom__country-list-item__flag.lc {
  height: 10px;
  background-position: -2919px 0px;
}
.custom__country-list-item__flag.li {
  height: 12px;
  background-position: -2941px 0px;
}
.custom__country-list-item__flag.lk {
  height: 10px;
  background-position: -2963px 0px;
}
.custom__country-list-item__flag.lr {
  height: 11px;
  background-position: -2985px 0px;
}
.custom__country-list-item__flag.ls {
  height: 14px;
  background-position: -3007px 0px;
}
.custom__country-list-item__flag.lt {
  height: 12px;
  background-position: -3029px 0px;
}
.custom__country-list-item__flag.lu {
  height: 12px;
  background-position: -3051px 0px;
}
.custom__country-list-item__flag.lv {
  height: 10px;
  background-position: -3073px 0px;
}
.custom__country-list-item__flag.ly {
  height: 10px;
  background-position: -3095px 0px;
}
.custom__country-list-item__flag.ma {
  height: 14px;
  background-position: -3117px 0px;
}
.custom__country-list-item__flag.mc {
  height: 15px;
  background-position: -3139px 0px;
}
.custom__country-list-item__flag.md {
  height: 10px;
  background-position: -3160px 0px;
}
.custom__country-list-item__flag.me {
  height: 10px;
  background-position: -3182px 0px;
}
.custom__country-list-item__flag.mf {
  height: 14px;
  background-position: -3204px 0px;
}
.custom__country-list-item__flag.mg {
  height: 14px;
  background-position: -3226px 0px;
}
.custom__country-list-item__flag.mh {
  height: 11px;
  background-position: -3248px 0px;
}
.custom__country-list-item__flag.mk {
  height: 10px;
  background-position: -3270px 0px;
}
.custom__country-list-item__flag.ml {
  height: 14px;
  background-position: -3292px 0px;
}
.custom__country-list-item__flag.mm {
  height: 14px;
  background-position: -3314px 0px;
}
.custom__country-list-item__flag.mn {
  height: 10px;
  background-position: -3336px 0px;
}
.custom__country-list-item__flag.mo {
  height: 14px;
  background-position: -3358px 0px;
}
.custom__country-list-item__flag.mp {
  height: 10px;
  background-position: -3380px 0px;
}
.custom__country-list-item__flag.mq {
  height: 14px;
  background-position: -3402px 0px;
}
.custom__country-list-item__flag.mr {
  height: 14px;
  background-position: -3424px 0px;
}
.custom__country-list-item__flag.ms {
  height: 10px;
  background-position: -3446px 0px;
}
.custom__country-list-item__flag.mt {
  height: 14px;
  background-position: -3468px 0px;
}
.custom__country-list-item__flag.mu {
  height: 14px;
  background-position: -3490px 0px;
}
.custom__country-list-item__flag.mv {
  height: 14px;
  background-position: -3512px 0px;
}
.custom__country-list-item__flag.mw {
  height: 14px;
  background-position: -3534px 0px;
}
.custom__country-list-item__flag.mx {
  height: 12px;
  background-position: -3556px 0px;
}
.custom__country-list-item__flag.my {
  height: 10px;
  background-position: -3578px 0px;
}
.custom__country-list-item__flag.mz {
  height: 14px;
  background-position: -3600px 0px;
}
.custom__country-list-item__flag.na {
  height: 14px;
  background-position: -3622px 0px;
}
.custom__country-list-item__flag.nc {
  height: 10px;
  background-position: -3644px 0px;
}
.custom__country-list-item__flag.ne {
  height: 15px;
  background-position: -3666px 0px;
}
.custom__country-list-item__flag.nf {
  height: 10px;
  background-position: -3686px 0px;
}
.custom__country-list-item__flag.ng {
  height: 10px;
  background-position: -3708px 0px;
}
.custom__country-list-item__flag.ni {
  height: 12px;
  background-position: -3730px 0px;
}
.custom__country-list-item__flag.nl {
  height: 14px;
  background-position: -3752px 0px;
}
.custom__country-list-item__flag.no {
  height: 15px;
  background-position: -3774px 0px;
}
.custom__country-list-item__flag.np {
  height: 15px;
  background-position: -3796px 0px;
}
.custom__country-list-item__flag.nr {
  height: 10px;
  background-position: -3811px 0px;
}
.custom__country-list-item__flag.nu {
  height: 10px;
  background-position: -3833px 0px;
}
.custom__country-list-item__flag.nz {
  height: 10px;
  background-position: -3855px 0px;
}
.custom__country-list-item__flag.om {
  height: 10px;
  background-position: -3877px 0px;
}
.custom__country-list-item__flag.pa {
  height: 14px;
  background-position: -3899px 0px;
}
.custom__country-list-item__flag.pe {
  height: 14px;
  background-position: -3921px 0px;
}
.custom__country-list-item__flag.pf {
  height: 14px;
  background-position: -3943px 0px;
}
.custom__country-list-item__flag.pg {
  height: 15px;
  background-position: -3965px 0px;
}
.custom__country-list-item__flag.ph {
  height: 10px;
  background-position: -3987px 0px;
}
.custom__country-list-item__flag.pk {
  height: 14px;
  background-position: -4009px 0px;
}
.custom__country-list-item__flag.pl {
  height: 13px;
  background-position: -4031px 0px;
}
.custom__country-list-item__flag.pm {
  height: 14px;
  background-position: -4053px 0px;
}
.custom__country-list-item__flag.pn {
  height: 10px;
  background-position: -4075px 0px;
}
.custom__country-list-item__flag.pr {
  height: 14px;
  background-position: -4097px 0px;
}
.custom__country-list-item__flag.ps {
  height: 10px;
  background-position: -4119px 0px;
}
.custom__country-list-item__flag.pt {
  height: 14px;
  background-position: -4141px 0px;
}
.custom__country-list-item__flag.pw {
  height: 13px;
  background-position: -4163px 0px;
}
.custom__country-list-item__flag.py {
  height: 11px;
  background-position: -4185px 0px;
}
.custom__country-list-item__flag.qa {
  height: 8px;
  background-position: -4207px 0px;
}
.custom__country-list-item__flag.re {
  height: 14px;
  background-position: -4229px 0px;
}
.custom__country-list-item__flag.ro {
  height: 14px;
  background-position: -4251px 0px;
}
.custom__country-list-item__flag.rs {
  height: 14px;
  background-position: -4273px 0px;
}
.custom__country-list-item__flag.ru {
  height: 14px;
  background-position: -4295px 0px;
}
.custom__country-list-item__flag.rw {
  height: 14px;
  background-position: -4317px 0px;
}
.custom__country-list-item__flag.sa {
  height: 14px;
  background-position: -4339px 0px;
}
.custom__country-list-item__flag.sb {
  height: 10px;
  background-position: -4361px 0px;
}
.custom__country-list-item__flag.sc {
  height: 10px;
  background-position: -4383px 0px;
}
.custom__country-list-item__flag.sd {
  height: 10px;
  background-position: -4405px 0px;
}
.custom__country-list-item__flag.se {
  height: 13px;
  background-position: -4427px 0px;
}
.custom__country-list-item__flag.sg {
  height: 14px;
  background-position: -4449px 0px;
}
.custom__country-list-item__flag.sh {
  height: 10px;
  background-position: -4471px 0px;
}
.custom__country-list-item__flag.si {
  height: 10px;
  background-position: -4493px 0px;
}
.custom__country-list-item__flag.sj {
  height: 15px;
  background-position: -4515px 0px;
}
.custom__country-list-item__flag.sk {
  height: 14px;
  background-position: -4537px 0px;
}
.custom__country-list-item__flag.sl {
  height: 14px;
  background-position: -4559px 0px;
}
.custom__country-list-item__flag.sm {
  height: 15px;
  background-position: -4581px 0px;
}
.custom__country-list-item__flag.sn {
  height: 14px;
  background-position: -4603px 0px;
}
.custom__country-list-item__flag.so {
  height: 14px;
  background-position: -4625px 0px;
}
.custom__country-list-item__flag.sr {
  height: 14px;
  background-position: -4647px 0px;
}
.custom__country-list-item__flag.ss {
  height: 10px;
  background-position: -4669px 0px;
}
.custom__country-list-item__flag.st {
  height: 10px;
  background-position: -4691px 0px;
}
.custom__country-list-item__flag.sv {
  height: 12px;
  background-position: -4713px 0px;
}
.custom__country-list-item__flag.sx {
  height: 14px;
  background-position: -4735px 0px;
}
.custom__country-list-item__flag.sy {
  height: 14px;
  background-position: -4757px 0px;
}
.custom__country-list-item__flag.sz {
  height: 14px;
  background-position: -4779px 0px;
}
.custom__country-list-item__flag.ta {
  height: 10px;
  background-position: -4801px 0px;
}
.custom__country-list-item__flag.tc {
  height: 10px;
  background-position: -4823px 0px;
}
.custom__country-list-item__flag.td {
  height: 14px;
  background-position: -4845px 0px;
}
.custom__country-list-item__flag.tf {
  height: 14px;
  background-position: -4867px 0px;
}
.custom__country-list-item__flag.tg {
  height: 13px;
  background-position: -4889px 0px;
}
.custom__country-list-item__flag.th {
  height: 14px;
  background-position: -4911px 0px;
}
.custom__country-list-item__flag.tj {
  height: 10px;
  background-position: -4933px 0px;
}
.custom__country-list-item__flag.tk {
  height: 10px;
  background-position: -4955px 0px;
}
.custom__country-list-item__flag.tl {
  height: 10px;
  background-position: -4977px 0px;
}
.custom__country-list-item__flag.tm {
  height: 14px;
  background-position: -4999px 0px;
}
.custom__country-list-item__flag.tn {
  height: 14px;
  background-position: -5021px 0px;
}
.custom__country-list-item__flag.to {
  height: 10px;
  background-position: -5043px 0px;
}
.custom__country-list-item__flag.tr {
  height: 14px;
  background-position: -5065px 0px;
}
.custom__country-list-item__flag.tt {
  height: 12px;
  background-position: -5087px 0px;
}
.custom__country-list-item__flag.tv {
  height: 10px;
  background-position: -5109px 0px;
}
.custom__country-list-item__flag.tw {
  height: 14px;
  background-position: -5131px 0px;
}
.custom__country-list-item__flag.tz {
  height: 14px;
  background-position: -5153px 0px;
}
.custom__country-list-item__flag.ua {
  height: 14px;
  background-position: -5175px 0px;
}
.custom__country-list-item__flag.ug {
  height: 14px;
  background-position: -5197px 0px;
}
.custom__country-list-item__flag.um {
  height: 11px;
  background-position: -5219px 0px;
}
.custom__country-list-item__flag.un {
  height: 14px;
  background-position: -5241px 0px;
}
.custom__country-list-item__flag.us {
  height: 11px;
  background-position: -5263px 0px;
}
.custom__country-list-item__flag.uy {
  height: 14px;
  background-position: -5285px 0px;
}
.custom__country-list-item__flag.uz {
  height: 10px;
  background-position: -5307px 0px;
}
.custom__country-list-item__flag.va {
  height: 15px;
  background-position: -5329px 0px;
}
.custom__country-list-item__flag.vc {
  height: 14px;
  background-position: -5346px 0px;
}
.custom__country-list-item__flag.ve {
  height: 14px;
  background-position: -5368px 0px;
}
.custom__country-list-item__flag.vg {
  height: 10px;
  background-position: -5390px 0px;
}
.custom__country-list-item__flag.vi {
  height: 14px;
  background-position: -5412px 0px;
}
.custom__country-list-item__flag.vn {
  height: 14px;
  background-position: -5434px 0px;
}
.custom__country-list-item__flag.vu {
  height: 12px;
  background-position: -5456px 0px;
}
.custom__country-list-item__flag.wf {
  height: 14px;
  background-position: -5478px 0px;
}
.custom__country-list-item__flag.ws {
  height: 10px;
  background-position: -5500px 0px;
}
.custom__country-list-item__flag.xk {
  height: 15px;
  background-position: -5522px 0px;
}
.custom__country-list-item__flag.ye {
  height: 14px;
  background-position: -5544px 0px;
}
.custom__country-list-item__flag.yt {
  height: 14px;
  background-position: -5566px 0px;
}
.custom__country-list-item__flag.za {
  height: 14px;
  background-position: -5588px 0px;
}
.custom__country-list-item__flag.zm {
  height: 14px;
  background-position: -5610px 0px;
}
.custom__country-list-item__flag.zw {
  height: 10px;
  background-position: -5632px 0px;
}

.custom__country-list-item__flag {
  height: 15px;
  box-shadow: 0px 0px 1px 0px #888;
  background-image: url('data:image/png;base64,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');
  background-repeat: no-repeat;
  background-color: #dbdbdb;
  background-position: 20px 0;
  width: 20px;
}
`;
    const form = document.getElementById(this.formId);
    form.prepend(style);
  };
}
