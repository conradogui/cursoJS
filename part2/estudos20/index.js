function returnHour(data) {
    if (!(data instanceof Date)) { //data only wil be instance of date if we put that function (new date...)
        console.log('It is not')
    }
}
returnHour(11)//It is not
returnHour(new Date())//dont show any mensage in depuration