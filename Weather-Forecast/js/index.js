"use strict";
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
// * Elementos HTML
const form = document.querySelector("#search-form > form");
const input = document.querySelector("#localization-input");
const button = document.querySelector("#localization-button");
const weatherSection = document.querySelector("#weather-section");
// ? Se não for nulo --> '?'
form === null || form === void 0
  ? void 0
  : form.addEventListener("submit", (event) =>
      __awaiter(void 0, void 0, void 0, function* () {
        event.preventDefault();
        if (!input || !weatherSection) return;
        const localization = input.value;
        if (localization.length < 3) {
          alert("O local precisa ter pelo menos três letras!");
          return;
        }
        try {
          // DEFINIR API_KEY DO OPEN WHEATER MAP PARA FUNCIONAR
          const api_key;
          const response = yield fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${localization}&appid=${api_key}&lang=pt_br&units=metric`
          );
          const data = yield response.json();
          const infos = {
            temperature: Math.round(data.main.temp),
            local: data.name,
            icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`,
          };
          weatherSection.innerHTML = `
      <div class="weather-data">
        <h2>${infos.local}</h2>
        <span>${infos.temperature}°C</span>
      </div>
      <img src="${infos.icon}" alt="" />
    `;
          input.value = "";
        } catch (err) {
          console.log("Erro ao obter os dados da API:", err);
        }
      })
    );
