//get dom elements
const main = document.getElementById('main');
const addUser = document.getElementById("add-user");
const double = document.getElementById('double');
const filter = document.getElementById('filter');
const sort = document.getElementById('sort');
const sum = document.getElementById('sum');

//Initilize user data array
let data = []; 

//fetch random user from randomuser.me API
// function getRandomUser(){
//     fetch('https://randomuser.me/api')
//     .then(res => res.json())
//     .then(data =>{})
//     console.log(data);
// };
 
// getRandomUser();

//creat async function to get API

async function getRandomUser(){
    const res = await fetch('https://randomuser.me/api')
     const data = await res.json();
     
    //  console.log(data);

    //get user data
    const user = data.results[0];
    // console.log(users);

     //create the new user
     const newUser = {
         name:`${user.name.first} ${user.name.last}`,
         balance:Math.floor(Math.random()*100000),
     }
    //  console.log(newUser);

     //add the new user into the data array
      addData(newUser);
     
};
//function add double money...
function DoubleMoney(){
     data = data.map(user=>{
        return {...user,balance: user.balance*2}
     });
     updateDom();
};

//function to add user data to user data array
 function addData(newUser){
     data.push(newUser);
     //update the dom to display users in the data array

    //  console.log('data array',data);
    updateDom();
};

    //function to formate randon number as money
    
    function formateNumberToDollar(number){
        return number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    };

    //update the UI with data from the user array
    function updateDom(userData = data){
        main.innerHTML = ' <h2><strong>User</strong> Wealth</h2>'
        userData.forEach(user =>{
            const userDiv = document.createElement('div');
            userDiv.classList.add('user');
            userDiv.innerHTML = `<strong>${user.name}</strong><b>
                ${ formateNumberToDollar(user.balance)}</b>`
            main.appendChild(userDiv);
        })
    };

    //add event listener for add users..
    addUser.addEventListener('click',(e)=>{
        getRandomUser()
        
    });
    //2. eventlistener double money
    double.addEventListener('click',DoubleMoney)


getRandomUser(); 


