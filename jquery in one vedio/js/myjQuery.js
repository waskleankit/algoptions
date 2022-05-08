$(document).ready(function () {
    //Your jquery code here
    // console.log($);
    // console.log(jQuery);
    console.log("We are using jQuery");
    // //jQuery Syntex looks like this
    // $('selector').action()

    //clicks on all the p elements .This is an example of element selector
    // $('p').click();  //click on p
    // $('p').click(function () {
    //     // console.log('you clicked on p');
    //     console.log('you clicked on p', this);
    //     // $('p').hide();
    //     // $(this).hide();
    //     // $('#id').hide();
    //     // $('.class').hide();
    // });  //do this when we click on p

    // $('p').dblclick(function () {

    //     console.log('you double clicked on p', this);

    // });  //do this when we double click on p

    // $('p').mouseenter(function () {

    //     console.log('you entered :', this);

    // }); 

    // $('p').hover(function () {

    //     console.log('you hovered on  :', this);

    // },
    // function (){
    //     console.log('Thanks for coming')
    // }); 

    // //there are three main types of selector in jQuery
    // 1. element selector
    // 2. id selector
    // 3. class selector

    // //1. element selector .This is an example of element selector
    // $('p').click();

    // // 2. id selector .This is an example of id selector
    // $('#second').click();

    // //  3. class selector .This is an example of class selector
    // $('.odd').click();

    // $('*').click() // clicks on all the elements
    // $('p.odd').click()
    // $('p:first').click()


    // Events in jQuery
    //  Mouse events = click, dblclick, mouseenter, mouseleave
    //  KeyboardEvent = keypress, keydown, MediaKeyStatusMap
    //  form events = submit, change, focus, blur
    //  document/window events = load,resize, scroll,unload


    // demoying the on method
    // $('p').on('click',function () {
    //     console.log('Thanks for clicking', this);

    // });   
    $('p').on(
        {
            click: function () {
                console.log('Thanks for clicking', this);
            },
            mouseleave: function () {
                console.log("mouseleave");
            }

        });

    // $('#wiki').hide(1000,function () {
    //     console.log("hidden");
    // })
    // $('#wiki').show(1000,function () {
    //     console.log("show");
    // })

    // $('#but').click(function(){
    //     $('#wiki').toggle(1000);            
    // })

    $('#but').click(function () {
        $('#wiki').fadeOut(2000);
    })



    // fadeIn()
    // fadeOut()
    // fadeToggle()
    // fadeTo()


    // $('#wiki').slideUp(1000)
    // $('#wiki').slideDown(1000)
    // // $('#wiki').slideToggle(1000)

    // Slide methods - speed and callback parameters are optional
    // $('#wiki').slideUp(1000, function(){
    //     console.log('done');
    // })



    // // Animate function in jQuery
    // $('#wiki').animate({ 
    //     opacity: 0.3,
    //     height: '150px',
    //     width: '350px' 
    // }, 2000)

    // $('#wiki').animate({ 
    //     opacity: 0.3,
    //     height: '150px',
    //     width: '350px' 
    // }, "fast")

    $('#wiki').animate({ opacity: 0.3 }, 4000);
    $('#wiki').animate({ opacity: 0.9 }, 4000);
    $('#wiki').animate({ width: '350px' }, 1000);
    // $('#wiki').stop()
    // $('#wiki').text()
    // $('#wiki').text('This is harry')
    // $('body').html('Ankit is king')
    // $('#ta').val()
    // $('#inp').val("setting it to ankit")
    // $('#wiki').empty()
    // $('#wiki').text("you are good")
    // $('#wiki').remove()
    // $('#wiki').addClass('myclass')
    // $('#wiki').addClass('myclass2')
    // $('#wiki').removeClass('myclass2')
    // $('#wiki').css('background-color')
    // $('#wiki').css('background-color','red')




    // //Ajax using jQuery 
    // $.get('https://code.jquery.com/jquery-3.6.0.js')
    // $.get('https://code.jquery.com/jquery-3.6.0.js',function(data,status){alert(data)})
    // $.get('https://code.jquery.com/jquery-3.6.0.js',function(data,status){alert(status)})
    // post('https://code.jquery.com/jquery-3.6.0.js',{name:"Ankit",channel:"code with harry"}), function(data,status){alert(status)}
});















// // console.log($);
// // console.log(jQuery);
// // console.log("We are using jQuery");
// // $('selector').action()
// // $('p').click();
// $('p').click(function(){
//     console.log('you clicked on p');
//     // $('p').hide();
//     // $(this).hide();
//     // $('#id').hide();
//     // $('.class').hide();
// });  //do this when we click on p

// console.log("I am in a new file now");

