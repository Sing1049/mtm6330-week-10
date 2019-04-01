
  $(document).ready(function ($) {
  $('p').css('border-bottom', '1px solid black')
  $('.first').css('border-color', 'red')
  $('#special').css('background-color', '#ffcc00')
  $('p.first small').css('background-color', 'lightgrey')

  // $('.first').text('Lets learn <em>jQuery</em>')
  $('.first').html('Lets learn <em>jQuery</em>')
  $('.first').prepend('<h2>Welcome</h2>')
  $('.first').after('<small>Make webpages interactive</small>')
  $('#yourName').val('Bob Builder')
  var $name = 'Gurjeet'
  console.log($('#yourName').val($name))
  /*
Attribute selector
  */
  $('a[href="#1"]').css('background-color', 'tomato')
  $('a[href^="#"]').css('color', 'grey')
  $('a[href*="google"]').css('font-weight', 'bold')

  /* Animation Function*/
  // $('.card:first').delay(1000).hide(400).show(800, function () { alert('We\'re Back!') })
  $('.card').animate({ borderRadius: '20px' }, 400)
  $('img:first').attr('src'
  , './img/image-5.jpg')
  // class method
  // console.log($('img:first').hasClass('special'))
  // $('img').addClass('special')
  $('img').toggleClass('special')

  // // event on elements
  //  $('img').on('click', function(){
  //    // what u wanna do on click
  //  })

  $('img').click(function () {
    console.log($(this).attr('src'))
    $(this).toggleClass('special')
    $(this).attr('src', './img/image-4.jpg')
  })

  /* AJAX */
  $('#content').load('./about.html')
  $('#contentNav .nav-link').click(function (e) {
    e.preventDefault()
    var page = $(this).attr('href')
    $('.active').removeClass('active')
    $(this).addClass('active')
    console.log(page)
    $('#content').fadeOut(500, function () {
      $('#content').load(page)
    }).fadIn(500)
  })

  /* Using local JSON file with AJAX */
  $.ajax({
    url: 'data/posts.json',
    type: 'GET',
    dataType: 'json'
  }).done(function (data) {
    console.log(data)
    var numPosts = data.posts.length
    for (var i = 0; i < numPosts; i++) {
      var post = '<div class="col-sm-6 p-5"><h3>'
      post += (i + 1) + '.' + data.posts[i].title
      post += '</h3><p>'
      post += data.posts[i].body
      post += '</p></div>'
      $('#posts').append(post)
    }

    // var posts = JSON.parse(data)
    // console.log(posts)
  })
})
