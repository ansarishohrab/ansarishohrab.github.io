import { Op } from "sequelize";
import Education from "../models/education.model";
import Experience from "../models/experience.model";
import Language from "../models/language.model";
import Project from "../models/project.model";
import Skill from "../models/skill.model";
import Social from "../models/social.model";
import User from "../models/user.model";

export class AdminController {
  static SOCIAL_CLASS_MAPPING: any = {
    'Twitter': 'fab fa-twitter',
    'LinkedIn': 'fab fa-linkedin-in',
    'Git hub': 'fab fa-github-alt'
  }

  static LANGUAGE_RATING_MAPPING: any = {
    'Professional Proficiency': 3,
    'Native Speaker': 5,
  }

  static async addData(request: any) {
    let response: any = {
      success: true,
      message: "Record created successfully",
      statusCode: 200,
    };
    await User.create(request)
      .then((result: any) => {
        response.id = result.id;
        response.email = result.email;
        request.Socials.forEach((element: any) => {
          element.email = request.email;
          if (typeof element.name === "object") {
            element.name = element.name.name;
          }
          element.iconClass = this.SOCIAL_CLASS_MAPPING[element.name]
        });
        Social.bulkCreate(request.Socials)
          .then((result) => { })
          .catch((error) => {
            response.success = false;
            response.message = error.message;
            response.statusCode = 500;
          });
        request.Projects.forEach((element: any) => {
          element.email = request.email;
        });
        Project.bulkCreate(request.Projects)
          .then((result) => { })
          .catch((error) => {
            response.success = false;
            response.message = error.message;
            response.statusCode = 500;
          });

        request.Experiences.forEach((element: any) => {
          element.email = request.email;
        });
        Experience.bulkCreate(request.Experiences)
          .then((result) => { })
          .catch((error) => {
            response.success = false;
            response.message = error.message;
            response.statusCode = 500;
          });

        request.Skills.forEach((element: any) => {
          element.email = request.email;
          if (typeof element.level == "object") {
            element.level = element.level.name;
          }
        });
        Skill.bulkCreate(request.Skills)
          .then((result) => { })
          .catch((error) => {
            response.success = false;
            response.message = error.message;
            response.statusCode = 500;
          });
        request.Education.forEach((element: any) => {
          element.email = request.email;
        });
        Education.bulkCreate(request.Education)
          .then((result) => { })
          .catch((error) => {
            response.success = false;
            response.message = error.message;
            response.statusCode = 500;
          });
        request.Languages.forEach((element: any) => {
          element.email = request.email;
          if (typeof element.level === "object") {
            element.level = element.level.name;
          }
          element.rating = this.LANGUAGE_RATING_MAPPING[element.level]
        });
        Language.bulkCreate(request.Languages)
          .then((result) => { })
          .catch((error) => {
            response.success = false;
            response.message = error.message;
            response.statusCode = 500;
          });
      })
      .catch((error: any) => {
        response.success = false;
        switch (error.parent.code) {
          case "ER_DUP_ENTRY":
            response.message = "User already exists";
            response.statusCode = 409;
            break;
          case "ER_DATA_TOO_LONG":
            response.message = "Data too long";
            response.statusCode = 500;
            break;
          default:
            response.message = "Something went wrong";
            response.statusCode = 500;
            break;
        }
      });
    return response;
  }

  static async getUserDetails(email: string) {
    let response: any = {
      success: true,
      message: "Record created successfully",
      statusCode: 200,
    };
    await User.findOne({
      where: { email: email },
      include: [Education, Experience, Language, Project, Skill, Social],
    })
      .then(async (userDetails: any) => {
        response.statusCode = 200;
        if (userDetails) {
          userDetails.profileImage = Buffer.from(
            userDetails.profileImage
          ).toString("utf8");
          userDetails.description = Buffer.from(
            userDetails.description
          ).toString("utf8");
        }
        delete response.message;
        response.data = userDetails;
      })
      .catch((error) => {
        response.statusCode = 500;
        response.message = "Something went wrong";
      });
    return response;
  }

  static async getRegisteredEmails() {
    let response: any = {
      success: true,
      data: [],
      statusCode: 200,
    };
    await User.findAll({ attributes: ['email'] })
      .then(async (userDetails: any) => {
        console.log(userDetails)
        response.statusCode = 200;
        response.data = userDetails.map((value: any) => value.email);
      })
      .catch((error) => {
        response.statusCode = 500;
        response.message = "Something went wrong";
      });
    return response;
  }

  static async updateBasicDetails(request: any) {
    let response: any = {
      success: true,
      message: "Basic details updated successfully",
      statusCode: 200,
    };
    await User.update(request, { where: { email: request.email } })
      .then((result: any) => {
        response.id = result.id;
        response.email = result.email;
      })
      .catch((error: any) => {
        response.success = false;
        response.message = error.message;
        response.statusCode = 500
      });
    return response;
  }

  static async updateSocialInfo(request: any) {
    let response: any = {
      success: true,
      message: "Social info updated successfully",
      statusCode: 200,
    };
    let socialsArray = request.Socials
    for (let j in socialsArray) {
      socialsArray[j].email = request.email
      socialsArray[j].iconClass = this.SOCIAL_CLASS_MAPPING[socialsArray[j].name]
    }
    for (let i in socialsArray) {
      await Social.destroy({ where: { email: request.email } });
      await Social.bulkCreate(socialsArray)
        .then((result: any) => {
          response.id = result.id;
          response.data = result
        })
        .catch((error) => {
          response.success = false;
          response.message = error.message;
          response.statusCode = 500;
        });
    }
    return response;
  }

  static async updateProjects(request: any) {
    let response: any = {
      success: true,
      message: "Projects updated successfully",
      statusCode: 200,
    };
    let projects = request.Projects
    for (let i in projects) {
      await Project.destroy({ where: { email: request.email } });
      for (let j in request.Projects) {
        request.Projects[j].email = request.email
      }
      await Project.bulkCreate(request.Projects)
        .then((result: any) => {
          response.id = result.id;
          response.email = result.email;
        })
        .catch((error) => {
          response.success = false;
          response.message = error.message;
          response.statusCode = 500;
        });
    }
    return response;
  }

  static async updateSkills(request: any) {
    let response: any = {
      success: true,
      message: "Skills updated successfully",
      statusCode: 200,
    };
    let skills = request.Skills
    for (let i in skills) {
      await Skill.destroy({ where: { email: request.email } });
      for (let j in request.Skills) {
        request.Skills[j].email = request.email
      }
    }
    await Skill.bulkCreate(request.Skills)
      .then((result: any) => {
        response.id = result.id;
        response.email = result.email;
      })
      .catch((error) => {
        response.success = false;
        response.message = error.message;
        response.statusCode = 500;
      });
    return response;
  }

  static async updateExperiences(request: any) {
    let response: any = {
      success: true,
      message: "Experiences updated successfully",
      statusCode: 200,
    };
    let experiences = request.Experiences
    for (let i in experiences) {
      await Experience.destroy({ where: { email: request.email } });
      for (let j in request.Experiences) {
        request.Experiences[j].email = request.email
      }
    }
    await Experience.bulkCreate(request.Experiences)
      .then((result: any) => {
        response.id = result.id;
        response.email = result.email;
      })
      .catch((error) => {
        response.success = false;
        response.message = error.message;
        response.statusCode = 500;
      });
    return response;
  }

  static async updateEducation(request: any) {
    let response: any = {
      success: true,
      message: "Education updated successfully",
      statusCode: 200,
    };
    let education = request.Education
    for (let i in education) {
      await Education.destroy({ where: { email: request.email } });
      for (let j in request.Education) {
        request.Education[j].email = request.email
      }
    }
    await Education.bulkCreate(request.Education)
      .then((result: any) => {
        response.id = result.id;
        response.email = result.email;
      })
      .catch((error) => {
        response.success = false;
        response.message = error.message;
        response.statusCode = 500;
      });
    return response;
  }

  static async updateLanguages(request: any) {
    let response: any = {
      success: true,
      message: "Languages updated successfully",
      statusCode: 200,
    };
    let languages = request.Languages
    for (let i in languages) {
      await Language.destroy({ where: { email: request.email } });
    }
    request.Languages.forEach((element: any) => {
      element.email = request.email;
      element.rating = this.LANGUAGE_RATING_MAPPING[element.level]
    });
    await Language.bulkCreate(request.Languages)
      .then((result: any) => {
        response.Languages = result
      })
      .catch((error) => {
        response.success = false;
        response.message = error.message;
        response.statusCode = 500;
      });
    return response;
  }


  static async deleteUserDetails(email: any) {
    let response: any = {
      success: true,
      message: "User deleted successfully",
      statusCode: 200,
    };
    await User.destroy({ where: { email: email } })
      .then((result: any) => {
        response.id = result.id;
        response.email = result.email;
      })
      .catch((error: any) => {
        response.success = false;
        response.message = error.message;
        response.statusCode = 500
      });
    return response;
  }


}
