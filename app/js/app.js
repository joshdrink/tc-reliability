// Clone Playground: JavaScript

// Age of Consent ==============================================================
$("[data-gc-parent-guardian-consent-trigger]").on("click", function() {
    if ($(this).hasClass("active")) {

    } else {
        // Triger this elements stuff.
        $(this).addClass("active");
        $("[data-gc-parent-guardian-consent]").removeClass("hidden");
        // Remove alternative option's stuff.
        $("[data-gc-personal-consent-trigger]").removeClass("active");
        $("[data-gc-personal-consent]").addClass("hidden");
    }
});

$("[data-gc-personal-consent-trigger]").on("click", function() {
    if ($(this).hasClass("active")) {

    } else {
        // Triger this elements stuff.
        $(this).addClass("active");
        $("[data-gc-personal-consent]").removeClass("hidden");
        // Remove alternative option's stuff.
        $("[data-gc-parent-guardian-consent-trigger]").removeClass("active");
        $("[data-gc-parent-guardian-consent]").addClass("hidden");
    }
});

// Birth Name ==================================================================
$("[data-gc-birth-name-same-trigger]").on("click", function() {
    if ($(this).hasClass("active")) {

    } else {
        // Triger this elements stuff.
        // Remove alternative option's stuff.
        $("[data-gc-birth-name-different-trigger]").removeClass("active");
        $("[data-gc-birth-name-different]").addClass("hidden");
    }
});

$("[data-gc-birth-name-different-trigger]").on("click", function() {
    if ($(this).hasClass("active")) {

    } else {
        // Triger this elements stuff.
        $(this).addClass("active");
        $("[data-gc-birth-name-different]").removeClass("hidden");
        // Remove alternative option's stuff.
        $("[data-gc-birth-name-same-trigger]").removeClass("active");
        $("[data-gc-birth-name-same]").addClass("hidden");
    }
});

// Legal Names =================================================================
$("[data-gc-legal-name-same-trigger]").on("click", function() {
    if ($(this).hasClass("active")) {

    } else {
        // Triger this elements stuff.
        // Remove alternative option's stuff.
        $("[data-gc-legal-name-different-trigger]").removeClass("active");
        $("[data-gc-legal-name-different]").addClass("hidden");
    }
});

$("[data-gc-legal-name-different-trigger]").on("click", function() {
    if ($(this).hasClass("active")) {

    } else {
        // Triger this elements stuff.
        $(this).addClass("active");
        $("[data-gc-legal-name-different]").removeClass("hidden");
        // Remove alternative option's stuff.
        $("[data-gc-legal-name-same-trigger]").removeClass("active");
        $("[data-gc-legal-name-same]").addClass("hidden");
    }
});

    // Repeater ----------------------------------------------------------------