function limit(val, max) {
  if (val.length === 1 && val[0] > max[0]) {
    val = "0" + val;
  }

  if (val.length === 2) {
    if (Number(val) === 0) {
      val = "01";

      //this can happen when user paste number
    } else if (val > max) {
      val = max;
    }
  }

  if (val.length === 4) {
    if (val > max) {
      val = max;
    }
  }

  return val;
}

function validateDate(val) {
  let month = limit(val.substring(0, 2), "12");
  let date = limit(val.substring(2, 4), 31);
  let year = limit(val.substring(4, 8), new Date().getFullYear());

  return month + "/" + date + "/" + year;
}

function limitStartDate(val, max) {
  if (val.length === 1 && val[0] > max[0]) {
    val = "0" + val;
  }

  if (val.length === 2) {
    if (Number(val) === 0) {
      val = "01";

      //this can happen when user paste number
    } else if (val > max) {
      val = max;
    }
  }

  return val;
}

function startDate(val) {
  let month = limitStartDate(val.substring(0, 2), "12");
  let year = val.substring(2, 6);

  return month + (year.length ? "/" + year : "");
}

function formatTaxId(val) {
  return val.replace(/^(\d{2})(\d{6})(\d)?$/, "$1 - $2");
}

function formatPhoneNumber(str) {
  return str.replace(/^(1|)?(\d{3})(\d{3})(\d{4})(\d)?$/, "($2) $3 - $4");
}

function generateSignature(element, name) {
  const canvas = element;
  const ctx = canvas.getContext("2d");
  ctx.font = "50px Rochester";
  ctx.fillText(name, 20, 90);
  return canvas;
}

export { validateDate, startDate, formatPhoneNumber, generateSignature, formatTaxId };
