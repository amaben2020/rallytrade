$(document).ready(function () {
	$(".login-tab").click(function () {
		$(".login-box").show();
		$(".register-box").hide();
		$(".login-tab").addClass("active");
		$(".register-tab").removeClass("active");
	});
	$(".register-tab").click(function () {
		$(".register-box").show();
		$(".login-box").hide();
		$(".register-tab").addClass("active");
		$(".login-tab").removeClass("active");
	});
});
