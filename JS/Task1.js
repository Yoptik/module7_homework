const student = {
  имя: 'Ivan',
  фамилия: 'Ivanov',
  город: 'Moskow'
};
  function data(user) {
    for (let key in user) {
      if (user.hasOwnProperty(key)) {
        console.log(`${key}: ${user[key]}`);
      };
    };
  };

data(student);
