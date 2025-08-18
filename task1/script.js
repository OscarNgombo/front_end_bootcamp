document.addEventListener("DOMContentLoaded", function () {
  let firstName = document.getElementById("firstName");
  let middleName = document.getElementById("middleName");
  let surname = document.getElementById("surname");
  let idNumber = document.getElementById("idNumber");
  let email = document.getElementById("email");
  let dob = document.getElementById("dob");
  let gender = document.getElementsByName("gender");
  let profilePic = document.getElementById("profilePicture");
  let phone = document.getElementById("phone");
  let address = document.getElementById("address");
  let city = document.getElementById("city");
  let country = document.getElementById("country");
  let emergencyContact = document.getElementById("emergencyContact");
  let maritalStatus = document.getElementById("maritalStatus");
  let nationality = document.getElementById("nationality");
  let bio = document.getElementById("bio");
  let skills = document.getElementById("skills");
  let languages = document.getElementById("languages");
  let newsletter = document.getElementById("newsletter");
  let terms = document.getElementById("terms");
  let marketing = document.getElementById("marketing");

  function isString(value) {
    return typeof value === "string";
  }
  function isNumber(value) {
    console.log(typeof value);
    return typeof value === "number";
  }
  function isBoolean(value) {
    return typeof value === "boolean";
  }
  function isUndefined(value) {
    return typeof value === "undefined";
  }
  function isNull(value) {
    value = value.trim();
    return value === null;
  }
  function isArray(value) {
    return Array.isArray(value);
  }
  function isObject(value) {
    return typeof value === "object";
  }
  function isFunction(value) {
    return typeof value === "function";
  }
  function isDate(value) {
    return value instanceof Date;
  }
  function isValidEmail(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  function isValidPhone(phone) {
    const re = /^\d{10}$/;
    return re.test(String(phone));
  }

  function inputFieldValue(element) {
    const value = element.value;
    const type = element.type;
    const name = element.name;
    const required = element.required;

    if (required === true) {
      if (value.trim() === "" || isNull(value)) {
        console.log(name + " Cannot be empty");
      } else {
        if (type === "text" || type === "email") {
          if (type === "text") {
            console.log("Is Input a String? ", isString(value));
          } else if (type === "email") {
            console.log("Is Input a Valid Email? ", isValidEmail(value));
          }
        } else if (type === "tel") {
          console.log("Is Input a Valid Phone Number? ", isValidPhone(value));
        } else if (type === "number") {
          console.log("Is Input a Number? ", isNumber(Number(value)));
        } else if (type === "date") {
          console.log("Is Input a Date? ", isDate(new Date(value)));
        } else if (type === "checkbox" || type === "radio") {
          console.log("Is Input a Boolean? ", isBoolean(element.checked));
        } else if (type === "file") {
          console.log("Is Input an Array (File)? ", isArray(element.files));
        } else if (type === "select-one") {
          console.log("Is Input an Object (Select-one)? ", isObject(value));
        } else if (type === "select-multiple") {
          console.log(
            "Is Input an Array (Select-multiple)? ",
            isArray(
              Array.from(element.options)
                .filter((option) => option.selected)
                .map((option) => option.value)
            )
          );
        } else if (type === "textarea") {
          console.log("Is Input a String? ", isString(value));
        } else if (type === "undefined") {
          console.log("Is Input an Undefined? ", isUndefined(value));
        } else {
          console.log("Invalid Input Type");
        }
      }
    } else {
      console.log(name, " This is an optional field");
    }
  }

  firstName.addEventListener("blur", () => {
    inputFieldValue(firstName);
  });
  middleName.addEventListener("blur", () => {
    inputFieldValue(middleName);
  });
  surname.addEventListener("blur", () => {
    inputFieldValue(surname);
  });
  idNumber.addEventListener("blur", () => {
    inputFieldValue(idNumber);
  });
  email.addEventListener("blur", () => {
    inputFieldValue(email);
  });
  dob.addEventListener("blur", () => {
    inputFieldValue(dob);
  });
  gender.forEach((radio) =>
    radio.addEventListener("blur", () => {
      inputFieldValue(radio);
    })
  );
  profilePic.addEventListener("blur", () => {
    inputFieldValue(profilePic);
  });
  phone.addEventListener("blur", () => {
    inputFieldValue(phone);
  });
  address.addEventListener("blur", () => {
    const text = address.value.trim();

    try {
      const address = JSON.parse(text);
      console.log(address.type);
      inputFieldValue(address);
    } catch (error) {
      console.error("Invalid JSON:", error.message);
      alert("Please enter valid JSON.");
    }
  });
  city.addEventListener("blur", () => {
    inputFieldValue(city);
  });
  country.addEventListener("blur", () => {
    inputFieldValue(country);
  });
  emergencyContact.addEventListener("blur", () => {
    inputFieldValue(emergencyContact);
  });
  maritalStatus.addEventListener("blur", () => {
    inputFieldValue(maritalStatus);
  });
  nationality.addEventListener("blur", () => {
    inputFieldValue(nationality);
  });
  bio.addEventListener("blur", () => {
    inputFieldValue(bio);
  });
  skills.addEventListener("blur", () => {
    inputFieldValue(skills);
  });
  languages.addEventListener("blur", () => {
    languages = languages.value.split(",");
    console.log(languages.type);
    inputFieldValue(languages);
  });
  newsletter.addEventListener("blur", () => {
    inputFieldValue(newsletter);
  });
  terms.addEventListener("blur", () => {
    inputFieldValue(terms);
  });
  marketing.addEventListener("blur", () => {
    inputFieldValue(marketing);
  });
});
