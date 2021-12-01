$(function () {
    var myarray = [
        "images/image-product-1.jpg",
        "images/image-product-2.jpg",
        "images/image-product-3.jpg",
        "images/image-product-4.jpg"
    ];
    $('.thumbnails img').on('click', function () {
        var myindex = $(this).index();
        var source = $('#lightbox').attr('src', myarray[myindex]);
    });


    $('#lightbox').on('click', function () {
        var lightbox = $('.light-box-container-hidden');
        var lightboxsrc = $('#lightbox').attr('src');
        $('#light-box').attr('src', lightboxsrc);
        lightbox.attr('class', 'light-box-container-show');

    })

    var lightbox = $('#light-box');

    $('.next-button').on('click', function () {
        switch (lightbox.attr('src')) {
            case myarray[0]:
                lightbox.attr('src', myarray[1]);
                break;

            case myarray[1]:
                lightbox.attr('src', myarray[2]);
                break;

            case myarray[2]:
                lightbox.attr('src', myarray[3]);
                break;

            case myarray[3]:
                lightbox.attr('src', myarray[0]);
                break;
        }
    })
    $('.previous-button').on('click', function () {
        switch (lightbox.attr('src')) {
            case myarray[0]:
                lightbox.attr('src', myarray[3]);
                break;

            case myarray[1]:
                lightbox.attr('src', myarray[0]);
                break;

            case myarray[2]:
                lightbox.attr('src', myarray[1]);
                break;

            case myarray[3]:
                lightbox.attr('src', myarray[2]);
                break;
        }
    });
    var $lightBoxThumb = $('.light-box-thumbnails img');

    $lightBoxThumb.on('click', function () {
        var index = $(this).index();
        lightbox.attr('src', myarray[index]);
    })

    $('.close-button').on('click', function () {
        $('.light-box-container-show')
            .attr('class', 'light-box-container-hidden')
    })
    var $plusSign = $('.quantity-increase');
    var $minusSign = $('.quantity-decrease');
    var $quantity = $('.real-quantity');
    var itemCounter = 0;

    $plusSign.on('click', function () {
        itemCounter++;
        $quantity.text(itemCounter);
    })

    $minusSign.on('click', function () {

        if (itemCounter == 0) {
            $quantity.text(0);
        }
        else {
            itemCounter--;
            $quantity.text(itemCounter);

        }
    });
    var $addCartBtn = $('.add-cart-btn');
    $addCartBtn.on('click', function () {
        if (itemCounter > 0) {
            $('.cart-container').show();
            $('.empty-cart-msg').hide();
            var qtyIndicatorValue = $('#quantity-indicator').text();

            var newQty = parseInt(itemCounter)
                + parseInt(qtyIndicatorValue);
            $('#quantity-indicator').text(newQty)
                .show();

            $('#final-quantity').html(newQty + " &nbsp; ");
            var totalPrice = newQty * 125;
            var dollarsign = " &dollar;";
            $('#final-price').html(dollarsign + totalPrice + '.00');
            itemCounter = 0;
            $quantity.text(itemCounter);
        }



    });

    $('.cart').on('click', function () {

        if ($('#quantity-indicator').text() == 0) {
            $('.empty-cart-msg').show();
        }
        $('.open-cart').toggle();

    });
    $('.check-out').on('click', function () {
        $('.cart-container').hide();
        $('#quantity-indicator').text(0).hide();
        $('.empty-cart-msg').show();


    });
    var delItem = $('.delete-icon');
    delItem.on('click', function () {
        $('.cart-container').hide();
        $('#quantity-indicator').text(0).hide();
        $('.empty-cart-msg').show();

    })
    var avatar = $('.avatar');
    avatar.on('click', function () {
        if ($('#quantity-indicator').text() == 0) {
            $('.empty-cart-msg').show();

        }
        $('.open-cart').toggle();
    })

    var $menu = $('.menuitems');
    var $menuClose = $('#close-icon');
    $('.menu-icon').on('click', function () {
        $menu.css({
            'display': 'block',
        });
        $menuClose.css('display', 'block');
    })

    $menuClose.on('click', function () {
        $menu.css({
           
            'display': 'none',
        })
        $menuClose.fadeOut();
    })

});