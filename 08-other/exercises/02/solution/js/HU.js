const HU = {
  date(date = new Date()) {
    return Intl.DateTimeFormat('hu-HU').format(date);
  },

  currency(randomNum) {
    return Intl.NumberFormat('hu-HU', {
      style: 'currency',
      currency: 'HUF',
    }).format(randomNum);
  },
  list(randomArr = []) {
    let finalString = '';
    for (let i = 0; i < randomArr.length; i += 1) {
      if (i === randomArr.length - 1) finalString += randomArr[i];
      if (i === randomArr.length - 2) finalString += `${randomArr[i]} és `;
      if (i < randomArr.length - 2) finalString += `${randomArr[i]}, `;
    }
    return finalString;
  },
};

export default HU;
