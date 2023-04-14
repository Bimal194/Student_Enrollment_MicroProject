var jpdbBaseURL= 'http://api.login2explore.com:5577';
var jpdbIRL='/api/irl';
var jpdbIML='/api/iml';
var studDBName ='SCHOOL-DB';
var studRelationName='STUDENT-TABLE';
var connToken='90932828|-31949281616568876|90948237';


$('#studId').focus();
 
 function saveRecNo2LS(jsonObj)
 {
     var lvData=JSON.parse(jsonObj.data);
     localStorage.setItem('recno', lvData.rec_no);
 }
 
 
 function fillData(jsonObj)
 {
     saveRecNo2LS(jsonObj);
     var record= JSON.parse(jsonObj.data).record;
     
        $("#studName").val(record.studName);
        $("#studClass").val(record.studClas);
        $("#studDOB").val(record.studDOB);
        $("#studAddress").val(record.studAddress);
        $("#studEnrollDate").val(record.studEnrollDate);
       
 }
 
 function validateAndGetFormData() {
        var studIdVar = $("#studId").val();
        if (studIdVar === "") {
          alert("Student Roll-No Required Value");
          $("#studId").focus();
          return "";
        }
        var studNameVar = $("#studName").val();
        if (studNameVar === "") {
          alert("Student Name is Required Value");
          $("#studName").focus();
          return "";
        }
        var studClassVar = $("#studClass").val();
        if (studClassVar === "") {
          alert("Student Class is Required Value");
          $("#studClass").focus();
          return "";
        }

        var studDOBVar = $("#studDOB").val();
        if (studDOBVar === "") {
          alert("Student Birth-Date is Required Value");
          $("studDOB").focus();
          return "";
        }

        var studAddressVar = $("#studAddress").val();
        if (studAddressVar === "") {
          alert("Student Address is Required Value");
          $("#studAddress").focus();
          return "";
        }

        var studEnrollDateVar = $("studEnrollDate").val();
        if (studEnrollDateVar === "") {
          alert("Student Enrollment-Date is Required Value");
          $("studEnrollDate").focus();
          return "";
        }

        var jsonStrObj = {
          studId: studIdVar,
          studName: studNameVar,
          studClass: studClassVar,
          studDOB: studDOBVar,
          studAddress: studAddressVar,
          studEnrollDate: studEnrollDateVar
        };
        return JSON.stringify(jsonStrObj);
      }

      function getstudIdASJsonObj() {
        var studid = $("#studId").val();
        var jsonStr = {
          id: studid
        };
        return JSON.stringify(jsonStr);
      }

      function getStud() {
        var studIdJsonObj = getstudIdASJsonObj();
        var getRequest = createGET_BY_KEYRequest(
          connToken,
          studDBName,
          studRelationName,
          studIdJsonObj
        );
        jQuery.ajaxSetup({ async: false });
        var resJsonObj = executeCommandAtGivenBaseUrl(
          getRequest,
          jpdbBaseURL,
          jpdbIRL
        );
        jQuery.ajaxSetup({ async: true });
        if (resJsonObj.status === 400) {
          $("#save").prop("disabled", false);
          $("#reset").prop("disabled", false);
          $("#studName").focus();
        } 
        else if (resJsonObj.status === 200) {
          
           $("#studId").prop("disabled", true);
           $("#save").prop("disabled", true);  
          fillData(resJsonObj);
          $("#change").prop("disabled", false);
          $("#reset").prop("disabled", false);
          $("#studName").focus();
        }
      }

      function resetForm() {
        $("#studId").val("");
        $("#studName").val("");
        $("#studClass").val("");
        $("#studDOB").val("");
        $("#studAddress").val("");
        $("#studEnrollDate").val("");
        $("#studId").focus();
      }

      function changeData() {
        $("#change").prop("disabled", true);
        jsonChg = validateData();
        var updateRequest = createUPDATERecordRequest(
          connToken,
          jsonChg,
          studDBName,
          studRelationName,
          localStorage.getItem("recno")
        );
        jQuery.ajaxSetup({ async: false });
        var resJsonObj = executeCommandAtGivenBaseUrl(
          updateRequest.jpdBaseURL,
          jpdbIML
        );
        jQuery.ajaxSetup({ async: true });
        console.log(resJsonObj);
        resetForm();
        $("#studId").focus();
      }

      function saveData() {
        // validate form data

        // create JPDB request string - token , dbname , relation name ...

        // Execute this request

        //Reset the form data

        var jsonStr = validateAndGetFormData();
        if (jsonStr === "") {
          return;
        }
        var putReqStr = createPUTRequest(
          "90932828|-31949281616568876|90948237",
          jsonStr,
          "SCHOOL-DB",
          "STUDENT-TABLE"
        );

        alert(putReqStr);

        jQuery.ajaxSetup({ async: false });
        var resultObj = executeCommandAtGivenBaseUrl(
          putReqStr,
          "http://api.login2explore.com:5577",
          "/api/iml"
        );
        jQuery.ajaxSetup({ async: true });

        alert(JSON.stringify(resultObj));
        resetForm();
      }