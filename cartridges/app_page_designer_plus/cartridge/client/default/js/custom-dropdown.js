'use strict';

$(function () {
    $(".custom-dropdown").each(function () {
        const $customSelect = $(this);
        const $selectButton = $customSelect.find(".select-button");
        const $dropdown = $customSelect.find(".select-dropdown");
        const $options = $dropdown.find("li");
        const $selectedValue = $selectButton.find(".selected-value");
        const $selectedText = $selectedValue.text();

        let focusedIndex = -1;

        const toggleDropdown = (expand = null) => {
            const isOpen = expand !== null ? expand : $dropdown.hasClass("hidden");
            $dropdown.toggleClass("hidden", !isOpen);
            $selectButton.attr("aria-expanded", isOpen);

            if (isOpen) {
                focusedIndex = $options.index($options.filter(".selected"));
                focusedIndex = focusedIndex === -1 ? 0 : focusedIndex;
                updateFocus();
            } else {
                focusedIndex = -1;
                $selectButton.trigger("focus");
            }
        };

        const updateFocus = () => {
            $options.each(function (index) {
                $(this).attr("tabindex", index === focusedIndex ? "0" : "-1");
                if (index === focusedIndex) {
                    $(this).trigger("focus");
                }
            });
        };

        const handleOptionSelect = ($option) => {
            $options.removeClass("selected");
            $option.addClass("selected");

            // reset selected-value
            $selectedValue.empty();

            // clone swatch if exists
            const $swatch = $option.find("i.swatch").clone();
            const text = $.trim($option.find("span").text());

            if ($swatch.length) {
                $selectedValue.append("Finish: ").append($swatch).append(" ").append(text);
            } else {
                $selectedValue.text($.trim($option.text()));
            }
        };

        // Option click
        $options.on("click", function () {
            handleOptionSelect($(this));
            toggleDropdown(false);
        });

        // Button click
        $selectButton.on("click", function () {
            toggleDropdown();
        });

        // Button keyboard
        $selectButton.on("keydown", function (e) {
            if (e.key === "ArrowDown") {
                e.preventDefault();
                toggleDropdown(true);
            } else if (e.key === "Escape") {
                toggleDropdown(false);
            }
        });

        // Dropdown keyboard
        $dropdown.on("keydown", function (e) {
            if (e.key === "ArrowDown") {
                e.preventDefault();
                focusedIndex = (focusedIndex + 1) % $options.length;
                updateFocus();
            } else if (e.key === "ArrowUp") {
                e.preventDefault();
                focusedIndex = (focusedIndex - 1 + $options.length) % $options.length;
                updateFocus();
            } else if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                handleOptionSelect($options.eq(focusedIndex));
                toggleDropdown(false);
            } else if (e.key === "Escape") {
                toggleDropdown(false);
            }
        });

        // Click outside
        $(document).on("click", function (e) {
            if (!$customSelect.is(e.target) && $customSelect.has(e.target).length === 0) {
                toggleDropdown(false);
            }
        });
    });
});
