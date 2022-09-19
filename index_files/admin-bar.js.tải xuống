(function ($) {

    "use strict";

    $(document).ready(function () {
        $('.pa-clear-cache').on('click', 'a', function (e) {

            e.preventDefault();

            var shouldClearAll = $(e.delegateTarget).hasClass("pa-clear-all-cache"),
                _this = $(e.delegateTarget).find("i");

            if (_this.hasClass("loading"))
                return;

            _this.removeClass("dashicons-yes").addClass("dashicons-update-alt loading");

            $.ajax(
                {
                    url: PaDynamicAssets.ajaxurl,
                    type: 'POST',
                    data: {
                        action: 'pa_clear_cached_assets',
                        security: PaDynamicAssets.nonce,
                        id: !shouldClearAll ? PaDynamicAssets.post_id : ''
                    },
                    success: function (response) {

                        _this.toggleClass("loading dashicons-update-alt dashicons-yes");

                    },
                    error: function (err) {
                        console.log(err);
                    }
                }
            );

        });
    });


})(jQuery);
