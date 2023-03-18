my_info = {
    first_name : 'olawale',
    last_name : 'oyenuga',
    state_of_origin : 'ogun state',
    nationality : 'nigerian',
    occupation : 'geologist',
    height : '1.86 metres',
    weight : '2000 pounds',

    all_info : function () {
        return this;
    }
}

console.log(my_info.all_info());