export default [
  {
    component: 'InputText',
    rules: {
      required: true,
      max: 255
    },
    data: {
      name: 'Ads[title]',
      label: 'Заголовок',
      hint: '<b>Введите наименование товара, объекта или услуги.</b><br>В заголовке <b>не допускается: номер телефона, электронный адрес, ссылки</b><br>Не допускаются заглавные буквы (кроме аббревиатур).'
    }
  },
  {
    component: 'InputCategory',
    rules: {
      required: true,
      max: 1000
    },
    data: {
      name: 'Ads[category_id]',
      label: 'Категория',
      hint: ''
    }
  },
  {
    component: 'InputTextarea',
    rules: {
      required: true,
      max: 1000
    },
    data: {
      name: 'Ads[content]',
      label: 'Описание',
      hint: '<b>Добавьте описание вашего товара/услуги,</b> укажите преимущества и важные детали.<br>В описании <b>не допускается указание контактных данных.</b><br>Описание должно соответствовать заголовку и предлагаемому товару/услуге.<br>Не допускаются заглавные буквы (кроме аббревиатур).'
    }
  },
  {
    component: 'InputText',
    rules: {
      required: true,
      numeric: true
    },
    data: {
      name: 'Ads[price]',
      label: 'Цена',
      hint: 'Пожалуйста, укажите цену. <b>Обратите внимание, что указание нереальной или условной цены (1 руб., 111 руб.) запрещено.</b></br><b>Внимание, цена указывается в российских рублях</b>'
    }
  },
  {
    component: 'InputUpload',
    data: {
      name: 'file[]',
      label: 'Фотографии',
      multiple: true
    }
  },
  {
    component: 'InputAutocomplete',
    rules: {
      required: true
    },
    data: {
      name: 'Ads[city_id]',
      label: 'Город',
      hint: 'Выберите город из списка',
      items: []
    }
  },
  {
    component: 'InputText',
    rules: {
      required: true,
      alpha: true
    },
    data: {
      name: 'Ads[name]',
      label: 'Имя',
      hint: 'Как к Вам обращаться?'
    }
  },
  {
    component: 'InputPhone',
    rules: {
      required: true,
      min: 12
    },
    data: {
      name: 'Ads[phone]',
      label: 'Телефон',
      hint: 'Как с Вами связаться?'
    }
  },
  {
    component: 'InputText',
    rules: {
      required: true,
      email: true
    },
    data: {
      name: 'Ads[email]',
      label: 'Email',
      hint: 'Вы можете указать публичный емейл в личном кабинете'
    }
  },
  {
    component: 'InputCheckbox',
    rules: {
      required: true,
      is_not: null
    },
    data: {
      name: 'Ads[option2]',
      label: '* Я соглашаюсь с правилами использования сервиса, а также с передачей и обработкой моих данных на RUB-ON. Я подтверждаю своё совершеннолетие и ответственность за размещение объявления',
    }
  },
]