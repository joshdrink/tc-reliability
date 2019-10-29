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

// Citizenship =================================================================
$("[data-gc-citizen-true-trigger]").on("click", function() {
    if ($(this).hasClass("active")) {

    } else {
        // Triger this elements stuff.
        // Remove alternative option's stuff.
        $("[data-gc-citizen-false-trigger]").removeClass("active");
        $("[data-gc-citizen-false]").addClass("hidden");
    }
});

$("[data-gc-citizen-false-trigger]").on("click", function() {
    if ($(this).hasClass("active")) {

    } else {
        // Triger this elements stuff.
        $(this).addClass("active");
        $("[data-gc-citizen-false]").removeClass("hidden");
        // Remove alternative option's stuff.
        $("[data-gc-citizen-true-trigger]").removeClass("active");
        $("[data-gc-citizen-true]").addClass("hidden");
    }
});

// Multiple Citizenship ========================================================
$("[data-gc-multiple-citizen-true-trigger]").on("click", function() {
    if ($(this).hasClass("active")) {

    } else {
        // Triger this elements stuff.
        $(this).addClass("active");
        $("[data-gc-multiple-citizen-true]").removeClass("hidden");
        // Remove alternative option's stuff.
        $("[data-gc-multiple-citizen-false-trigger]").removeClass("active");
        $("[data-gc-multiple-citizen-false]").addClass("hidden");
    }
});

$("[data-gc-multiple-citizen-false-trigger]").on("click", function() {
    if ($(this).hasClass("active")) {

    } else {
        // Triger this elements stuff.
        // Remove alternative option's stuff.
        $("[data-gc-multiple-citizen-true-trigger]").removeClass("active");
        $("[data-gc-multiple-citizen-true]").addClass("hidden");
    }
});

// Born Outside the Country ====================================================
$("[data-gc-home-select]").on("click", function() {
    if ($(this).val() === "Canada") {
        $("[data-gc-foreign-born]").addClass("hidden");
    } else {
        $("[data-gc-foreign-born]").removeClass("hidden");
    }
});

// Naturalization ==============================================================
$("[data-gc-naturalization-true-trigger]").on("click", function() {
    if ($(this).hasClass("active")) {

    } else {
        // Triger this elements stuff.
        $(this).addClass("active");
        $("[data-gc-naturalization-true]").removeClass("hidden");
        // Remove alternative option's stuff.
        $("[data-gc-naturalization-false-trigger]").removeClass("active");
        $("[data-gc-naturalization-false]").addClass("hidden");
    }
});

$("[data-gc-naturalization-false-trigger]").on("click", function() {
    if ($(this).hasClass("active")) {

    } else {
        // Triger this elements stuff.
        $(this).addClass("active");
        $("[data-gc-naturalization-false]").removeClass("hidden");
        // Remove alternative option's stuff.
        $("[data-gc-naturalization-true-trigger]").removeClass("active");
        $("[data-gc-naturalization-true]").addClass("hidden");
    }
});

// Naturalization w/ Citizenship ===============================================
$("[data-gc-naturalization-application-true-trigger]").on("click", function() {
    if ($(this).hasClass("active")) {

    } else {
        // Triger this elements stuff.
        $(this).addClass("active");
        $("[data-gc-naturalization-application-true]").removeClass("hidden");
        // Remove alternative option's stuff.
        $("[data-gc-naturalization-application-false-trigger]").removeClass("active");
        $("[data-gc-naturalization-application-false]").addClass("hidden");
    }
});

$("[data-gc-naturalization-application-false-trigger]").on("click", function() {
    if ($(this).hasClass("active")) {

    } else {
        // Triger this elements stuff.
        $(this).addClass("active");
        $("[data-gc-naturalization-application-false]").removeClass("hidden");
        // Remove alternative option's stuff.
        $("[data-gc-naturalization-application-true-trigger]").removeClass("active");
        $("[data-gc-naturalization-application-true]").addClass("hidden");
    }
});