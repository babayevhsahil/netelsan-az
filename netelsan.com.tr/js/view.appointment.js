var Contact_app={initialized:false,initialize:function(){if(this.initialized)return;this.initialized=true;this.build();this.events();},build:function(){this.validations();},events:function(){},validations:function(){$("#appointment_Form").validate({submitHandler:function(form){$.ajax({type:"POST",url:"php/app-form.php",data:{"appointment_name":$("#appointment_Form #appointment_name").val(),"appointment_email":$("#appointment_Form #appointment_email").val(),"appointment_message":$("#appointment_Form #appointment_message").val(),"appointment_date":$("#appointment_Form #appointment_date").val(),"appointment_reason":$("#appointment_Form #appointment_reason").val()},dataType:"json",success:function(data){if(data.response=="success123"){$("#appSuccess").removeClass("hidden");$("#appError").addClass("hidden");$("#contactForm #appointment_name, #contactForm #appointment_email, #contactForm #appointment_message, #contactForm #appointment_date").val("").blur().closest(".control-group").removeClass("success").removeClass("error");}else{$("#appError").removeClass("hidden");$("#contactError").addClass("hidden");}}});},rules:{appointment_name:{required:true},appointment_email:{required:true,email:true},appointment_message:{required:true},appointment_date:{required:true},appointment_reason:{required:true}},highlight:function(element){$(element).closest(".control-group").removeClass("success").addClass("error");},success:function(element){$(element).closest(".control-group").removeClass("error").addClass("success");}});}};Contact_app.initialize();