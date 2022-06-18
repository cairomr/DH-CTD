let pessoas = [
    { nome: 'Alice', idade: 21 },
    { nome: 'Max', idade: 13 },
    { nome: 'Max', idade: 20 },
    { nome: 'Max', idade: 12 },
    { nome: 'Jane', idade: 20 }
  ];
  
  function agruparPor(objetoArray, propriedade) {
    return objetoArray.reduce(function (acc, obj) {
      let key = obj[propriedade];
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(obj);
      return acc;
    }, {});
  }
  console.log(agruparPor(pessoas));