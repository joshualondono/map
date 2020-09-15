    let users = [
    {
    firstName: 'Joe',
    lastName:'Orin',
    car: 'Porsche',
    dog:'Shitzu',
    },
    {
    firstName: 'Lori',
    lastName:"Foster",
    car: 'Porsche',
    dog:'German Shepherd'
    },
    {
    firstName: 'Guy',
    lastName:'Peters',
    car: 'Chevrolet',
    dog:'Poodle'
    },
    {
    firstName: 'Lori',
    lastName:'Foster',
    car: 'Toyota',
    dog:'German Shepard'
    }
    ];
    
  users.map( user => { console.log (`${user.firstName} ${user.lastName}`) } );

    
  const users2 = [
    { name: 'pan', likes: 'lasagne' },
    { name: 'lena', likes: 'wine' },
    { name: 'jill', likes: 'tacos' },
    { name: 'conner', likes: 'turkey' }
    ];


  users2.reduce((acc, cur) => {

  const name = cur.name
  const likes = cur.likes
  const age = name.length * 10
  
  const obj = {}
  obj.[name] = likes
  obj.age = age
  
  acc.push(obj)
  
  return acc;
  
}, []);
