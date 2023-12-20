import { Router } from "express";
import * as controller from "./controller.js";
import Auth from "./auth.js";

const router=Router();

router.route("/adduser").post(controller.addUser);
router.route("/login").post(controller.login);
router.route("/home").post(Auth,controller.home);
router.route("/addstaff").post(controller.addStaff);
router.route("/getstaff").get(controller.getStaff);
router.route("/getstaffdetails/:id").post(controller.getStaffulldata)
router.route("/editstaffdetails/:id").patch(controller.editStaffdetails);
router.route("/delstaffdata/:id").delete(controller.delStaffData);
router.route("/stafflogin").post(controller.stafflogin);
router.route("/getusername/:phone").get(controller.forgotUsername);
router.route("/forgotepwd/:phone").patch(controller.staffFrgtPwd);
router.route("/addstudent").post(controller.addStudent);
router.route("/getallstuds").get(controller.getStudents);
router.route("/deletestudent/:id").delete(controller.deleteStudent);
router.route("/getstudentdetails/:id").post(controller.getStudentDetails);
router.route("/editstudentdetails/:id").patch(controller.EditStudentDetails);
router.route("/studentlogin").post(controller.StudentLogin);
router.route("/getdetsilsloginedstudent").get(Auth,controller.GetDtsilsLoginedStudent);



export default router;