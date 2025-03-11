const users = [
    { id: 1, name: "Alice Johnson", email: "alice@example.com", age: 25 },
    { id: 2, name: "Bob Smith", email: "bob@example.com", age: 30 },
    { id: 3, name: "Charlie Davis", email: "charlie@example.com", age: 28 },
    { id: 4, name: "David Brown", email: "david@example.com", age: 35 },
    { id: 5, name: "Emma Wilson", email: "emma@example.com", age: 22 },
    { id: 6, name: "Frank Harris", email: "frank@example.com", age: 40 },
    { id: 7, name: "Grace Clark", email: "grace@example.com", age: 27 },
    { id: 8, name: "Henry Lee", email: "henry@example.com", age: 33 },
    { id: 9, name: "Ivy Adams", email: "ivy@example.com", age: 29 },
    { id: null, name: "Jack White", email: "jack@example.com", age: 31 }
  ];

  const results = users.map(u => u.id !== null);
  console.log(`${results} \n size: ${results.length}`);