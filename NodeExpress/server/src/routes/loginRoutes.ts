import { Router, Request, Response, NextFunction } from "express";

interface RequestWithBody extends Request {
  // @overwrite
  body: { [key: string]: string | undefined };
}

//middleWare to check if is auth
function requireAuth(req: Request, resp: Response, next: NextFunction): void {
  if (req.session && req.session.loggedIn) {
    next();
    return;
  }

  resp.status(403);
  resp.send("Not permitted");
}

const router = Router();

router.get("/", (req: Request, res: Response) => {
  if (req.session && req.session.loggedIn) {
    res.send(`
    <div>
      <h1> You are logged in </h1>
      <a href="/logout" > Logout </a>
    </div>
    `);
  } else {
    res.send(`
    <div>
      <h1> You are NOT logged in </h1>
      <a href="/login" > Login </a>
    </div>
    `);
  }
});

router.get("/login", (req, res) => {
  res.send(`
  <form method="POST">
    <div>
      <label>Email</label>
      <input name="email" />
    </div>
    <div>
      <label>Password</label>
      <input name="password" type="password" />
    </div>
    <button>Submit</button>
  </form>
  `);
});

router.post("/login", (req: RequestWithBody, res: Response) => {
  const { email, password } = req.body;

  if (email === "hi@hi.com" && password === "password") {
    req.session = { loggedIn: true };
    res.redirect("/");
  } else {
    res.send("Invalid email or password");
  }
});

router.get("/logout", (req: Request, res: Response) => {
  req.session = undefined;
  res.redirect("/");
});

router.get("/protected", requireAuth, (req: Request, res: Response) => {
  res.send("Welcome to protected route");
});

export { router };
