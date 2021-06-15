const isValideName = (name = '') => !/[^А-ЯЁёЙйа-яA-Za-z\s]/.test(name);

const isValideEmail = email => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const isValideForm = valueObj => {
  const errorMessages = [];
  const phoneArr = valueObj.phone.match(/\d/g);
  let isError = false;

  if (valueObj.name.trim('') === '') {
    isError = true;
    errorMessages.push({
      message: 'Имя не может быть пустым',
      field: 'client-name',
    });
  }

  if (valueObj.name.trim('').length <= 5) {
    isError = true;
    errorMessages.push({
      message: 'Имя слишком короткое',
      field: 'client-name',
    });
  }

  if (!isValideEmail(valueObj.email.trim(''))) {
    isError = true;
    errorMessages.push({
      message: 'Неправильно введен email',
      field: 'client-email',
    });
  }

  if (phoneArr.length < 12) {
    isError = true;
    errorMessages.push({
      message: 'Неверно введен номер телефона',
      field: 'client-phone',
    });
  }

  return {
    isError: isError,
    messages: errorMessages,
  };
};

export { isValideName, isValideEmail, isValideForm };
