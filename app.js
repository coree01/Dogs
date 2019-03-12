//Jquery kör funktion
$(() => {
    const url = 'https://dog.ceo/api/breeds/list/all';
    // Perform an asynchronous HTTP (Ajax) request.
    $.ajax({
        url: url,
        type: "GET",
        // Expect a "json" back from server
        dataType: "json"
      })
      // .done() can take any number of functions or arrays of functions
      // addTo(String arrayName, Object options [, Number index = array.length [, Boolean updateChart = true]])
      .done((d) => {
        addTo(d);
      })
      // om den inte laddar "false"
      .fail(f => {
        console.log(f);
      });
});

const addTo = (data) => {
    console.log(data.message);
    $.each(data.message, (i, value) => {
        $('#list').append(`<li class="no-dots">${i}</li>`)
        
    });
};

$(() =>{

    $.ajax({
        url: 'https://dog.ceo/api/breed/hound/images', type: 'GET', datatype: 'JSON'
    })
    .done((d) =>{
       // loop 10 items
        for (i = 0; i < 10; i++) {
            console.log(d.message[i]);
        }
    })
    .fail(f => {
        console.log(f);
    });

    $.each(data.message, (i, value) =>{
        $('.pictures').append(`<article>${i}</article>`)
        console.log(data)
    });



});





