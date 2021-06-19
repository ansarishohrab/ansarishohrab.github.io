import Router from "express";
import { AdminController } from "../controllers/admin.controllers";
const router = Router();

router.post("/register", (req: any, res: any, next: any) => {
  AdminController.addData(req.body).then(
    (result: any) => {
      res.status(result.statusCode).header().send(result);
    },
    (error: any) => {
      res.status(500).send(error);
    }
  );
});

router.get("/user-details/:emailId", (req: any, res: any, next: any) => {
  AdminController.getUserDetails(req.params.emailId).then(
    (result: any) => {
      res.status(result.statusCode).header().send(result);
    },
    (error: any) => {
      res.status(500).send(error);
    }
  );
});

router.get("/registered-emails", (req: any, res: any, next: any) => {
  AdminController.getRegisteredEmails().then(
    (result: any) => {
      res.status(result.statusCode).header().send(result);
    },
    (error: any) => {
      res.status(500).send(error);
    }
  );
});

router.post('/update-basic-details', (req: any, res: any, next: any) => {
  AdminController.updateBasicDetails(req.body).then(
    (result: any) => {
      res.status(result.statusCode).header().send(result);
    },
    (error: any) => {
      res.status(500).send(error);
    }
  );
})

router.post('/update-social-info', (req: any, res: any, next: any) => {
  AdminController.updateSocialInfo(req.body).then(
    (result: any) => {
      res.status(result.statusCode).header().send(result);
    },
    (error: any) => {
      res.status(500).send(error);
    }
  );
})

router.post('/update-projects', (req: any, res: any, next: any) => {
  AdminController.updateProjects(req.body).then(
    (result: any) => {
      res.status(result.statusCode).header().send(result);
    },
    (error: any) => {
      res.status(500).send(error);
    }
  );
});

router.post('/update-skills', (req: any, res: any, next: any) => {
  AdminController.updateSkills(req.body).then(
    (result: any) => {
      res.status(result.statusCode).header().send(result);
    },
    (error: any) => {
      res.status(500).send(error);
    }
  );
})

router.post('/update-experiences', (req: any, res: any, next: any) => {
  AdminController.updateExperiences(req.body).then(
    (result: any) => {
      res.status(result.statusCode).header().send(result);
    },
    (error: any) => {
      res.status(500).send(error);
    }
  );
})

router.post('/update-education', (req: any, res: any, next: any) => {
  AdminController.updateEducation(req.body).then(
    (result: any) => {
      res.status(result.statusCode).header().send(result);
    },
    (error: any) => {
      res.status(500).send(error);
    }
  );
})

router.post('/update-languages', (req: any, res: any, next: any) => {
  AdminController.updateLanguages(req.body).then(
    (result: any) => {
      res.status(result.statusCode).header().send(result);
    },
    (error: any) => {
      res.status(500).send(error);
    }
  );
})

router.delete('/user-details/:emailId', (req: any, res: any, next: any) => {
  AdminController.deleteUserDetails(req.params.emailId).then(
    (result: any) => {
      res.status(result.statusCode).header().send(result);
    },
    (error: any) => {
      res.status(500).send(error);
    }
  );
})
export default router;
