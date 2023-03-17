//  Дано масив, потрібно з нього зібрати об'єкт спираючить на його батьківський об'єкт
// const inputDataArray = [
//   { parentName: null, itemName: 'programming' }, { parentName: 'mobile', itemName: 'ios' },
//   { parentName: 'mobile', itemName: 'android' }, { parentName: 'backend', itemName: 'nodejs' },
//   { parentName: 'frontend', itemName: 'angular' }, { parentName: 'frontend', itemName: 'react' },
//   { parentName: 'programming', itemName: 'web' }, { parentName: 'frontend', itemName: 'vue' },
//   { parentName: 'backend', itemName: 'nodejs' }, { parentName: 'web', itemName: 'backend' },
//   { parentName: 'programming', itemName: 'mobile' }, { parentName: 'web', itemName: 'frontend' }
// ];
//
// Вихідний обєкт має виглядати так :
// const result = {
//   "programming": {
//     "web": {
//       "backend": {
//         "nodejs": {}
//       },
//       "frontend": {
//         "angular": {},
//         "react": {},
//         "vue": {}
//       }
//     },
//     "mobile": {
//       "ios": {},
//       "android": {}
//     }
//   }
// }

// const inputDataArray = [
//   { parentName: null, itemName: 'programming' }, { parentName: 'mobile', itemName: 'ios' },
//   { parentName: 'mobile', itemName: 'android' }, { parentName: 'backend', itemName: 'nodejs' },
//   { parentName: 'frontend', itemName: 'angular' }, { parentName: 'frontend', itemName: 'react' },
//   { parentName: 'programming', itemName: 'web' }, { parentName: 'frontend', itemName: 'vue' },
//   { parentName: 'backend', itemName: 'nodejs' }, { parentName: 'web', itemName: 'backend' },
//   { parentName: 'programming', itemName: 'mobile' }, { parentName: 'web', itemName: 'frontend' },
//   { parentName: null, itemName: 'frontend' }
// ];
//
// const foo = (arr, parentName) => {
//   const result = {};
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].parentName === parentName) {
//       result[arr[i].itemName] = foo(arr, arr[i].itemName);
//     }
//   }
//   return result;
// }
//
// const obj = foo(inputDataArray, null);
// console.log(JSON.stringify(obj, null, 2));


const fetchUserPosts = async () => {
  const baseURL = 'https://jsonplaceholder.typicode.com/'

  const json = Promise.allSettled([
    fetch(`${baseURL}users`),
    fetch(`${baseURL}users`)
  ])
  console.log(json)
  // console.log(await json.json())
}

fetchUserPosts().then()

fetch(`https://jsonplaceholder.typicode.com/users`)

fetch(`https://jsonplaceholder.typicode.com/users/${id}`)

fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
