define(['jquery'], function ($) {

    function ensureElement($ele) {
        if (typeof $ele == 'string') {
            $ele = $($ele);
        }
        return $ele;
    }

    return function ($menuLink, $menu, menuActiveClass) {
        menuActiveClass = menuActiveClass || 'active';

        $menu = ensureElement($menu);
        $menuLink = ensureElement($menuLink);

        $menuLink.on('click', function (e) {
            e.preventDefault();
            $menu.toggleClass(menuActiveClass);
            $menuLink.toggleClass(menuActiveClass);
        });
    };

});

