document.addEventListener("DOMContentLoaded", function () {
  const userInfoText = document.getElementById("userInfo");

  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    // randomTheme
    function randomTheme() {
      // red - #850c0c
      // beautiful purple - rebeccapurple;
      // beautiful blue - #333f99
      const colors = ["#850c0c", "rebeccapurple", "#333f99"];
      const ducks = ["duck-light.png", "duck-black.png"];
    }

    const container = document.getElementById("background-body");
    const duck = document.getElementById("duck");
    const blurEffect = document.getElementById("blurEffect");
    container.addEventListener("mousemove", function (event) {
      const containerRect = container.getBoundingClientRect();
      const offsetX = event.clientX - containerRect.left;
      const offsetY = event.clientY - containerRect.top;

      const centerX = containerRect.width / 2;
      const centerY = containerRect.height / 2;

      let duckX = offsetX - centerX;
      let duckY = offsetY - centerY;

      // FOR X
      if (duckX > 125) {
        duckX = -125;
      } else if (duckX < -75) {
        duckX = 75;
      } else {
        duckX > 0 ? (duckX = duckX * -1) : (duckX = duckX * -1);
      }

      // FOR Y
      if (duckY > 125) {
        duckY = -125;
      } else if (duckY < -75) {
        duckY = 75;
      } else {
        duckY > 0 ? (duckY = duckY * -1) : (duckY = duckY * -1);
      }

      const blurEffectX = (offsetX - centerX) / -15;
      const blurEffectY = (offsetY - centerY) / -15;

      duck.style.transform = `translate(${duckX}px, ${duckY}px)`;
      blurEffect.style.transform = `scale(1.3) translate(${blurEffectX}px, ${blurEffectY}px)`;
    });
    // SUBID добавляем
    const activeTab = tabs[0];
    chrome.tabs.executeScript(
      activeTab.id,
      {
        code: `
 (function () {
  const forms = document.querySelectorAll("form");
    forms.forEach((form)=>{
      const formsElements = form.querySelectorAll("input");
        formsElements.forEach(input=>{
            if(input.name == "subid"){
        input.type = "text";
        input.placeholder = "subid";
        input.value = "";
        input.required = "true";
      }
        })
    })  

})();
                    `,
      },
      () => {}
    );
  });

  userInfoText.addEventListener("change", (el) => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const activeTab = tabs[0];
      // Строка с объектом данных
      const valueArray = el.target.value.toString().split(/\s+/);
      console.log(valueArray);
      let object = {};
      let key = null;
      for (let i = 0; i < valueArray.length; i++) {
        if (valueArray[i].includes(":")) {
          key = valueArray[i].replace(":", "");
          object[key] = "";
        } else if (key !== null) {
          object[key] += " " + valueArray[i];
        }
      }
      let filteredObject = {};
      for (elem in object) {
        switch (elem.toLowerCase()) {
          case "first_name":
          case "last_name":
          case "email":
          case "phone":
          case "subid":
          case "sub":
          case "hitid":
          case "click":
          case "click_id":
          case "aff_sub":
            filteredObject[elem.toLowerCase()] = object[elem].trim();
            break;
        }
      }
      console.log("res", filteredObject);

      console.log("in browser extension");

      chrome.tabs.executeScript(
        activeTab.id,
        {
          code: `
 (function () {
  console.log("in browser main first");
  let filteredObject = ${JSON.stringify(filteredObject)};
  console.log("frst", filteredObject);

    const forms = document.querySelectorAll("form");
  forms.forEach((form) => {
    const formsElements = form.querySelectorAll("input");
    formsElements.forEach((input) => {
    
      if (input.name == "phone" || input.id == "phone") {
        input.click();
      }
    });
    formsElements.forEach((input) => {
      const resultSub = ["subid", "sub", "hitid", "click","click_id","aff_sub"];
      if(input.type !== "hidden"){
        input.value = ""
      }
      for (field in filteredObject) {
        input.click();
        if (
          input.name == field ||
          input.id == field  ||
          input.id.includes(field)
        ) {
          input.value += filteredObject[field] || "";
        }
        if(resultSub.includes(input.name) && resultSub.includes(field)){
          console.log(input.name,field)
          input.value = filteredObject[field] || "";
        }
      }
    });
  });

})();
                    `,
        },
        () => {}
      );
    });
  });
});
