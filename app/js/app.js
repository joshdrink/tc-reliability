// Clone Playground: JavaScript

// Form Type Triggers

    // New App
    $("[data-gc-new-app]").on("click", function() {
        $("[data-gc-form-type]").removeClass("hidden");
    });

    // Reliability
    $("[data-gc-status-reliability-trigger]").on("click", function() {
        // Nav Hide/Show
        $("#navBegin").addClass("hidden")
        $("#navConsent").removeClass("hidden")
        $("#navBackground").removeClass("hidden")
        $("#navResidence").removeClass("hidden")
        $("#navExperience").removeClass("hidden")
        $("#navReferences").removeClass("hidden")
        $("#navEducation").removeClass("hidden")
        $("#navRecord").removeClass("hidden")
        $("#navProNot").addClass("hidden")
        $("#navMaritalStatus").addClass("hidden")
        $("#navRoommates").addClass("hidden")
        $("#navRelatives").addClass("hidden")
        $("#navTravel").addClass("hidden")
        $("#navPassports").addClass("hidden")
        $("#navAssets").addClass("hidden")
        $("#navSummary").removeClass("hidden")
        $("#navStartTrigger").addClass("hidden")
        $("#navSaveTrigger").removeClass("hidden")
        // Section Hide/Show
        $("#sectionConsent").removeClass("hidden")
        $("#sectionBackground").removeClass("hidden")
        $("#sectionResidence").removeClass("hidden")
        $("#sectionExperience").removeClass("hidden")
        $("#sectionReferences").removeClass("hidden")
        $("#sectionEducation").removeClass("hidden")
        $("#sectionRecord").removeClass("hidden")
        $("#sectionProNot").addClass("hidden")
        $("#sectionMaritalStatus").addClass("hidden")
        $("#sectionRoommates").addClass("hidden")
        $("#sectionRelatives").addClass("hidden")
        $("#sectionTravel").addClass("hidden")
        $("#sectionPassports").addClass("hidden")
        $("#sectionAssets").addClass("hidden")
        $("#sectionSummary").removeClass("hidden")
        // Measures
        $("[data-gc-reliability-residence-measure]").removeClass("hidden");
        $("[data-gc-secret-residence-measure]").addClass("hidden");
        $("[data-gc-reliability-residence-date]").removeClass("hidden");
        $("[data-gc-secret-residence-date]").addClass("hidden");
        $("[data-gc-reliability-residence-measure-indicator]").removeClass("hidden");
        $("[data-gc-secret-residence-measure-indicator]").addClass("hidden");
        $("[data-gc-reliability-experience-measure]").removeClass("hidden");
        $("[data-gc-secret-experience-measure]").addClass("hidden");
        $("[data-gc-reliability-experience-date]").removeClass("hidden");
        $("[data-gc-secret-experience-date]").addClass("hidden");
        $("[data-gc-reliability-experience-measure-indicator]").removeClass("hidden");
        $("[data-gc-secret-experience-measure-indicator]").addClass("hidden");
    });

    // Enhanced
    $("[data-gc-status-enhanced-trigger]").on("click", function() {
        // Nav Hide/Show
        $("#navBegin").addClass("hidden")
        $("#navConsent").removeClass("hidden")
        $("#navBackground").removeClass("hidden")
        $("#navResidence").removeClass("hidden")
        $("#navExperience").removeClass("hidden")
        $("#navReferences").removeClass("hidden")
        $("#navEducation").removeClass("hidden")
        $("#navRecord").removeClass("hidden")
        $("#navProNot").removeClass("hidden")
        $("#navMaritalStatus").removeClass("hidden")
        $("#navRoommates").removeClass("hidden")
        $("#navRelatives").addClass("hidden")
        $("#navTravel").addClass("hidden")
        $("#navPassports").addClass("hidden")
        $("#navAssets").addClass("hidden")
        $("#navSummary").removeClass("hidden")
        $("#navStartTrigger").addClass("hidden")
        $("#navSaveTrigger").removeClass("hidden")
        // Section Hide/Show
        $("#sectionConsent").removeClass("hidden")
        $("#sectionBackground").removeClass("hidden")
        $("#sectionResidence").removeClass("hidden")
        $("#sectionExperience").removeClass("hidden")
        $("#sectionReferences").removeClass("hidden")
        $("#sectionEducation").removeClass("hidden")
        $("#sectionRecord").removeClass("hidden")
        $("#sectionProNot").removeClass("hidden")
        $("#sectionMaritalStatus").removeClass("hidden")
        $("#sectionRoommates").removeClass("hidden")
        $("#sectionRelatives").addClass("hidden")
        $("#sectionTravel").addClass("hidden")
        $("#sectionPassports").addClass("hidden")
        $("#sectionAssets").addClass("hidden")
        $("#sectionSummary").removeClass("hidden")
        // Measures
        $("[data-gc-reliability-residence-measure]").removeClass("hidden");
        $("[data-gc-secret-residence-measure]").addClass("hidden");
        $("[data-gc-reliability-residence-date]").removeClass("hidden");
        $("[data-gc-secret-residence-date]").addClass("hidden");
        $("[data-gc-reliability-residence-measure-indicator]").removeClass("hidden");
        $("[data-gc-secret-residence-measure-indicator]").addClass("hidden");
        $("[data-gc-reliability-experience-measure]").removeClass("hidden");
        $("[data-gc-secret-experience-measure]").addClass("hidden");
        $("[data-gc-reliability-experience-date]").removeClass("hidden");
        $("[data-gc-secret-experience-date]").addClass("hidden");
        $("[data-gc-reliability-experience-measure-indicator]").removeClass("hidden");
        $("[data-gc-secret-experience-measure-indicator]").addClass("hidden");
    });

    // Secret
    $("[data-gc-status-secret-trigger]").on("click", function() {
        // Nav Hide/Show
        $("#navBegin").addClass("hidden")
        $("#navConsent").removeClass("hidden")
        $("#navBackground").removeClass("hidden")
        $("#navResidence").removeClass("hidden")
        $("#navExperience").removeClass("hidden")
        $("#navReferences").removeClass("hidden")
        $("#navEducation").removeClass("hidden")
        $("#navRecord").removeClass("hidden")
        $("#navProNot").removeClass("hidden")
        $("#navMaritalStatus").removeClass("hidden")
        $("#navRoommates").removeClass("hidden")
        $("#navRelatives").removeClass("hidden")
        $("#navTravel").addClass("hidden")
        $("#navPassports").addClass("hidden")
        $("#navAssets").addClass("hidden")
        $("#navSummary").removeClass("hidden")
        $("#navStartTrigger").addClass("hidden")
        $("#navSaveTrigger").removeClass("hidden")
        // Section Hide/Show
        $("#sectionConsent").removeClass("hidden")
        $("#sectionBackground").removeClass("hidden")
        $("#sectionResidence").removeClass("hidden")
        $("#sectionExperience").removeClass("hidden")
        $("#sectionReferences").removeClass("hidden")
        $("#sectionEducation").removeClass("hidden")
        $("#sectionRecord").removeClass("hidden")
        $("#sectionProNot").removeClass("hidden")
        $("#sectionMaritalStatus").removeClass("hidden")
        $("#sectionRoommates").removeClass("hidden")
        $("#sectionRelatives").removeClass("hidden")
        $("#sectionTravel").addClass("hidden")
        $("#sectionPassports").addClass("hidden")
        $("#sectionAssets").addClass("hidden")
        $("#sectionSummary").removeClass("hidden")
        // Measures
        $("[data-gc-reliability-residence-measure]").addClass("hidden");
        $("[data-gc-secret-residence-measure]").removeClass("hidden");
        $("[data-gc-reliability-residence-date]").addClass("hidden");
        $("[data-gc-secret-residence-date]").removeClass("hidden");
        $("[data-gc-reliability-residence-measure-indicator]").addClass("hidden");
        $("[data-gc-secret-residence-measure-indicator]").removeClass("hidden");
        $("[data-gc-reliability-experience-measure]").addClass("hidden");
        $("[data-gc-secret-experience-measure]").removeClass("hidden");
        $("[data-gc-reliability-experience-date]").addClass("hidden");
        $("[data-gc-secret-experience-date]").removeClass("hidden");
        $("[data-gc-reliability-experience-measure-indicator]").addClass("hidden");
        $("[data-gc-secret-experience-measure-indicator]").removeClass("hidden");
    });

    // Top Secret
    $("[data-gc-status-top-secret-trigger]").on("click", function() {
        // Nav Hide/Show
        $("#navBegin").addClass("hidden")
        $("#navConsent").removeClass("hidden")
        $("#navBackground").removeClass("hidden")
        $("#navResidence").removeClass("hidden")
        $("#navExperience").removeClass("hidden")
        $("#navReferences").removeClass("hidden")
        $("#navEducation").removeClass("hidden")
        $("#navRecord").removeClass("hidden")
        $("#navProNot").removeClass("hidden")
        $("#navMaritalStatus").removeClass("hidden")
        $("#navRoommates").removeClass("hidden")
        $("#navRelatives").removeClass("hidden")
        $("#navTravel").removeClass("hidden")
        $("#navPassports").removeClass("hidden")
        $("#navAssets").removeClass("hidden")
        $("#navSummary").removeClass("hidden")
        $("#navStartTrigger").addClass("hidden")
        $("#navSaveTrigger").removeClass("hidden")
        // Section Hide/Show
        $("#sectionConsent").removeClass("hidden")
        $("#sectionBackground").removeClass("hidden")
        $("#sectionResidence").removeClass("hidden")
        $("#sectionExperience").removeClass("hidden")
        $("#sectionReferences").removeClass("hidden")
        $("#sectionEducation").removeClass("hidden")
        $("#sectionRecord").removeClass("hidden")
        $("#sectionProNot").removeClass("hidden")
        $("#sectionMaritalStatus").removeClass("hidden")
        $("#sectionRoommates").removeClass("hidden")
        $("#sectionRelatives").removeClass("hidden")
        $("#sectionTravel").removeClass("hidden")
        $("#sectionPassports").removeClass("hidden")
        $("#sectionAssets").removeClass("hidden")
        $("#sectionSummary").removeClass("hidden")
        // Measures
        $("[data-gc-reliability-residence-measure]").addClass("hidden");
        $("[data-gc-secret-residence-measure]").removeClass("hidden");
        $("[data-gc-reliability-residence-date]").addClass("hidden");
        $("[data-gc-secret-residence-date]").removeClass("hidden");
        $("[data-gc-reliability-residence-measure-indicator]").addClass("hidden");
        $("[data-gc-secret-residence-measure-indicator]").removeClass("hidden");
        $("[data-gc-reliability-experience-measure]").addClass("hidden");
        $("[data-gc-secret-experience-measure]").removeClass("hidden");
        $("[data-gc-reliability-experience-date]").addClass("hidden");
        $("[data-gc-secret-experience-date]").removeClass("hidden");
        $("[data-gc-reliability-experience-measure-indicator]").addClass("hidden");
        $("[data-gc-secret-experience-measure-indicator]").removeClass("hidden");
    });

// Age of Consent ==============================================================
$("[data-gc-parent-guardian-consent-trigger]").on("click", function() {
    if ($(this).hasClass("active")) {

    } else {
        // Trigger this elements stuff.
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
        // Trigger this elements stuff.
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
        // Trigger this elements stuff.
        // Remove alternative option's stuff.
        $("[data-gc-birth-name-different-trigger]").removeClass("active");
        $("[data-gc-birth-name-different]").addClass("hidden");
    }
});

$("[data-gc-birth-name-different-trigger]").on("click", function() {
    if ($(this).hasClass("active")) {

    } else {
        // Trigger this elements stuff.
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
        // Trigger this elements stuff.
        // Remove alternative option's stuff.
        $("[data-gc-legal-name-different-trigger]").removeClass("active");
        $("[data-gc-legal-name-different]").addClass("hidden");
    }
});

$("[data-gc-legal-name-different-trigger]").on("click", function() {
    if ($(this).hasClass("active")) {

    } else {
        // Trigger this elements stuff.
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
        // Trigger this elements stuff.
        // Remove alternative option's stuff.
        $("[data-gc-citizen-false-trigger]").removeClass("active");
        $("[data-gc-citizen-false]").addClass("hidden");
    }
});

$("[data-gc-citizen-false-trigger]").on("click", function() {
    if ($(this).hasClass("active")) {

    } else {
        // Trigger this elements stuff.
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
        // Trigger this elements stuff.
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
        // Trigger this elements stuff.
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
        // Trigger this elements stuff.
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
        // Trigger this elements stuff.
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
        // Trigger this elements stuff.
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
        // Trigger this elements stuff.
        $(this).addClass("active");
        $("[data-gc-naturalization-application-false]").removeClass("hidden");
        // Remove alternative option's stuff.
        $("[data-gc-naturalization-application-true-trigger]").removeClass("active");
        $("[data-gc-naturalization-application-true]").addClass("hidden");
    }
});

// Previous Screening ==========================================================

    // Applications
    $("[data-gc-screen-apply-true-trigger]").on("click", function() {
        if ($(this).hasClass("active")) {

        } else {
            // Trigger this elements stuff.
            $(this).addClass("active");
            $("[data-gc-screen-apply-true]").removeClass("hidden");
            // Remove alternative option's stuff.
            $("[data-gc-screen-apply-false-trigger]").removeClass("active");
            $("[data-gc-screen-apply-false]").addClass("hidden");
        }
    });

    $("[data-gc-screen-apply-false-trigger]").on("click", function() {
        if ($(this).hasClass("active")) {

        } else {
            // Trigger this elements stuff.
            $(this).addClass("active");
            $("[data-gc-screen-apply-false]").removeClass("hidden");
            // Remove alternative option's stuff.
            $("[data-gc-screen-apply-true-trigger]").removeClass("active");
            $("[data-gc-screen-apply-true]").addClass("hidden");
        }
    });

    // Granted
    $("[data-gc-screen-granted-true-trigger]").on("click", function() {
        if ($(this).hasClass("active")) {

        } else {
            // Trigger this elements stuff.
            $(this).addClass("active");
            $("[data-gc-screen-granted-true]").removeClass("hidden");
            // Remove alternative option's stuff.
            $("[data-gc-screen-granted-false-trigger]").removeClass("active");
            $("[data-gc-screen-granted-false]").addClass("hidden");
        }
    });

    $("[data-gc-screen-granted-false-trigger]").on("click", function() {
        if ($(this).hasClass("active")) {

        } else {
            // Trigger this elements stuff.
            $(this).addClass("active");
            $("[data-gc-screen-granted-false]").removeClass("hidden");
            // Remove alternative option's stuff.
            $("[data-gc-screen-granted-true-trigger]").removeClass("active");
            $("[data-gc-screen-granted-true]").addClass("hidden");
        }
    });

    // Revoked
    $("[data-gc-screen-revoked-true-trigger]").on("click", function() {
        if ($(this).hasClass("active")) {

        } else {
            // Trigger this elements stuff.
            $(this).addClass("active");
            $("[data-gc-screen-revoked-true]").removeClass("hidden");
            // Remove alternative option's stuff.
            $("[data-gc-screen-revoked-false-trigger]").removeClass("active");
            $("[data-gc-screen-revoked-false]").addClass("hidden");
        }
    });

    $("[data-gc-screen-revoked-false-trigger]").on("click", function() {
        if ($(this).hasClass("active")) {

        } else {
            // Trigger this elements stuff.
            $(this).addClass("active");
            $("[data-gc-screen-revoked-false]").removeClass("hidden");
            // Remove alternative option's stuff.
            $("[data-gc-screen-revoked-true-trigger]").removeClass("active");
            $("[data-gc-screen-revoked-true]").addClass("hidden");
        }
    });

    // Denied
    $("[data-gc-screen-denied-true-trigger]").on("click", function() {
        if ($(this).hasClass("active")) {

        } else {
            // Trigger this elements stuff.
            $(this).addClass("active");
            $("[data-gc-screen-denied-true]").removeClass("hidden");
            // Remove alternative option's stuff.
            $("[data-gc-screen-denied-false-trigger]").removeClass("active");
            $("[data-gc-screen-denied-false]").addClass("hidden");
        }
    });

    $("[data-gc-screen-denied-false-trigger]").on("click", function() {
        if ($(this).hasClass("active")) {

        } else {
            // Trigger this elements stuff.
            $(this).addClass("active");
            $("[data-gc-screen-denied-false]").removeClass("hidden");
            // Remove alternative option's stuff.
            $("[data-gc-screen-denied-true-trigger]").removeClass("active");
            $("[data-gc-screen-denied-true]").addClass("hidden");
        }
    });

// Current Address =============================================================
$("[data-gc-current-address-trigger]").on("click", function() {
    if ($(this).hasClass("active")) {
        $(this).removeClass("active");
        $("[data-gc-current-address]").removeClass("hidden");
    } else {
        // Trigger this elements stuff.
        $(this).addClass("active");
        $("[data-gc-current-address]").addClass("hidden");
    }
});

// Current Experience ==========================================================
$("[data-gc-current-experience-trigger]").on("click", function() {
    if ($(this).hasClass("active")) {
        $(this).removeClass("active");
        $("[data-gc-current-experience]").removeClass("hidden");
    } else {
        // Trigger this elements stuff.
        $(this).addClass("active");
        $("[data-gc-current-experience]").addClass("hidden");
    }
});

// Experience Unemployment
$("[data-gc-experience-unemployed-true-trigger]").on("click", function() {
    if ($(this).hasClass("active")) {

    } else {
        // Trigger this elements stuff.
        $(this).addClass("active");
        $("[data-gc-experience-unemployed-true]").removeClass("hidden");
        // Remove alternative option's stuff.
        $("[data-gc-experience-unemployed-false-trigger]").removeClass("active");
        $("[data-gc-experience-unemployed-false]").addClass("hidden");
        dialogSizing($("[data-c-dialog][data-c-dialog-id=\"experience-dialog\"]"));
    }
});

$("[data-gc-experience-unemployed-false-trigger]").on("click", function() {
    if ($(this).hasClass("active")) {

    } else {
        // Trigger this elements stuff.
        $(this).addClass("active");
        $("[data-gc-experience-unemployed-false]").removeClass("hidden");
        // Remove alternative option's stuff.
        $("[data-gc-experience-unemployed-true-trigger]").removeClass("active");
        $("[data-gc-experience-unemployed-true]").addClass("hidden");
        dialogSizing($("[data-c-dialog][data-c-dialog-id=\"experience-dialog\"]"));
    }
});

// Experience Dismissal
$("[data-gc-experience-dismissal-true-trigger]").on("click", function() {
    if ($(this).hasClass("active")) {

    } else {
        // Trigger this elements stuff.
        $(this).addClass("active");
        $("[data-gc-experience-dismissal-true]").removeClass("hidden");
        // Remove alternative option's stuff.
        $("[data-gc-experience-dismissal-false-trigger]").removeClass("active");
        $("[data-gc-experience-dismissal-false]").addClass("hidden");
        dialogSizing($("[data-c-dialog][data-c-dialog-id=\"experience-dialog\"]"));
    }
});

$("[data-gc-experience-dismissal-false-trigger]").on("click", function() {
    if ($(this).hasClass("active")) {

    } else {
        // Trigger this elements stuff.
        $(this).addClass("active");
        $("[data-gc-experience-dismissal-false]").removeClass("hidden");
        // Remove alternative option's stuff.
        $("[data-gc-experience-dismissal-true-trigger]").removeClass("active");
        $("[data-gc-experience-dismissal-true]").addClass("hidden");
        dialogSizing($("[data-c-dialog][data-c-dialog-id=\"experience-dialog\"]"));
    }
});

// Experience Supervisor
$("[data-gc-experience-supervisor-true-trigger]").on("click", function() {
    if ($(this).hasClass("active")) {

    } else {
        // Trigger this elements stuff.
        $(this).addClass("active");
        $("[data-gc-experience-supervisor-true]").removeClass("hidden");
        // Remove alternative option's stuff.
        $("[data-gc-experience-supervisor-false-trigger]").removeClass("active");
        $("[data-gc-experience-supervisor-false]").addClass("hidden");
        dialogSizing($("[data-c-dialog][data-c-dialog-id=\"experience-dialog\"]"));
    }
});

$("[data-gc-experience-supervisor-false-trigger]").on("click", function() {
    if ($(this).hasClass("active")) {

    } else {
        // Trigger this elements stuff.
        $(this).addClass("active");
        $("[data-gc-experience-supervisor-false]").removeClass("hidden");
        // Remove alternative option's stuff.
        $("[data-gc-experience-supervisor-true-trigger]").removeClass("active");
        $("[data-gc-experience-supervisor-true]").addClass("hidden");
        dialogSizing($("[data-c-dialog][data-c-dialog-id=\"experience-dialog\"]"));
    }
});

// Reference Work/Education
$("[data-gc-reference-work-true-trigger]").on("click", function() {
    if ($(this).hasClass("active")) {

    } else {
        // Trigger this elements stuff.
        $(this).addClass("active");
        $("[data-gc-reference-work-true]").removeClass("hidden");
        // Remove alternative option's stuff.
        $("[data-gc-reference-work-false-trigger]").removeClass("active");
        $("[data-gc-reference-work-false]").addClass("hidden");
    }
});

$("[data-gc-reference-work-false-trigger]").on("click", function() {
    if ($(this).hasClass("active")) {

    } else {
        // Trigger this elements stuff.
        $(this).addClass("active");
        $("[data-gc-reference-work-false]").removeClass("hidden");
        // Remove alternative option's stuff.
        $("[data-gc-reference-work-true-trigger]").removeClass("active");
        $("[data-gc-reference-work-true]").addClass("hidden");
    }
});

// Record
$("[data-gc-record-true-trigger]").on("click", function() {
    if ($(this).hasClass("active")) {

    } else {
        // Trigger this elements stuff.
        $(this).addClass("active");
        $("[data-gc-record-true]").removeClass("hidden");
        // Remove alternative option's stuff.
        $("[data-gc-record-false-trigger]").removeClass("active");
        $("[data-gc-record-false]").addClass("hidden");
    }
});

$("[data-gc-record-false-trigger]").on("click", function() {
    if ($(this).hasClass("active")) {

    } else {
        // Trigger this elements stuff.
        $(this).addClass("active");
        $("[data-gc-record-false]").removeClass("hidden");
        // Remove alternative option's stuff.
        $("[data-gc-record-true-trigger]").removeClass("active");
        $("[data-gc-record-true]").addClass("hidden");
    }
});

// Notification
$("[data-gc-notification-true-trigger]").on("click", function() {
    if ($(this).hasClass("active")) {

    } else {
        // Trigger this elements stuff.
        $(this).addClass("active");
        $("[data-gc-notification-true]").removeClass("hidden");
        // Remove alternative option's stuff.
        $("[data-gc-notification-false-trigger]").removeClass("active");
        $("[data-gc-notification-false]").addClass("hidden");
    }
});

$("[data-gc-notification-false-trigger]").on("click", function() {
    if ($(this).hasClass("active")) {

    } else {
        // Trigger this elements stuff.
        $(this).addClass("active");
        $("[data-gc-notification-false]").removeClass("hidden");
        // Remove alternative option's stuff.
        $("[data-gc-notification-true-trigger]").removeClass("active");
        $("[data-gc-notification-true]").addClass("hidden");
    }
});

// Marital Status

    // Married
    $("[data-gc-marriage-trigger]").on("click", function() {
        $("[data-gc-married-previous]").removeClass("hidden");
        $("[data-gc-date-death]").addClass("hidden");
        $("[data-gc-date-separation]").addClass("hidden");
        $("[data-gc-date-divorce]").addClass("hidden");
        $("[data-gc-single-previous]").addClass("hidden");
        $("[data-gc-current-spouse]").removeClass("hidden");
        $("[data-gc-former-spouse]").addClass("hidden");
    });
    $("[data-gc-married-previous-true-trigger]").on("click", function() {
        $("[data-gc-former-spouse]").removeClass("hidden");
    });
    $("[data-gc-married-previous-false-trigger]").on("click", function() {
        $("[data-gc-former-spouse]").addClass("hidden");
    });
    // Common Law
    $("[data-gc-common-law-trigger]").on("click", function() {
        $("[data-gc-married-previous]").removeClass("hidden");
        $("[data-gc-date-death]").addClass("hidden");
        $("[data-gc-date-separation]").addClass("hidden");
        $("[data-gc-date-divorce]").addClass("hidden");
        $("[data-gc-single-previous]").addClass("hidden");
        $("[data-gc-current-spouse]").removeClass("hidden");
        $("[data-gc-former-spouse]").addClass("hidden");
    });
    $("[data-gc-married-previous-true-trigger]").on("click", function() {
        $("[data-gc-former-spouse]").removeClass("hidden");
    });
    $("[data-gc-married-previous-false-trigger]").on("click", function() {
        $("[data-gc-former-spouse]").addClass("hidden");
    });
    // Widowed
    $("[data-gc-widowed-trigger]").on("click", function() {
        $("[data-gc-married-previous]").addClass("hidden");
        $("[data-gc-date-death]").removeClass("hidden");
        $("[data-gc-date-separation]").addClass("hidden");
        $("[data-gc-date-divorce]").addClass("hidden");
        $("[data-gc-single-previous]").addClass("hidden");
        $("[data-gc-current-spouse]").addClass("hidden");
        $("[data-gc-former-spouse]").removeClass("hidden");
    });
    // Separated
    $("[data-gc-separated-trigger]").on("click", function() {
        $("[data-gc-married-previous]").addClass("hidden");
        $("[data-gc-date-death]").addClass("hidden");
        $("[data-gc-date-separation]").removeClass("hidden");
        $("[data-gc-date-divorce]").addClass("hidden");
        $("[data-gc-single-previous]").addClass("hidden");
        $("[data-gc-current-spouse]").addClass("hidden");
        $("[data-gc-former-spouse]").removeClass("hidden");
    });
    // Divorced
    $("[data-gc-divorced-trigger]").on("click", function() {
        $("[data-gc-married-previous]").addClass("hidden");
        $("[data-gc-date-death]").addClass("hidden");
        $("[data-gc-date-separation]").addClass("hidden");
        $("[data-gc-date-divorce]").removeClass("hidden");
        $("[data-gc-single-previous]").addClass("hidden");
        $("[data-gc-current-spouse]").addClass("hidden");
        $("[data-gc-former-spouse]").removeClass("hidden");
    });
    // Single
    $("[data-gc-single-trigger]").on("click", function() {
        $("[data-gc-married-previous]").addClass("hidden");
        $("[data-gc-date-death]").addClass("hidden");
        $("[data-gc-date-separation]").addClass("hidden");
        $("[data-gc-date-divorce]").addClass("hidden");
        $("[data-gc-single-previous]").removeClass("hidden");
        $("[data-gc-current-spouse]").addClass("hidden");
        $("[data-gc-former-spouse]").addClass("hidden");
    });
    $("[data-gc-single-previous-true-trigger]").on("click", function() {
        $("[data-gc-former-spouse]").removeClass("hidden");
    });
    $("[data-gc-single-previous-false-trigger]").on("click", function() {
        $("[data-gc-former-spouse]").addClass("hidden");
    });

// Cohabitants
$("[data-gc-cohabitants-true-trigger]").on("click", function() {
    if ($(this).hasClass("active")) {

    } else {
        // Trigger this elements stuff.
        $(this).addClass("active");
        $("[data-gc-cohabitants-true]").removeClass("hidden");
        // Remove alternative option's stuff.
        $("[data-gc-cohabitants-false-trigger]").removeClass("active");
        $("[data-gc-cohabitants-false]").addClass("hidden");
    }
});

$("[data-gc-cohabitants-false-trigger]").on("click", function() {
    if ($(this).hasClass("active")) {

    } else {
        // Trigger this elements stuff.
        $(this).addClass("active");
        $("[data-gc-cohabitants-false]").removeClass("hidden");
        // Remove alternative option's stuff.
        $("[data-gc-cohabitants-true-trigger]").removeClass("active");
        $("[data-gc-cohabitants-true]").addClass("hidden");
    }
});

// Travel
$("[data-gc-travel-true-trigger]").on("click", function() {
    if ($(this).hasClass("active")) {

    } else {
        // Trigger this elements stuff.
        $(this).addClass("active");
        $("[data-gc-travel-true]").removeClass("hidden");
        // Remove alternative option's stuff.
        $("[data-gc-travel-false-trigger]").removeClass("active");
        $("[data-gc-travel-false]").addClass("hidden");
    }
});

$("[data-gc-travel-false-trigger]").on("click", function() {
    if ($(this).hasClass("active")) {

    } else {
        // Trigger this elements stuff.
        $(this).addClass("active");
        $("[data-gc-travel-false]").removeClass("hidden");
        // Remove alternative option's stuff.
        $("[data-gc-travel-true-trigger]").removeClass("active");
        $("[data-gc-travel-true]").addClass("hidden");
    }
});

// Passports

    // Show Triggers 
        // Owned Trigger
        $("[data-gc-passport-list-owned-true-trigger]").on("click", function() {
            // Trigger this elements stuff.
            $("[data-gc-passport-list]").addClass("owned").removeClass("hidden");
        });
        // Held Trigger
        $("[data-gc-passport-list-held-true-trigger]").on("click", function() {
            // Trigger this elements stuff.
            $("[data-gc-passport-list]").addClass("held").removeClass("hidden");
        });
        // Applied Trigger
        $("[data-gc-passport-list-applied-true-trigger]").on("click", function() {
            // Trigger this elements stuff.
            $("[data-gc-passport-list]").addClass("applied").removeClass("hidden");
        });

    // Hide Triggers
        // Owned Trigger
        $("[data-gc-passport-list-owned-false-trigger]").on("click", function() {
            if ($("[data-gc-passport-list]").hasClass("held") || $("[data-gc-passport-list]").hasClass("applied")) {
                $("[data-gc-passport-list]").removeClass("owned");
            } else {
                // Trigger this elements stuff.
                $("[data-gc-passport-list]").removeClass("owned").addClass("hidden");
            }
        });
        // Held Trigger
        $("[data-gc-passport-list-held-false-trigger]").on("click", function() {
            if ($("[data-gc-passport-list]").hasClass("owned") || $("[data-gc-passport-list]").hasClass("applied")) {
                $("[data-gc-passport-list]").removeClass("held");
            } else {
                // Trigger this elements stuff.
                $("[data-gc-passport-list]").removeClass("held").addClass("hidden");
            }
        });
        // Applied Trigger
        $("[data-gc-passport-list-applied-false-trigger]").on("click", function() {
            if ($("[data-gc-passport-list]").hasClass("owned") || $("[data-gc-passport-list]").hasClass("held")) {
                $("[data-gc-passport-list]").removeClass("applied");
            } else {
                // Trigger this elements stuff.
                $("[data-gc-passport-list]").removeClass("applied").addClass("hidden");
            }
        });

// Assets
$("[data-gc-assets-true-trigger]").on("click", function() {
    if ($(this).hasClass("active")) {

    } else {
        // Trigger this elements stuff.
        $(this).addClass("active");
        $("[data-gc-assets-true]").removeClass("hidden");
        // Remove alternative option's stuff.
        $("[data-gc-assets-false-trigger]").removeClass("active");
        $("[data-gc-assets-false]").addClass("hidden");
    }
});

$("[data-gc-assets-false-trigger]").on("click", function() {
    if ($(this).hasClass("active")) {

    } else {
        // Trigger this elements stuff.
        $(this).addClass("active");
        $("[data-gc-assets-false]").removeClass("hidden");
        // Remove alternative option's stuff.
        $("[data-gc-assets-true-trigger]").removeClass("active");
        $("[data-gc-assets-true]").addClass("hidden");
    }
});

// Clone Stuff
// Clone Shorthand =============================================================
function clone(attr, option, selector) {
    if (option != null) {
        if (selector != null) {
            return '[data-c-' + attr + selector + '=\'' + option + '\']';
        }
        else {
            return '[data-c-' + attr + '=\'' + option + '\']';
        }
    }
    else {
        return '[data-c-' + attr + ']';
    }
}
// Dialog Sizing -------------------------------------------------------
function dialogSizing(dialog) {
    var viewportHeight = $(window).height();
    if (dialog != null) {
        var dialogHeight = $(dialog).children("div").height() + 50;
        if (dialogHeight > viewportHeight) {
            $(dialog).attr("data-c-dialog", "active--overflowing");
        }
        else {
            $(dialog).attr("data-c-dialog", "active--contained");
        }
    }
    else {
        $(clone("dialog")).each(function() {
            if ($(this).attr("data-c-dialog") == false){
                return false;
            }
            else {
                var dialogHeight = $(this).children("div").height() + 50;
                if (dialogHeight > viewportHeight) {
                    $(this).attr("data-c-dialog", "active--overflowing");
                }
                else {
                    $(this).attr("data-c-dialog", "active--contained");
                }
            }
        });
    }
}