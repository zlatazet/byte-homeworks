
// Task 1

const response = {
    data: [
      {
        username: "samuel",
        is_active: true,
        created_at: "2020-11-20T09:53:50.000000Z",
      },
      {
        username: "john",
        is_active: false,
        created_at: "2020-11-20T09:53:50.000000Z",
      },
      {
        username: "peter",
        is_active: false,
        created_at: "2020-11-20T09:53:50.000000Z",
      },
    ],
    meta: {
      paging: {
        current: 1,
        next: 2,
        prev: null,
        total: 14,
        per_page: 3,
      },
    },
  };

  const {
      meta: { paging: {total},},
      data: [{is_active: isActive}],
  } = response;
  
  console.log(`total`, total);
  console.log(`isActive`, isActive);

//   Task 2

const user = {
    name: "gabriel",
    surname: "brown",
    age: 17,
    height: 178,
  };

const {
    name,
    surname,
    ...parameters
} = user;

console.log(`name`, name);
console.log(`surname`, surname);
console.log(`parameters`, parameters);

//  Task 3

const maximumNumber = (...numbers) => {
    let maximum = 0;

    numbers.forEach((number) => {
        if (number > maximum) {
            maximum = number;
        }
    });

    return maximum;
}

console.log(maximumNumber(15, 17, 34, 58, 104, 588));

// Task 4

const createNotification = ({
    author = "Guest",
    text,
    receiver,
    time = new Date(),
}) => {
    return `From ${author} to ${receiver}: ${text} (${time.toLocaleDateString()})`;
  };
  
//   const notification = createNotification("Peter","Hello", "Sam", new Date());
  
  
//   const notification = createNotification({
//     receiver: "John", text: "Hi!"
//   });

//   console.log(`notification`, notification);

//   Task 5

let str = "x1y 722a 333 a123v1n a55555a qwe1 1zxc";

const findSymbolText = (text) => {
    return text.match(/\w\d{1,6}\w/g)
};

const symbol = findSymbolText(str);

console.log(`symbol`, symbol)

let address = "ex.ua google.com yandex.ru site.com.ua my-page.com"

const siteAddress = (text) => {
    return /[a-zA-Z0-9\.'-_]{2,}\.\w{2,}/igm.test(address);
};

const addressValid = siteAddress(address);

console.log(`addressValid`, addressValid);

let numbersSample = "133413012123412342134324"

const numbers = (numbers) => {
    return /[0-9]{12,}/igm.test(numbers);
};

const numbersValid = numbers(numbersSample);

console.log(`numbersSample`, numbersValid);