$("[data-gc-parent-guardian-consent-trigger]").on("click",function(){$(this).hasClass("active")||($(this).addClass("active"),$("[data-gc-parent-guardian-consent]").removeClass("hidden"),$("[data-gc-personal-consent-trigger]").removeClass("active"),$("[data-gc-personal-consent]").addClass("hidden"))}),$("[data-gc-personal-consent-trigger]").on("click",function(){$(this).hasClass("active")||($(this).addClass("active"),$("[data-gc-personal-consent]").removeClass("hidden"),$("[data-gc-parent-guardian-consent-trigger]").removeClass("active"),$("[data-gc-parent-guardian-consent]").addClass("hidden"))}),$("[data-gc-birth-name-same-trigger]").on("click",function(){$(this).hasClass("active")||($("[data-gc-birth-name-different-trigger]").removeClass("active"),$("[data-gc-birth-name-different]").addClass("hidden"))}),$("[data-gc-birth-name-different-trigger]").on("click",function(){$(this).hasClass("active")||($(this).addClass("active"),$("[data-gc-birth-name-different]").removeClass("hidden"),$("[data-gc-birth-name-same-trigger]").removeClass("active"),$("[data-gc-birth-name-same]").addClass("hidden"))}),$("[data-gc-legal-name-same-trigger]").on("click",function(){$(this).hasClass("active")||($("[data-gc-legal-name-different-trigger]").removeClass("active"),$("[data-gc-legal-name-different]").addClass("hidden"))}),$("[data-gc-legal-name-different-trigger]").on("click",function(){$(this).hasClass("active")||($(this).addClass("active"),$("[data-gc-legal-name-different]").removeClass("hidden"),$("[data-gc-legal-name-same-trigger]").removeClass("active"),$("[data-gc-legal-name-same]").addClass("hidden"))}),$("[data-gc-citizen-true-trigger]").on("click",function(){$(this).hasClass("active")||($("[data-gc-citizen-false-trigger]").removeClass("active"),$("[data-gc-citizen-false]").addClass("hidden"))}),$("[data-gc-citizen-false-trigger]").on("click",function(){$(this).hasClass("active")||($(this).addClass("active"),$("[data-gc-citizen-false]").removeClass("hidden"),$("[data-gc-citizen-true-trigger]").removeClass("active"),$("[data-gc-citizen-true]").addClass("hidden"))}),$("[data-gc-multiple-citizen-true-trigger]").on("click",function(){$(this).hasClass("active")||($(this).addClass("active"),$("[data-gc-multiple-citizen-true]").removeClass("hidden"),$("[data-gc-multiple-citizen-false-trigger]").removeClass("active"),$("[data-gc-multiple-citizen-false]").addClass("hidden"))}),$("[data-gc-multiple-citizen-false-trigger]").on("click",function(){$(this).hasClass("active")||($("[data-gc-multiple-citizen-true-trigger]").removeClass("active"),$("[data-gc-multiple-citizen-true]").addClass("hidden"))}),$("[data-gc-home-select]").on("click",function(){"Canada"===$(this).val()?$("[data-gc-foreign-born]").addClass("hidden"):$("[data-gc-foreign-born]").removeClass("hidden")}),$("[data-gc-naturalization-true-trigger]").on("click",function(){$(this).hasClass("active")||($(this).addClass("active"),$("[data-gc-naturalization-true]").removeClass("hidden"),$("[data-gc-naturalization-false-trigger]").removeClass("active"),$("[data-gc-naturalization-false]").addClass("hidden"))}),$("[data-gc-naturalization-false-trigger]").on("click",function(){$(this).hasClass("active")||($(this).addClass("active"),$("[data-gc-naturalization-false]").removeClass("hidden"),$("[data-gc-naturalization-true-trigger]").removeClass("active"),$("[data-gc-naturalization-true]").addClass("hidden"))}),$("[data-gc-naturalization-application-true-trigger]").on("click",function(){$(this).hasClass("active")||($(this).addClass("active"),$("[data-gc-naturalization-application-true]").removeClass("hidden"),$("[data-gc-naturalization-application-false-trigger]").removeClass("active"),$("[data-gc-naturalization-application-false]").addClass("hidden"))}),$("[data-gc-naturalization-application-false-trigger]").on("click",function(){$(this).hasClass("active")||($(this).addClass("active"),$("[data-gc-naturalization-application-false]").removeClass("hidden"),$("[data-gc-naturalization-application-true-trigger]").removeClass("active"),$("[data-gc-naturalization-application-true]").addClass("hidden"))}),$("[data-gc-screen-apply-true-trigger]").on("click",function(){$(this).hasClass("active")||($(this).addClass("active"),$("[data-gc-screen-apply-true]").removeClass("hidden"),$("[data-gc-screen-apply-false-trigger]").removeClass("active"),$("[data-gc-screen-apply-false]").addClass("hidden"))}),$("[data-gc-screen-apply-false-trigger]").on("click",function(){$(this).hasClass("active")||($(this).addClass("active"),$("[data-gc-screen-apply-false]").removeClass("hidden"),$("[data-gc-screen-apply-true-trigger]").removeClass("active"),$("[data-gc-screen-apply-true]").addClass("hidden"))}),$("[data-gc-screen-granted-true-trigger]").on("click",function(){$(this).hasClass("active")||($(this).addClass("active"),$("[data-gc-screen-granted-true]").removeClass("hidden"),$("[data-gc-screen-granted-false-trigger]").removeClass("active"),$("[data-gc-screen-granted-false]").addClass("hidden"))}),$("[data-gc-screen-granted-false-trigger]").on("click",function(){$(this).hasClass("active")||($(this).addClass("active"),$("[data-gc-screen-granted-false]").removeClass("hidden"),$("[data-gc-screen-granted-true-trigger]").removeClass("active"),$("[data-gc-screen-granted-true]").addClass("hidden"))}),$("[data-gc-screen-revoked-true-trigger]").on("click",function(){$(this).hasClass("active")||($(this).addClass("active"),$("[data-gc-screen-revoked-true]").removeClass("hidden"),$("[data-gc-screen-revoked-false-trigger]").removeClass("active"),$("[data-gc-screen-revoked-false]").addClass("hidden"))}),$("[data-gc-screen-revoked-false-trigger]").on("click",function(){$(this).hasClass("active")||($(this).addClass("active"),$("[data-gc-screen-revoked-false]").removeClass("hidden"),$("[data-gc-screen-revoked-true-trigger]").removeClass("active"),$("[data-gc-screen-revoked-true]").addClass("hidden"))}),$("[data-gc-screen-denied-true-trigger]").on("click",function(){$(this).hasClass("active")||($(this).addClass("active"),$("[data-gc-screen-denied-true]").removeClass("hidden"),$("[data-gc-screen-denied-false-trigger]").removeClass("active"),$("[data-gc-screen-denied-false]").addClass("hidden"))}),$("[data-gc-screen-denied-false-trigger]").on("click",function(){$(this).hasClass("active")||($(this).addClass("active"),$("[data-gc-screen-denied-false]").removeClass("hidden"),$("[data-gc-screen-denied-true-trigger]").removeClass("active"),$("[data-gc-screen-denied-true]").addClass("hidden"))}),$("[data-gc-current-address-trigger]").on("click",function(){$(this).hasClass("active")?($(this).removeClass("active"),$("[data-gc-current-address]").removeClass("hidden")):($(this).addClass("active"),$("[data-gc-current-address]").addClass("hidden"))}),$("[data-gc-reference-work-true-trigger]").on("click",function(){$(this).hasClass("active")||($(this).addClass("active"),$("[data-gc-reference-work-true]").removeClass("hidden"),$("[data-gc-reference-work-false-trigger]").removeClass("active"),$("[data-gc-reference-work-false]").addClass("hidden"))}),$("[data-gc-reference-work-false-trigger]").on("click",function(){$(this).hasClass("active")||($(this).addClass("active"),$("[data-gc-reference-work-false]").removeClass("hidden"),$("[data-gc-reference-work-true-trigger]").removeClass("active"),$("[data-gc-reference-work-true]").addClass("hidden"))}),$("[data-gc-record-true-trigger]").on("click",function(){$(this).hasClass("active")||($(this).addClass("active"),$("[data-gc-record-true]").removeClass("hidden"),$("[data-gc-record-false-trigger]").removeClass("active"),$("[data-gc-record-false]").addClass("hidden"))}),$("[data-gc-record-false-trigger]").on("click",function(){$(this).hasClass("active")||($(this).addClass("active"),$("[data-gc-record-false]").removeClass("hidden"),$("[data-gc-record-true-trigger]").removeClass("active"),$("[data-gc-record-true]").addClass("hidden"))});