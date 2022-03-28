import { DateTime } from "./luxon/src/luxon.js";

const myDate = document.querySelector('.date');

const displayDate = () => {
    window.setInterval(
      () => {
        myDate.innerHTML = `${DateTime.local().toLocaleString(
          DateTime.DATETIME_MED_WITH_SECONDS,
        )}`;
      },
      1000,
      this,
    );
  };


  displayDate();

